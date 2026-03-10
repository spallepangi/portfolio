## Santhosh — Data Science & ML Engineer Portfolio

Modern, minimalist portfolio for a **Senior Data Scientist / ML Engineer / GenAI** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

Optimized for fast loading, recruiter-friendly scanning, and deployment to **GitHub Pages** via static export.

### Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: next-themes (dark / light mode)
- **Fonts**: Inter, JetBrains Mono

### Project Structure

- `app/layout.tsx` — Root layout, fonts, global providers, metadata
- `app/page.tsx` — Main landing page assembling all sections
- `components/Navbar.tsx` — Sticky nav with dark mode toggle & anchor links
- `components/Hero.tsx` — Hero section with profile, tagline, and social links
- `components/About.tsx` — About + education + expertise
- `components/Projects.tsx` — Animated project cards (RAG, medical AI, risk, CLV, product)
- `components/Experience.tsx` — Vertical timeline of roles and impact
- `components/Skills.tsx` — Skills grouped by category as modern chips
- `components/Blog.tsx` — Placeholder blog cards
- `components/Contact.tsx` — Contact details + form UI
- `components/Footer.tsx` — Minimal footer
- `components/theme-provider.tsx` — Dark / light theme handling
- `data/projects.ts` — Structured project data
- `data/experience.ts` — Experience timeline data
- `data/skills.ts` — Skills grouped by category
- `styles/globals.css` — Tailwind + custom tokens, layout helpers
- `public/profile.jpg` — Placeholder image (replace with a real headshot)

### Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Deploying to GitHub Pages

The project is set up for **static export** and deploys to GitHub Pages via **GitHub Actions**.

**One-time setup:**

1. **Create a GitHub repo** (e.g. `portfolio`) and push this project:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages with Actions:**
   - In the repo go to **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

3. **Trigger deployment:** Each push to `main` runs the workflow and deploys the site. You can also run it manually from **Actions → Deploy to GitHub Pages → Run workflow**.

**Your site will be at:**  
`https://YOUR_USERNAME.github.io/portfolio/`  
(Replace `YOUR_USERNAME` and `portfolio` with your GitHub username and repo name.)

**Local build (to test the exported site):**  
With `output: 'export'`, `npm run build` already writes static files to `out/`. To build with the correct base path for a project site:

```bash
npm install --legacy-peer-deps
GITHUB_PAGES=true GITHUB_REPOSITORY=your-username/portfolio npm run build
```

Then serve the `out/` folder locally (e.g. `npx serve out`) to verify links and assets.

### Customization Checklist

- Replace `public/profile.jpg` with a real headshot.
- Update GitHub, LinkedIn, and email URLs in:
  - `components/Navbar.tsx`
  - `components/Hero.tsx`
  - `components/Contact.tsx`
- Tune metadata (SEO, Open Graph) in `app/layout.tsx`.
- Edit project, experience, and skills content under `data/`.

### Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Start production server (if not using static export)
- `npm run export` — Static export to `out/`
- `npm run lint` — Run linting

