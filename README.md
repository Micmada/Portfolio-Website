---
description: Personal portfolio website showcasing projects and skills with live GitHub integration
details: >
  A dark-first portfolio built with React, Vite and Tailwind CSS. It leads with
  a case study of Pantheon, the client site management platform I am building
  at page-flow, followed by a scroll-snap row of projects fed live from an AWS
  API. Includes a light theme, keyboard-accessible navigation, WCAG AA contrast
  in both themes, reduced-motion support, and copy editable through the
  Pantheon CMS. Hosted on AWS Amplify for continuous deployment.
technologies:
  - react
  - tailwind
  - github-api
  - aws
hostedUrl: https://michaeleddleston.com
---
# Portfolio Website

A personal portfolio built with **React**, **Vite** and **Tailwind CSS**. Dark-first design in Archivo with one accent colour, page-flow's ember (`#E84B0F`).

---

## Features

- **Pantheon case study**: real dashboard screenshot and the platform's headline numbers.
- **Projects row**: horizontal scroll-snap tiles fed live from the projects API, with curated titles and descriptions, skeleton loading and an error state. No GitHub API calls from the browser.
- **Light and dark themes**: dark by default; a choice made with the toggle is remembered.
- **Accessibility**: skip link, visible focus, semantic headings and lists, WCAG AA text contrast in both themes, reduced-motion support.
- **SEO and social previews**: static meta tags, Open Graph/Twitter cards and JSON-LD in `index.html`.
- **Editable content**: site copy lives in `content/pantheon.content.json` and is editable through the Pantheon CMS.

---

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, JavaScript (ES6+)
- **Font**: Archivo variable, self-hosted via Fontsource
- **APIs**: AWS API Gateway (project data)
- **Hosting**: AWS Amplify

---

## Project Structure

- `index.html` - SEO/social meta tags, JSON-LD, and the pre-paint theme script
- `src/components/Navbar.jsx` - Navigation, theme toggle and mobile menu
- `src/components/Hero.jsx` - Name, intro, CTAs and the page-flow screenshot
- `src/components/Pantheon.jsx` - Pantheon case study
- `src/components/Projects.jsx` - Projects row (API data plus curated copy in `CURATED`)
- `src/components/Experience.jsx` - Experience and skills
- `src/components/Contact.jsx` - Contact section
- `src/components/Footer.jsx` - Footer
- `src/content.js` - Helpers for reading `content/pantheon.content.json`
- `src/global.css` - Design tokens (both themes) and all component styles
- `public/images/` - Screenshots used on the page
- `pantheon/` - Pantheon CMS field definitions (each field targets a `[data-content="key"]` element)

---

## Getting Started

### Prerequisites

- **Node.js** 20.19+ (or 22.12+)
- **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Micmada/Portfolio-Website.git
cd Portfolio-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Note: the projects API only allows requests from the production origin (CORS), so the Projects row shows its error state when run locally.
