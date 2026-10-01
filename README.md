---
description: Personal portfolio website showcasing projects and skills with live GitHub integration
details: >
  A modern, responsive portfolio built with React, Vite and Tailwind CSS,
  featuring live project data from an AWS API and GitHub integration for
  recent commits. Includes interactive project filtering by language and
  technology stack, expandable project rows with live site and repository
  links, light and dark themes, and accessibility features including keyboard
  navigation, visible focus states and reduced-motion support. Site copy is
  editable through the Pantheon CMS. Hosted on AWS Amplify for continuous
  deployment and fast global delivery.
technologies:
  - react
  - tailwind
  - github-api
  - aws
hostedUrl: https://michaeleddleston.com
---
# Portfolio Website

A personal portfolio website built with **React**, **Vite** and **Tailwind CSS** to showcase projects, experience, skills, and contact information. Features a responsive editorial design, light/dark themes, project filtering, live GitHub data, and accessibility enhancements.

---

## Features

- **Responsive Layout**: Works seamlessly on desktop and mobile devices.
- **Project Filtering**: Filter projects by language and technology, with full/partial match highlighting.
- **Expandable Project Rows**: Overview, stack, live site and repository links, and recent commits pulled from GitHub.
- **Light/Dark Themes**: Follows the system setting by default; an explicit choice is remembered.
- **Accessibility**: Keyboard-operable rows and filters, visible focus styles, skip link, WCAG AA text contrast, and reduced-motion support.
- **SEO & Social Previews**: Static meta tags, Open Graph/Twitter cards, and JSON-LD in `index.html`.
- **Editable Content**: Site copy lives in `content/pantheon.content.json` and is editable through the Pantheon CMS.

---

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, JavaScript (ES6+)
- **Fonts**: Bebas Neue, DM Sans, DM Mono (self-hosted via Fontsource)
- **APIs**: AWS API Gateway (project data), GitHub REST API (push dates and commits, cached client-side)
- **Hosting**: AWS Amplify

---

## Project Structure

- `index.html` - SEO/social meta tags, JSON-LD, and the pre-paint theme script
- `src/components/Navbar.jsx` - Navigation bar, theme toggle, and mobile menu
- `src/components/Hero.jsx` - Hero section with introduction and CTAs
- `src/components/Skills.jsx` - Skills rows
- `src/components/Experience.jsx` - Work and education rows
- `src/components/Projects.jsx` - Projects list with filtering and expandable details
- `src/components/Contact.jsx` - Contact section
- `src/components/Footer.jsx` - Footer links and copyright
- `src/content.js` - Helpers for reading `content/pantheon.content.json`
- `src/global.css` - Design tokens and all component styles
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

Note: the projects API only allows requests from the production origin (CORS), so the Projects section shows its error state when run locally.
