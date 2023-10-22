# Orchard Frontend Test

This repository contain Frontend Test for Orchard

## Technologies
- ReactJs
- TypeScript
- TailwindCSS

## Live version
You can access the live version by visiting the following link: https://spectacular-starburst-50d807.netlify.app

## Installation
- Clone the git repository by `git clone git@github.com:jjdechavez/orchard_fe_test.git`
- Install the dependencies by `pnpm isntall` or `npm install`

## Run the application
- Run `pnpm dev` for development
- Open a browser and put this on your url `http://localhost:5173`

## Decisions
**ReactJs**
- The application relies on user interaction, particularly for recording click counts, making ReactJS well-suited for this scenario by storing on states.

**TailwindCSS**
- Tailwind helps for rapid prototyping and building user interfaces. Also, managing styles through inline styles to keep track of styles for specific elements.

**TypeScript**
- Which provides static typing and makes it easier for team members to understand and collaborate on the codebase, reducing confusion and misunderstandings.

**Vite**
- When setting up a project, Vite excels at generating new projects with just a few commands, making it an excellent choice for rapid prototyping and getting started with React and TypeScript. During development, Vite provides an incredibly fast development experience, featuring hot module replacement (HMR) that significantly speeds up the development process.
