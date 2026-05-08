# AGENTS.md

## What

Personal CV and portfolio site for Andre Thomas, built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Includes an AI-powered chat and mock interview feature backed by the **Groq SDK** and **Google Gemini (@google/genai)**.

UI components use **Preline** and **Lucide React / Font Awesome** for icons.

Key directories:
- `app/` — App Router pages and API routes (`/api/groq`, `/api/judge`)
- `components/` — CV section components (Experience, Skills, Education, etc.)
- `data/` — Static content: `jobData.tsx`, `portfolioData.tsx`, `skillsData.tsx`
- `interfaces/` — Shared TypeScript types
- `utils/fetching.ts` — Shared fetch utilities

## Why

The site presents Andre's resume interactively. The `/chat` page lets visitors ask questions about his experience via Groq (using `app/api/groq/route.ts`, which reads `app/api/groq/experienceInformation.md` as context). The `/interviews` page uses `app/api/judge/route.ts` to evaluate mock interview answers via Gemini.

## How

```bash
npm run dev     # start dev server on http://localhost:3000
npm run build   # production build (type-checks + lint)
npm run lint    # ESLint via next lint (config: eslint.config.mjs)
```

- Tailwind v4 uses PostCSS — config is in `postcss.config.mjs`, not a `tailwind.config.js`
- No test suite exists; verify UI changes manually in the browser
- To update resume content, edit files in `data/` and `app/api/groq/experienceInformation.md`
- CV section components are one-to-one with resume sections; each is self-contained
