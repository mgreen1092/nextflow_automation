# Workflow Automation Marketing Site

Single-page marketing website for a solo freelancer offering AI workflow automation services.

## Formspree setup

Create a Formspree form and copy its endpoint (example: `https://formspree.io/f/xxxxabcd`).

Create `.env` in project root:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxabcd
```

Both the contact form and "Schedule a Free Workflow Review" modal submit to this endpoint.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/
    AboutSection.jsx
    AudienceSection.jsx
    CtaContactSection.jsx
    ExampleWorkflowSection.jsx
    FaqSection.jsx
    Footer.jsx
    Header.jsx
    HeroSection.jsx
    HowItWorksSection.jsx
    ProblemsSection.jsx
    ScheduleModal.jsx
    ServicesSection.jsx
  App.jsx
  index.css
  main.jsx
```
