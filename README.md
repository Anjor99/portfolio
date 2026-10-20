# Anjor Rane — Portfolio

A manually maintained React + Vite portfolio with an Express API for the Groq-powered portfolio chatbot. No website builder is required.

## Requirements

- Node.js 20 or newer
- npm
- A Groq API key to test chatbot responses

## Run locally

1. Open a terminal in this folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and add your Groq key:

   ```env
   GROQ_API_KEY=your_actual_key_here
   PORT=8000
   ```

4. Start the frontend and API together:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173`.

The Vite dev server proxies `/api` requests to Express on port `8000`. The Groq key stays in the server-side `.env` file and must never be placed in a `VITE_` variable.

## Project structure

```text
src/
├── App.jsx                         # Page composition and shared chatbot state
├── main.jsx                        # React entry point
├── data/
│   └── portfolio.js                # Projects, skills, experience, education, recognition
├── styles/
│   └── global.css                  # Design tokens, reset, shared buttons, animations
└── components/
    ├── Header/
    │   ├── Header.jsx
    │   └── Header.css
    ├── Hero/
    │   ├── Hero.jsx
    │   └── Hero.css
    ├── ProjectCard/
    │   ├── ProjectCard.jsx
    │   └── ProjectCard.css
    ├── ProjectsSection/
    │   ├── ProjectsSection.jsx
    │   └── ProjectsSection.css
    ├── AboutSection/
    │   ├── AboutSection.jsx
    │   └── AboutSection.css
    ├── SkillsSection/
    │   ├── SkillsSection.jsx
    │   └── SkillsSection.css
    ├── ExperienceSection/
    │   ├── ExperienceSection.jsx
    │   └── ExperienceSection.css
    ├── ContactSection/
    │   ├── ContactSection.jsx
    │   └── ContactSection.css
    ├── Footer/
    │   ├── Footer.jsx
    │   └── Footer.css
    └── ChatWidget/
        ├── ChatWidget.jsx
        └── ChatWidget.css
server/
└── index.js                        # Express API and server-side Groq calls
public/
└── resume.pdf                      # Resume supplied for this portfolio
```

## How to maintain the site

- **Add/edit projects:** `src/data/portfolio.js`, in the `projects` array.
- **Add actions to a project:** use an `actions` array. Each item can be a `link` or `chat` action. Example:

  ```js
  actions: [
    {
      type: 'link',
      label: 'GitHub source',
      href: 'https://github.com/your-account/your-repository',
      external: true,
    },
    {
      type: 'chat',
      label: 'Ask AI about project',
      prompt: 'Explain this project using only verified details.',
    },
  ],
  ```

- **Change skills:** edit `skillGroups` in `src/data/portfolio.js`.
- **Change experience:** edit `experience`, `education`, or `recognition` in that same file.
- **Change a component's layout or styles:** edit its `.jsx` and `.css` files inside its own folder.
- **Change shared colors, fonts, widths, or motion:** edit the custom properties near the top of `src/styles/global.css`.
- **Update resume:** replace `public/resume.pdf` with the latest verified resume, keeping that filename.
- **Update chatbot facts:** review `SYSTEM_PROMPT` in `server/index.js` whenever published portfolio facts change.

`ProjectCard.jsx` supports the newer `actions` array and the older `href`/`action`/`prompt` format for compatibility. Prefer `actions` for new entries.

## Build and production

```bash
npm run build
npm start
```

Express serves `dist/` when the production build exists. Configure `GROQ_API_KEY` in the production environment. Do not commit `.env` or expose the key in frontend source.

## Current limits

- Project demo/repository links should only be added after confirming the URLs are public and correct.
- The chatbot uses the portfolio facts embedded in `server/index.js`; update those facts as the portfolio changes.
- Test `npm install`, `npm run dev`, chatbot requests, and `npm run build` locally before deployment.
