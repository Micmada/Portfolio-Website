---
description: Personal portfolio website showcasing projects and skills with live GitHub integration
details: >
  A modern, responsive portfolio built with React and Tailwind CSS featuring
  real-time GitHub API integration for project data, commits, and README
  content. Includes interactive project filtering by technology stack, detailed
  modal views with live site links and repository information, smooth CSS
  transitions and animations, and comprehensive accessibility features with
  keyboard navigation. The site displays a skills grid, project showcase with
  color-coded filters, contact information, and a hero section with smooth
  scrolling effects. Designed with mobile-first responsiveness and enhanced UX
  through hover effects and Tailwind transitions. Hosted on AWS Amplify for
  continuous deployment and fast global delivery.
technologies:
  - react
  - tailwind
  - github-api
  - aws
  - test
hostedUrl: https://michaeleddleston.com
---
# Portfolio Website

A personal portfolio website built with **React** and **Tailwind CSS** to showcase projects, skills, and contact information. Features a responsive design, project filtering, GitHub integration, and accessibility enhancements.

---

## Features

- **Responsive Layout**: Works seamlessly on desktop and mobile devices.  
- **Project Filtering**: Filter projects by skills such as React, Node.js, Tailwind, and TypeScript.  
- **Detailed Project Views**: View live sites, GitHub repositories, recent commits, and README content directly.  
- **Accessibility Improvements**: Interactive elements (buttons, filters, links) are clearly selectable and keyboard-navigable.  
- **Clean & Modern UI**: Smooth scrolling, hover effects, and color-coded project filters for better UX.  

---

## Technologies Used

- **Frontend**: React, Tailwind CSS, JavaScript (ES6+)
- **APIs**: GitHub API for repository details and commits
- **Animations & Effects**: Framer Motion, Tailwind transitions

---

## Project Structure

- `src/components/Navbar.jsx` - Navigation bar with scroll effects
- `src/components/Hero.jsx` - Hero section with introduction and CTA
- `src/components/Skills.jsx` - Skills grid
- `src/components/Projects.jsx` - Projects grid with filtering and modal details
- `src/components/Contact.jsx` - Contact section with email link
- `src/components/Footer.jsx` - Footer with copyright
- `src/index.css` - Tailwind and typography plugin
- `src/main.jsx` - Entry point with ReactDOM

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or later recommended)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Micmada/Portfolio-Website.git
cd Portfolio-Website

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```
