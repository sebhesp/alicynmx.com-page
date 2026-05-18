# Alicyn Shopify theme

Production-ready Shopify Online Store 2.0 theme for the Alicyn landing/product page.

This repo is now a Shopify theme, not a static GitHub Pages site. The design, Spanish copy, FAQ, WhatsApp chat widget, 100 ml positioning, responsive layout and safety language from the static page have been preserved inside a Shopify section.

## Theme structure

```text
alicynmx.com-page/
├── assets/
│   ├── alicyn-product.png
│   ├── alicyn.css
│   └── alicyn.js
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   ├── en.default.json
│   └── es.default.json
├── sections/
│   └── alicyn-landing.liquid
├── snippets/
│   └── alicyn-placeholder.liquid
├── templates/
│   └── index.json
├── README.md
└── SHOPIFY_IMPLEMENTATION.md
```

## Main files

- `layout/theme.liquid` loads Shopify header/layout hooks plus `assets/alicyn.css` and `assets/alicyn.js`.
- `templates/index.json` renders the `alicyn-landing` section on the homepage.
- `sections/alicyn-landing.liquid` contains the Alicyn landing page markup, JSON-LD Product schema, FAQ, chat widget and footer.
- `assets/alicyn.css` contains the preserved scoped styling.
- `assets/alicyn.js` contains the preserved FAQ, mobile nav and WhatsApp chat behavior.

## Product image

Replace:

```text
assets/alicyn-product.png
```

The current file is a tiny transparent placeholder so Shopify has no missing asset request. Upload the final 100 ml bottle photo with the same filename before launch.

## Positioning

Alicyn is positioned as targeted support for key moments, not automatic daily use by default.

Keep copy focused on:

- cuidado post piercing puntual
- limpieza de piercing responsable
- sensación calmante
- molestias comunes
- momentos de mayor sensibilidad, exposición, roce, jalón or golpe
- piel sana and external topical use

Do not claim that Alicyn resolves infections, guarantees outcomes or changes the natural timing of the process.

## Connect this repo to Shopify

1. In Shopify Admin, go to `Online Store > Themes`.
2. Click `Add theme`.
3. Choose `Connect from GitHub`.
4. Select the GitHub account/repo: `sebhesp/alicynmx.com-page`.
5. Select branch: `main`.
6. Connect the theme.
7. Preview before publishing.

## Local checks

Because this is a Shopify theme, previewing the final Liquid requires Shopify. Static checks you can still run locally:

- Confirm `templates/index.json` renders `alicyn-landing`.
- Confirm `layout/theme.liquid` includes `{{ content_for_header }}` and `{{ content_for_layout }}`.
- Confirm no old bottle-size references exist.
- Confirm product CTA links point to `/products/alicyn-solucion-antiseptica`.
- Confirm WhatsApp links use the current placeholder number.

## Placeholders

- Product photo: replace `assets/alicyn-product.png`.
- Product URL: `/products/alicyn-solucion-antiseptica`.
- WhatsApp: `https://wa.me/525542388056`.
- Instagram: `https://www.instagram.com/alicynmx/`.
- Domain/canonical: `https://alicynmx.com`.
