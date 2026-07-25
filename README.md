# Open Fiches

The math behind casino games, explained with verifiable formulas and reproducible simulations.
An open-source educational project — **not** an invitation to gamble.

## Stack

- [Astro](https://astro.build) — static site, zero JS by default
- TypeScript (strict)
- No backend, no database, no tracking

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── layouts/BaseLayout.astro   # page shell: <head>, global CSS, background chips
├── components/
│   ├── Logo.astro             # hammer-breaking-chips SVG logo
│   ├── SiteHeader.astro       # fixed header + live GitHub stars
│   ├── SiteFooter.astro       # educational mission + contribute CTA
│   └── GameCard.astro         # homepage game card (icon, edge, variance, tags)
├── pages/
│   ├── index.astro            # hero + search + 2-column game grid
│   └── games/baccarat.astro   # full math explanation for baccarat
└── styles/global.css          # dark "math notebook" theme + prose styles
mockups/                       # early HTML design experiments
```

## Design principles

1. **Formulas first** — every house edge shown comes with a derivation, not just a number.
2. **Honest framing** — we explain why the house wins in the long run, even with perfect play.
3. **Static and light** — content pages ship almost no JavaScript.
4. **Reproducible** — future simulators will use seeded RNG and be validated against exact values.

## Contributing

Want to add a game, a side bet, or fix a formula? Contributions are welcome.
Each game needs: exact probabilities, EV derivations, sources, and (eventually) a simulator
validated against the theoretical values.
