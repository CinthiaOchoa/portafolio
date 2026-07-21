# Cinthia Ochoa Torre — Portfolio

A one-page React portfolio site with a download link to your resume PDF, built to deploy for free on GitHub Pages.

## What's inside
- `src/App.jsx` — all the page content (profile, education, skills, projects, experience, leadership, contact)
- `public/Cinthia_Ochoa_Torre_Resume.pdf` — your resume, linked from the "Download resume" buttons
- `.github/workflows/deploy.yml` — auto-deploys the site to GitHub Pages every time you push to `main`

## 1. Try it locally (optional)
```bash
npm install
npm run dev
```
Open the local URL it prints (usually `http://localhost:5173`).

## 2. Put it on GitHub
1. Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `portfolio`). Keep it **public** — GitHub Pages needs that on the free plan.
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

## 3. Turn on GitHub Pages
1. On GitHub, open your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the "Deploy to GitHub Pages" workflow under the **Actions** tab).
4. After it finishes (~1 minute), your site is live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```

That URL is what you put in the "Website" or "Featured link" field on your LinkedIn profile.

## 4. Swap in your own resume later
Replace `public/Cinthia_Ochoa_Torre_Resume.pdf` with a new PDF (keep the same filename, or update the `RESUME_PATH` constant at the top of `src/App.jsx`), commit, and push — the site redeploys automatically.

## 5. Editing content
Everything text-based lives in `src/App.jsx` near the top of the file (`SKILL_GROUPS`, `PROJECTS`, `EXPERIENCE`, `LEADERSHIP` arrays) — edit those and push to update the live site.
