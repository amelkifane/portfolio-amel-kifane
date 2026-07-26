/* =========================================================
   Amel Kifane — Shared UI behaviors (all pages)
========================================================= */

// ---------- Theme (dark/light) ----------
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const theme = saved || "dark";
  document.documentElement.setAttribute("data-theme", theme);
})();

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  document.querySelectorAll("[data-theme-icon]").forEach((el) => {
    el.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
  });
}

// ---------- Preloader ----------
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => preloader.classList.add("hide"), 250);
  }
});

// ---------- Mobile nav toggle ----------
function toggleMobileNav() {
  const menu = document.getElementById("mobileNav");
  if (menu) menu.classList.toggle("hidden");
}

// ---------- Scroll progress bar + back to top ----------
function onScroll() {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  const bar = document.getElementById("scrollProgress");
  if (bar) bar.style.width = progress + "%";

  const backToTop = document.getElementById("backToTop");
  if (backToTop) backToTop.classList.toggle("show", scrollTop > 400);
}
document.addEventListener("scroll", onScroll, { passive: true });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- Offline detection ----------
function updateOnlineStatus() {
  const banner = document.getElementById("offlineBanner");
  if (!banner) return;
  banner.classList.toggle("show", !navigator.onLine);
}
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

// ---------- Scroll reveal animations ----------
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );
  items.forEach((el) => observer.observe(el));
}

// ---------- Animated counters (stats) ----------
function animateCounters(selector = "[data-counter]") {
  const items = document.querySelectorAll(selector);
  if (items.length === 0) return;
  const run = (el) => {
    const target = parseInt(el.getAttribute("data-counter"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1200;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    items.forEach((el) => obs.observe(el));
  } else {
    items.forEach(run);
  }
}

// ---------- Typing effect ----------
function typeEffect(el, words, opts = {}) {
  if (!el || !words || words.length === 0) return;
  const typeSpeed = opts.typeSpeed || 70;
  const eraseSpeed = opts.eraseSpeed || 40;
  const pause = opts.pause || 1400;
  let wordIndex = 0;
  let charIndex = 0;
  let erasing = false;

  function tick() {
    const current = words[wordIndex];
    if (!erasing) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        erasing = true;
        return setTimeout(tick, pause);
      }
      return setTimeout(tick, typeSpeed);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        erasing = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      return setTimeout(tick, eraseSpeed);
    }
  }
  tick();
}

// ---------- Toast ----------
let toastTimer = null;
function showToast(message, ms = 3000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), ms);
}

// ---------- Active nav link ----------
function markActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link[href]").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
}

// ---------- Footer year ----------
function setFooterYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

// ---------- Init everything common to all pages ----------
document.addEventListener("DOMContentLoaded", () => {
  updateThemeIcon(document.documentElement.getAttribute("data-theme"));
  updateOnlineStatus();
  markActiveNav();
  setFooterYear();
  initScrollReveal();
  onScroll();
});
