# Edoardo Core — Product Portfolio

I'm **Edoardo Core**, Product Manager at Amazon and founder of **Vidi**.

I hold a Master's degree in Information Systems and am self-taught in computer science. Across both customer-facing and internal products, I work at the seam between the **business world** — identifying real customer problems, aligning stakeholders, defining impact and strategy — and the **technical world** — fast prototyping, requirements gathering, running sprints, and handling data tasks myself.

I lean on AI to deliver delightful products through personalization, streamlined UX, and creativity, and to boost productivity in my day-to-day: scanning codebases, reviewing and raising CRs, writing specs, and prototyping ideas before committing to them. I validate every product idea through real customer feedback and apply design thinking end-to-end.

This repo is the source code for my portfolio website, live at **[edocore.github.io/product-portfolio](https://edocore.github.io/product-portfolio/)**.

---

## Tech stack

- **React 19** + **Vite 6** — fast iteration, modern JSX, instant HMR.
- **Material UI v6** (with a custom Material 3 expressive theme) — for the design system, layout primitives, and accessibility.
- **Inter** for typography; a custom blue gradient as the brand accent.
- Deployed via **GitHub Pages**.

### Why MUI

I picked MUI for three reasons:

1. **Coverage.** MUI ships every primitive a portfolio needs out of the box — `AppBar`, `Drawer`, `Card`, `Accordion`, `Chip`, responsive `Container` and `Stack` — so I spent zero time hand-rolling layout.
2. **Editorial control.** A few targeted theme overrides (kill ripple, flatten elevation, swap typography) are enough to escape the default Material look and land on something that feels intentional.
3. **Accessibility for free.** Focus states, keyboard navigation, reduced-motion handling, and ARIA roles all come built in — important for a site that hiring managers should be able to scan in under a minute on any device.

---

## Run it locally

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build to ./dist
npm run preview      # preview the production build
npm run deploy       # build + publish to GitHub Pages
```
