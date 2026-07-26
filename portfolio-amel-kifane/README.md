# Amel Kifane — Portfolio

A 5-page portfolio site (Home, Projects, About, Contact, Admin) built with HTML, Tailwind CSS (CDN) and vanilla JavaScript — no build step, no backend.

## Structure
```
index.html         Home page (hero, stats, skills, companies, projects, certs, testimonials)
projects.html       All projects with search, category filters, modal detail view, load more
about.html          Bio, timeline, experience, education, skills with %, certs, languages, hobbies
contact.html        Contact form (EmailJS-ready), social links, embedded map
admin.html          Password-protected dashboard: manage projects/certificates, view messages, change password
data/data.json      Single source of truth for all site content
css/style.css       Shared styles + dark/light theme variables
js/data.js          Loads data.json, merges admin edits (localStorage), saves contact messages
js/common.js        Shared UI: theme toggle, preloader, scroll effects, toasts, counters, typing effect
assets/             Images (add your own profile photo, project screenshots, CV PDF)
```

## Running locally
Because pages `fetch()` `data/data.json`, opening `index.html` directly (`file://`) will fail silently and fall back to whatever's cached in your browser's localStorage. Serve the folder instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static host works the same way (Netlify, Vercel, GitHub Pages, etc.).

## Editing content
- **Quick edits (text, links, stats, skills, testimonials, timeline, experience):** edit `data/data.json` directly.
- **Projects & certificates:** either edit `data.json`, or go to `/admin.html` (default password: `hana2024` — change it from the Settings tab immediately) and use the dashboard. Admin edits are saved in the browser's `localStorage`, so they only persist on the device/browser you used to make them (there's no server database).

## Contact form (EmailJS)
The form works out of the box and saves messages locally (visible in the admin "Messages" tab). To have it actually email you:
1. Create a free account at https://www.emailjs.com
2. Get your **Public Key**, **Service ID** and **Template ID**
3. Open `contact.html` and replace the three `YOUR_...` placeholders near the bottom of the file

## Known limitations (by design, since there's no backend)
- **Admin password & messages are stored in `localStorage`** — fine for a solo portfolio, not meant for sensitive data.
- **Admin edits don't sync across devices/browsers** — they live in that browser's storage only. For permanent changes, edit `data/data.json` in the repo instead.
- **Map** uses a plain Google Maps embed (no API key needed) — swap the `src` in `contact.html` for an exact address if you'd like.
- **Language switcher (AR/EN)** wasn't included in this pass — the site is English, the admin panel is Arabic (matching the original). Happy to add full bilingual support as a follow-up if useful.
- Replace `assets/images/profile.png`, add real project screenshots, and drop your résumé at `assets/cv-amel-kifane.pdf` (referenced by the "Download CV" buttons).

## Features included
Dark/light mode (saved), preloader, scroll progress bar, back-to-top button, scroll-reveal animations, animated stat counters, hero typing effect, WhatsApp floating button, offline banner, lazy-loaded images, SEO meta/Open Graph/Schema.org tags, ARIA labels, fully responsive layout.
