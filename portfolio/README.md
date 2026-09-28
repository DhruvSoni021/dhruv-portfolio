# Dhruv Soni Portfolio (React + Vite + Tailwind + Framer Motion + Lucide)

## Local setup
1. Install Node 18+. 2. `npm install` 3. `npm run dev` (http://localhost:5173) 4. `npm run build` for production.

## Vercel deployment
Push to GitHub, then vercel.com > Add New Project > import the repo. Framework: Vite, build `npm run build`, output `dist`. Deploy.

## Replace resume
Put your PDF at `public/resume.pdf` (same name). The path is `profile.resume` in `src/data/siteData.js`.

## Update projects and links
Everything lives in `src/data/siteData.js`: `socials`, `projects` (github/demo), `certifications` (link), `skills`, `achievements`.
Any empty link ('') automatically shows an "Under construction" label.
