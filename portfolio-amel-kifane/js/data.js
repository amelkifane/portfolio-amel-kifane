/* =========================================================
   Amel Kifane — Data Layer with Full CRUD
   جميع البيانات مخزنة في localStorage
========================================================= */

const SiteData = (() => {
  // ===== KEYS =====
  const KEYS = {
    PROFILE: "site_profile",
    TIMELINE: "site_timeline",
    EXPERIENCE: "site_experience",
    EDUCATION: "site_education",
    SKILLS: "site_skills",
    CERTIFICATES: "site_certificates",
    LANGUAGES: "site_languages",
    HOBBIES: "site_hobbies",
    PROJECTS: "projects",
    MESSAGES: "messages",
    REVIEWS: "reviews",
  };

  // ===== HELPERS =====
  function getData(key, defaultVal = []) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch {
      return defaultVal;
    }
  }

  function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // ===== DEFAULT DATA =====
  function getDefaultCertificates() {
    return [
      {
        id: 1,
        name: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "2025",
        description:
          "Fundamentals of security threats, defenses and best practices.",
        image: "assets/certificates/cert-18-cisco-cybersecurity.png",
      },
      {
        id: 2,
        name: "Les Premiers Secours",
        issuer: "Académie Djoumana",
        date: "2026",
        description: "Certified in basic first-aid and emergency response.",
        image: "assets/certificates/cert-01-djoumana-secours.jpg",
      },
      {
        id: 3,
        name: "Describe Cloud Computing",
        issuer: "Microsoft",
        date: "2026",
        description:
          "Core concepts of cloud computing and its deployment models.",
        image: "assets/certificates/cert-02-cloud-computing.png",
      },
      {
        id: 4,
        name: "Benefits of Using Cloud Services",
        issuer: "Microsoft",
        date: "2026",
        description: "Scalability, reliability and cost benefits of the cloud.",
        image: "assets/certificates/cert-03-cloud-benefits.png",
      },
      {
        id: 5,
        name: "Describe Cloud Service Types",
        issuer: "Microsoft",
        date: "2026",
        description: "IaaS, PaaS and SaaS explained and compared.",
        image: "assets/certificates/cert-04-cloud-service-types.png",
      },
      {
        id: 6,
        name: "Cost Management in Azure",
        issuer: "Microsoft",
        date: "2026",
        description: "Tools and practices to plan and control Azure spending.",
        image: "assets/certificates/cert-05-cost-management.png",
      },
      {
        id: 7,
        name: "Governance & Compliance Tools",
        issuer: "Microsoft",
        date: "2026",
        description: "Policies, blueprints and compliance tools in Azure.",
        image: "assets/certificates/cert-06-governance-compliance.png",
      },
      {
        id: 8,
        name: "Managing & Deploying Azure Resources",
        issuer: "Microsoft",
        date: "2026",
        description: "Azure Portal, CLI, PowerShell and ARM templates.",
        image: "assets/certificates/cert-07-manage-deploy-resources.png",
      },
      {
        id: 9,
        name: "Describe Monitoring Tools",
        issuer: "Microsoft",
        date: "2026",
        description: "Azure Monitor, alerts and log analytics.",
        image: "assets/certificates/cert-08-monitoring-tools.png",
      },
      {
        id: 10,
        name: "Introduction to Azure Cloud Shell",
        issuer: "Microsoft",
        date: "2026",
        description: "Browser-based command-line access to Azure resources.",
        image: "assets/certificates/cert-09-azure-cloud-shell.png",
      },
      {
        id: 11,
        name: "Deploy Azure Infrastructure with ARM Templates",
        issuer: "Microsoft",
        date: "2026",
        description: "Infrastructure as code using ARM templates.",
        image: "assets/certificates/cert-10-arm-templates.png",
      },
      {
        id: 12,
        name: "Host a Web Application with Azure App Service",
        issuer: "Microsoft",
        date: "2026",
        description: "Deploying and hosting web apps on Azure App Service.",
        image: "assets/certificates/cert-11-app-service.png",
      },
      {
        id: 13,
        name: "Web Development Using VS Code",
        issuer: "Microsoft",
        date: "2026",
        description: "Setting up a modern, efficient coding environment.",
        image: "assets/certificates/cert-12-vscode-webdev.png",
      },
      {
        id: 14,
        name: "Build Your First HTML Webpage",
        issuer: "Microsoft",
        date: "2026",
        description: "Fundamentals of HTML structure and semantics.",
        image: "assets/certificates/cert-13-first-html.png",
      },
      {
        id: 15,
        name: "Use CSS Styles in a Webpage",
        issuer: "Microsoft",
        date: "2026",
        description: "Styling web pages with CSS selectors and layout.",
        image: "assets/certificates/cert-14-css-styles.png",
      },
      {
        id: 16,
        name: "Using GitHub Copilot with JavaScript",
        issuer: "Microsoft",
        date: "2026",
        description: "AI-assisted coding workflows with GitHub Copilot.",
        image: "assets/certificates/cert-15-github-copilot.png",
      },
      {
        id: 17,
        name: "Publish a JS App with Azure Static Web Apps",
        issuer: "Microsoft",
        date: "2026",
        description: "Deploying a JavaScript app to Azure Static Web Apps.",
        image: "assets/certificates/cert-16-static-web-apps.png",
      },
      {
        id: 18,
        name: "Learn the Basics of Web Accessibility",
        issuer: "Microsoft",
        date: "2026",
        description: "Designing inclusive, accessible web interfaces.",
        image: "assets/certificates/cert-17-web-accessibility.png",
      },
      {
        id: 19,
        name: "Introduction to Artificial Intelligence",
        issuer: "Edraak",
        date: "2026",
        description: "Basics of AI, machine learning and neural networks.",
        image: "assets/certificates/cert-19-edraak-ai.png",
      },
    ];
  }

  function getDefaultTimeline() {
    return [
      {
        year: "2021",
        title: "Started Computer Science degree",
        description: "Began my Bachelor's at Tissemsilt University.",
      },
      {
        year: "2022",
        title: "First freelance project",
        description: "Built a landing page for a local business.",
      },
      {
        year: "2023",
        title: "Deepened frontend skills",
        description:
          "Focused on JavaScript, React, and building interactive UIs.",
      },
      {
        year: "2024",
        title: "Started AI Master's",
        description: "Began my Master's in Artificial Intelligence.",
      },
      {
        year: "2025",
        title: "Completed Bachelor's & Cisco Certification",
        description: "Graduated with a Bachelor's in Computer Science.",
      },
      {
        year: "2026",
        title: "Microsoft Web Development Learning Path",
        description: "Completed the Microsoft Web Development Learning Path.",
      },
    ];
  }

  function getDefaultExperience() {
    return [
      {
        title: "Freelance Web Developer",
        company: "Self-employed",
        period: "2024 — Present",
        description: "Building responsive websites and web applications.",
      },
      {
        title: "Student Developer - Web Learning Path",
        company: "Microsoft",
        period: "2026",
        description: "Completed web development learning path.",
      },
      {
        title: "Cybersecurity Training",
        company: "Cisco Networking Academy",
        period: "2025",
        description: "Completed Introduction to Cybersecurity.",
      },
    ];
  }

  function getDefaultEducation() {
    return [
      {
        degree: "Master's in Artificial Intelligence (M2)",
        institution: "University of Tissemsilt, Algeria",
        period: "2024 — Present",
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: "University of Tissemsilt, Algeria",
        period: "2021 — 2025",
      },
    ];
  }

  function getDefaultSkills() {
    return [
      { name: "HTML5", icon: "fab fa-html5", color: "#f97316", level: 95 },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#3b82f6", level: 92 },
      {
        name: "JavaScript",
        icon: "fab fa-js-square",
        color: "#facc15",
        level: 88,
      },
      { name: "React", icon: "fab fa-react", color: "#60a5fa", level: 80 },
      { name: "Node.js", icon: "fab fa-node-js", color: "#4ade80", level: 75 },
      { name: "MySQL", icon: "fas fa-database", color: "#3b82f6", level: 72 },
      {
        name: "Tailwind CSS",
        icon: "fas fa-wind",
        color: "#22d3ee",
        level: 90,
      },
      {
        name: "Git & GitHub",
        icon: "fab fa-github",
        color: "#e5e7eb",
        level: 85,
      },
      {
        name: "Responsive Design",
        icon: "fas fa-mobile-alt",
        color: "#4ade80",
        level: 93,
      },
      {
        name: "Web Accessibility",
        icon: "fas fa-universal-access",
        color: "#60a5fa",
        level: 80,
      },
      {
        name: "Cybersecurity",
        icon: "fas fa-shield-alt",
        color: "#34d399",
        level: 70,
      },
      { name: "TypeScript", icon: "fas fa-code", color: "#a78bfa", level: 60 },
    ];
  }

  function getDefaultProfile() {
    return {
      name: "Amel Kifane",
      firstName: "Amel",
      bio: "I'm a Full Stack Web Developer based in Algeria, currently pursuing a Master's degree in Artificial Intelligence.",
      longBio:
        "My journey in tech started with a curiosity about how websites work — a curiosity that turned into years of hands-on experience.",
      location: "Tissemsilt, Algeria",
      email: "amelkifane@gmail.com",
      phone: "+213 696 86 16 88",
      github: "https://github.com/amelkifane",
      linkedin: "https://www.linkedin.com/in/kifane-amel-1b030137b",
      cvFile: "assets/cv-amel-kifane.pdf",
    };
  }

  function getDefaultLanguages() {
    return [
      { name: "Arabic", level: "Native", percent: 100 },
      { name: "French", level: "Fluent", percent: 90 },
      { name: "English", level: "Intermediate (Technical)", percent: 70 },
    ];
  }

  function getDefaultHobbies() {
    return [
      { name: "Reading tech blogs", icon: "fas fa-book-open" },
      { name: "Building side projects", icon: "fas fa-code" },
      { name: "Exploring AI applications", icon: "fas fa-brain" },
      { name: "Learning new technologies", icon: "fas fa-graduation-cap" },
      { name: "Open source contributions", icon: "fab fa-github" },
    ];
  }

  // ===== PUBLIC API =====

  // Certificates
  function getCertificates() {
    const data = getData(KEYS.CERTIFICATES, null);
    return data ? data : getDefaultCertificates();
  }
  function saveCertificates(data) {
    setData(KEYS.CERTIFICATES, data);
  }
  function addCertificate(cert) {
    const certs = getCertificates();
    cert.id = Date.now();
    certs.push(cert);
    saveCertificates(certs);
    return certs;
  }
  function updateCertificate(id, updated) {
    const certs = getCertificates();
    const index = certs.findIndex((c) => c.id === id);
    if (index !== -1) {
      certs[index] = { ...certs[index], ...updated };
      saveCertificates(certs);
    }
    return certs;
  }
  function deleteCertificate(id) {
    const certs = getCertificates().filter((c) => c.id !== id);
    saveCertificates(certs);
    return certs;
  }
  function getCertificate(id) {
    const certs = getCertificates();
    return certs.find((c) => c.id === id) || null;
  }

  // Timeline
  function getTimeline() {
    const data = getData(KEYS.TIMELINE, null);
    return data ? data : getDefaultTimeline();
  }
  function saveTimeline(data) {
    setData(KEYS.TIMELINE, data);
  }
  function addTimelineItem(item) {
    const items = getTimeline();
    items.push(item);
    saveTimeline(items);
    return items;
  }
  function deleteTimelineItem(index) {
    const items = getTimeline();
    items.splice(index, 1);
    saveTimeline(items);
    return items;
  }

  // Experience
  function getExperience() {
    const data = getData(KEYS.EXPERIENCE, null);
    return data ? data : getDefaultExperience();
  }
  function saveExperience(data) {
    setData(KEYS.EXPERIENCE, data);
  }
  function addExperienceItem(item) {
    const items = getExperience();
    items.push(item);
    saveExperience(items);
    return items;
  }
  function deleteExperienceItem(index) {
    const items = getExperience();
    items.splice(index, 1);
    saveExperience(items);
    return items;
  }

  // Education
  function getEducation() {
    const data = getData(KEYS.EDUCATION, null);
    return data ? data : getDefaultEducation();
  }
  function saveEducation(data) {
    setData(KEYS.EDUCATION, data);
  }
  function addEducationItem(item) {
    const items = getEducation();
    items.push(item);
    saveEducation(items);
    return items;
  }
  function deleteEducationItem(index) {
    const items = getEducation();
    items.splice(index, 1);
    saveEducation(items);
    return items;
  }

  // Skills
  function getSkills() {
    const data = getData(KEYS.SKILLS, null);
    return data ? data : getDefaultSkills();
  }
  function saveSkills(data) {
    setData(KEYS.SKILLS, data);
  }
  function updateSkill(index, updated) {
    const skills = getSkills();
    if (skills[index]) {
      skills[index] = { ...skills[index], ...updated };
      saveSkills(skills);
    }
    return skills;
  }

  // Profile
  function getProfile() {
    const data = getData(KEYS.PROFILE, null);
    return data ? data : getDefaultProfile();
  }
  function saveProfile(data) {
    setData(KEYS.PROFILE, data);
  }

  // Languages
  function getLanguages() {
    const data = getData(KEYS.LANGUAGES, null);
    return data ? data : getDefaultLanguages();
  }
  function saveLanguages(data) {
    setData(KEYS.LANGUAGES, data);
  }

  // Hobbies
  function getHobbies() {
    const data = getData(KEYS.HOBBIES, null);
    return data ? data : getDefaultHobbies();
  }
  function saveHobbies(data) {
    setData(KEYS.HOBBIES, data);
  }

  // Projects
  function getDefaultProjects() {
    return [
      {
        id: 1,
        title: "Portfolio Website",
        description:
          "A fully responsive portfolio website with dark/light mode, admin panel, and dynamic content management.",
        longDescription:
          "Built this portfolio to showcase my work and skills. Features include: dark/light mode, scroll animations, a full admin dashboard for managing projects and certificates, a contact form with EmailJS integration, and a review system.",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript", "EmailJS"],
        link: "index.html",
        github: "https://github.com/amelkifane/portfolio",
        category: "Frontend",
        type: "Large",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      },
      {
        id: 2,
        title: "EnergyCare — Energy Management Platform",
        description:
          "A smart platform for managing energy consumption, with bill tracking, meter readings, and complaint submission for users, plus a full dashboard for admins.",
        longDescription:
          "EnergyCare is a smart energy-management platform. Users can view and track their electricity bills, submit meter readings, and file complaints directly through the platform. Administrators get a complete dashboard to manage all registered users and send them notifications. Key features: bills, meter readings, complaints, notifications, and an admin dashboard.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "https://energycare.netlify.app",
        github: "",
        category: "Web App",
        type: "Large",
        featured: true,
        image: "assets/projects/energycare.png",
      },
      {
        id: 3,
        title: "Auto-Accessory — Store Management System",
        description:
          "A complete management system for a car-accessories store, covering suppliers, profit tracking, credit accounts, and a full admin dashboard.",
        longDescription:
          "Auto-Accessory is an integrated management system built for a car-accessories store. It includes a full admin dashboard, supplier management, profit tracking, credit accounts, and alerts — a professional platform to organize the store's buying and selling operations. Key features: suppliers, profits, credit accounts, alerts, and an admin dashboard.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "https://auto-accessory.netlify.app",
        github: "",
        category: "Web App",
        type: "Large",
        featured: true,
        image: "assets/projects/auto-accessory.png",
      },
      {
        id: 4,
        title: "University Supervision Platform",
        description:
          "An academic supervision platform connecting professors and students, where students submit projects and request supervision, and professors accept, reject, and message them.",
        longDescription:
          "University Supervision links professors with students on one platform. Students can submit their projects and send supervision requests, while professors can accept or reject those requests and communicate directly with students. It includes role-based access for professors, students, and admins, along with messaging and notifications. Key features: projects, supervision requests, messages, notifications, and roles (professor/student/admin).",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "https://university-supervision.netlify.app",
        github: "",
        category: "Web App",
        type: "Large",
        featured: true,
        image: "assets/projects/university-supervision.png",
      },
      {
        id: 5,
        title: "Eshop — Online Store",
        description:
          "A modern online store that showcases products in an attractive way — a simple, easy-to-use shopping platform for browsing and selling products online.",
        longDescription:
          "Eshop is a modern e-commerce storefront that presents products in a visually appealing layout. It's a simple, user-friendly shopping platform designed for browsing and selling products online, with a fully responsive design. Key features: products, shopping experience, attractive display, and responsive design.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "https://eshop-on.netlify.app",
        github: "",
        category: "Web App",
        type: "Medium",
        featured: false,
        image: "assets/projects/eshop.png",
      },
    ];
  }
  function getProjects() {
    const data = getData(KEYS.PROJECTS, null);
    return data && data.length ? data : getDefaultProjects();
  }
  function saveProjects(data) {
    setData(KEYS.PROJECTS, data);
  }

  // Messages
  function getMessages() {
    return getData(KEYS.MESSAGES, []);
  }
  function saveMessage(msg) {
    const messages = getMessages();
    messages.unshift({
      ...msg,
      id: Date.now(),
      date: new Date().toISOString(),
      read: false,
    });
    setData(KEYS.MESSAGES, messages);
    return messages;
  }
  function markMessageRead(id) {
    const messages = getMessages().map((m) =>
      m.id === id ? { ...m, read: true } : m,
    );
    setData(KEYS.MESSAGES, messages);
    return messages;
  }
  function deleteMessage(id) {
    const messages = getMessages().filter((m) => m.id !== id);
    setData(KEYS.MESSAGES, messages);
    return messages;
  }
  function clearMessages() {
    setData(KEYS.MESSAGES, []);
  }

  // Reviews
  function getReviews() {
    return getData(KEYS.REVIEWS, []);
  }
  function saveReview(review) {
    const reviews = getReviews();
    reviews.push({ ...review, id: Date.now(), date: new Date().toISOString() });
    setData(KEYS.REVIEWS, reviews);
    return reviews;
  }
  function deleteReview(id) {
    const reviews = getReviews().filter((r) => r.id !== id);
    setData(KEYS.REVIEWS, reviews);
    return reviews;
  }
  function clearReviews() {
    setData(KEYS.REVIEWS, []);
  }

  // ===== LOAD ALL =====
  // Async wrapper kept for pages that call `await SiteData.load()`.
  async function load() {
    return loadAll();
  }
  function loadAll() {
    return {
      profile: getProfile(),
      timeline: getTimeline(),
      experience: getExperience(),
      education: getEducation(),
      skills: getSkills(),
      certificates: getCertificates(),
      languages: getLanguages(),
      hobbies: getHobbies(),
      projects: getProjects(),
      messages: getMessages(),
      reviews: getReviews(),
    };
  }

  // ===== RESET =====
  function resetToDefaults() {
    saveProfile(getDefaultProfile());
    saveTimeline(getDefaultTimeline());
    saveExperience(getDefaultExperience());
    saveEducation(getDefaultEducation());
    saveSkills(getDefaultSkills());
    saveCertificates(getDefaultCertificates());
    saveLanguages(getDefaultLanguages());
    saveHobbies(getDefaultHobbies());
  }

  // ===== EXPORT =====
  return {
    getProfile,
    saveProfile,
    getTimeline,
    saveTimeline,
    addTimelineItem,
    deleteTimelineItem,
    getExperience,
    saveExperience,
    addExperienceItem,
    deleteExperienceItem,
    getEducation,
    saveEducation,
    addEducationItem,
    deleteEducationItem,
    getSkills,
    saveSkills,
    updateSkill,
    getCertificates,
    saveCertificates,
    addCertificate,
    updateCertificate,
    deleteCertificate,
    getCertificate,
    getLanguages,
    saveLanguages,
    getHobbies,
    saveHobbies,
    getProjects,
    saveProjects,
    getMessages,
    saveMessage,
    markMessageRead,
    deleteMessage,
    clearMessages,
    getReviews,
    saveReview,
    deleteReview,
    clearReviews,
    loadAll,
    load,
    resetToDefaults,
  };
})();
