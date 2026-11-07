# John García — WDD 430 Portfolio

A portfolio built with the Next.js App Router, React, TypeScript, and Tailwind CSS. All application components are Server Components.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. The About page is at `/about` and the sample API is at `/api/hello`, which returns:

```json
{"message":"Hello from Next.js API!"}
```

## Project structure

- `app/layout.tsx`: shared header, footer, metadata, and skip-to-content link.
- `app/page.tsx`: real project data and the Home page.
- `app/about/page.tsx`: About page composed with reusable skills cards.
- `app/api/hello/route.ts`: GET route handler.
- `components/Header.tsx`: Home and About navigation using Next.js Link.
- `components/ProjectCard.tsx`: typed project props and conditional external link.
- `components/ProjectList.tsx`: maps project data to cards with stable title keys.
- `components/Footer.tsx`: dynamic copyright year. Uses `use cache` with hourly revalidation because this project enables Cache Components.
- `components/SkillCard.tsx`: custom Server Component with a TypeScript props interface, used twice on About.

The featured projects are [Budget](https://github.com/Jagg26/Budget) and [Patient Administrator](https://github.com/Jagg26/patientAdministrator). Update the `projects` array in `app/page.tsx` to change the selection.

## Validation

```bash
npm run lint
npm run build
```

Check both pages at mobile and desktop widths and use the keyboard to test navigation and the skip link. In Chrome DevTools, run Lighthouse for each page and open **More tools → CSS Overview → Capture overview** to review colors and contrast.

This project uses system fonts, so building does not require downloading Google Fonts.

## GitHub submission

The repository is already initialized with `main` and origin set to `https://github.com/Jagg26/wdd430-portfolio.git`. After reviewing the files:

```bash
git add .
git commit -m "Build WDD 430 portfolio"
git push -u origin main
```
