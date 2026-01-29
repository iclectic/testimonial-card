# Testimonial Card

A testimonial card UI component inspired by the GreatFrontEnd Projects **Testimonial Card** challenge. Assets: [GreatFrontEnd Testimonial Card Assets](https://www.greatfrontend.com/projects/challenges/testimonial-card/assets). Built with semantic HTML, custom CSS, and a pointer‑driven parallax depth effect in vanilla JavaScript.

## Preview

Open `index.html` in your browser.

## Project structure

```bash
├── README.md
├── css
│   └── style.css
├── designs
├── img
├── index.html
└── js
    └── index.js
```

## Technical notes

- **Layout & type**: Semantic markup with flexible sizing to keep the card readable across viewports.
- **Depth & lighting**: CSS variables drive 3D transforms and radial highlights for a subtle sheen effect.
- **Motion**: Pointer movement is eased with a simple lerp loop and disabled when `prefers-reduced-motion` is set.

## Customize

- Update the content in `index.html`.
- Swap the avatar image in `img/` and adjust the `src`.
- Tweak colors, shadows, and spacing in `css/style.css`.
- Adjust motion sensitivity in `js/index.js`.

## Deploy

This is a static project, so it can be deployed with GitHub Pages, Netlify, or Vercel.
