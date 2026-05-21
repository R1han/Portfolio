# Rihan Sajeer — Portfolio

Personal portfolio for Rihan Sajeer, AI Systems Developer and Backend Engineer. Built with a code-editor aesthetic using React, Vite, and Tailwind CSS.

---

## Tech Stack

| Layer      | Choice               |
|------------|----------------------|
| Framework  | React 18 + Vite      |
| Routing    | React Router v6      |
| Styling    | Tailwind CSS v3      |
| Animation  | Framer Motion        |
| Icons      | Lucide React         |
| Hosting    | Vercel               |

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

Production build:

```bash
npm run build
```

---


## Project Structure

```
src/
  components/
    layout/       Navbar, StatusBar, Gutter, FileHeader, Footer
    sections/     Hero, About, Skills, Projects, Experience,
                  Certifications, Education, Contact
    ui/           CodeCard, ProjectCard, ExpBlock, SkillChip,
                  StatCard, SyntaxChip, Reveal
  data/           projects.js, skills.js, experience.js, certifications.js
  hooks/          useActiveSection.js
  pages/          Home.jsx, ProjectDetail.jsx
  styles/         globals.css
```

---

