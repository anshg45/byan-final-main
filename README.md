# BYAN — Youth Opportunities Platform (Frontend)

This repository contains the BYAN frontend starter (Vite + React + Tailwind) — UI/UX prototype for a youth opportunities platform (internships, apprenticeships, resume builder, ATS demo).

## Features
- Split React components (Nav, OpportunityCard, pages)
- Tailwind CSS for styling
- Framer Motion animations and micro-interactions
- React Hot Toast for toasts
- Improved ATS demo using Fuse.js fuzzy matching
- Sample pages: Home, Opportunities, Resume Builder, Dashboard, Contact
- Ready for local development with Vite

## Quick start (local)
1. Extract the ZIP and open the folder in VS Code.
2. Install dependencies:
```bash
npm install
```
3. Run the dev server:
```bash
npm run dev
```
4. Open the URL printed by Vite (usually http://localhost:5173)

## Project structure
```
src/
  pages/
  shared/
  index.css
  main.jsx
  App.jsx
package.json
tailwind.config.cjs
postcss.config.cjs
```

## GitHub
1. Create a new GitHub repository (private or public).
2. Push the code:
```bash
git init
git add .
git commit -m "Initial BYAN frontend scaffold"
git branch -M main
git remote add origin git@github.com:<your-username>/byan-frontend.git
git push -u origin main
```

## CI (optional)
This repo includes a basic GitHub Actions workflow that runs `npm install` and `npm run build` on pushes to `main`.

## Deployment

### Frontend (Vercel/Netlify)
1. Push your code to GitHub.
2. Connect your repository to Vercel/Netlify.
3. Set the Environment Variable `VITE_API_URL` to your backend URL (e.g., `https://your-backend.onrender.com/auth`).
4. Deploy!

### Backend (Render/Heroku/Railway)
1. Push your code to GitHub.
2. Create a new Web Service on Render/Railway.
3. Set the Root Directory to `server`.
4. Set the Build Command to `npm install`.
5. Set the Start Command to `npm start`.
6. Add Environment Variables from `server/.env.example`.
7. Deploy!

## Automation (CI/CD)
The project includes a `.github/workflows/ci.yml` file which automatically builds the project on every push to the `main` branch. This ensures your code is always buildable.

## License
MIT — see `LICENSE` file.

## Contributing
Open issues and PRs. See `CONTRIBUTING.md` for contribution guidelines.
