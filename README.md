# Alicyn Shopify theme

Production-ready Shopify Online Store 2.0 theme for `https://alicynmx.com`.

This repo is a Shopify theme, not a static GitHub Pages site. It includes a homepage landing page, real Shopify product page, real cart page, classic customer-account templates, product packs, rewards, wholesale gating, FAQ, WhatsApp widget and mobile CTA.

The brand direction follows the public Instagram identity at `https://www.instagram.com/alicyn.mx/`. See `BRAND_REFERENCE_NOTES.md`.

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
│   ├── es.default.json
│   └── es.json
├── sections/
│   ├── alicyn-landing.liquid
│   ├── alicyn-wholesale-application.liquid
│   ├── main-cart-alicyn.liquid
│   ├── main-product-alicyn.liquid
│   └── apps.liquid
├── snippets/
│   ├── alicyn-buy-actions.liquid
│   ├── alicyn-placeholder.liquid
│   ├── alicyn-product-packs.liquid
│   ├── alicyn-rewards.liquid
│   └── alicyn-wholesale-pricing.liquid
├── templates/
│   ├── index.json
│   ├── cart.json
│   ├── product.json
│   ├── page.mayoreo-alicyn.json
│   └── customers/
│       ├── account.liquid
│       ├── login.liquid
│       └── register.liquid
├── BRAND_REFERENCE_NOTES.md
├── SETUP_REWARDS_WHOLESALE.md
└── SHOPIFY_IMPLEMENTATION.md
```

## Main files

- `layout/theme.liquid` loads `content_for_header`, `content_for_layout`, `assets/alicyn.css` and `assets/alicyn.js`.
- `templates/index.json` renders the homepage landing section.
- `templates/product.json` renders a real Shopify product page.
- `templates/cart.json` renders a real Shopify cart page.
- `templates/customers/*.liquid` support classic customer accounts.
- `sections/alicyn-landing.liquid` contains the primary landing page, editable section settings and local Shopify blocks.
- `snippets/alicyn-buy-actions.liquid` centralizes real add-to-cart and buy-now actions.
- `snippets/alicyn-product-packs.liquid` renders real Shopify forms for public packs when products exist.
- `snippets/alicyn-rewards.liquid` renders rewards based on `customer.orders_count`, `customer.total_spent` and customer tags.
- `snippets/alicyn-wholesale-pricing.liquid` renders wholesale prices only for authorized customer tags.
- `sections/alicyn-wholesale-application.liquid` renders the real Shopify contact form for wholesale access.

## Shopify theme editor customization

Open `Online Store > Themes > Customize > Home page > Alicyn Landing`.

The section exposes settings for:

- Product URL, optional checkout URL, WhatsApp URL, Instagram URL and brand text.
- Account link labels.
- Announcement bar, hero copy, product image, background cleanup, fit, position, scale, offsets, CTAs, price labels and product facts.
- Header/footer logos.
- Product pack handles and wholesale pack handles.
- Section headings and copy for benefits, usage moments, warning signs, how-to, details, reviews, studios, FAQ, chat and footer.
- SEO/Product schema name, description and price amount.

The homepage template includes editable Shopify blocks:

- Trust badges.
- Benefit cards.
- Usage moments.
- How-to steps.
- Testimonials.
- Story cards.
- FAQ items.
- WhatsApp quick replies.
- App blocks through Shopify's `@app` block type.

Each block uses Shopify `block.shopify_attributes`, so it can be selected, edited, reordered, duplicated or removed in the theme editor.

## Real purchase flow

Recommended setup:

1. Leave `Checkout URL for buy buttons` empty.
2. Configure product handles in the Theme Editor.
3. Create the real Shopify products listed in `SETUP_REWARDS_WHOLESALE.md`.
4. Let Shopify cart/checkout handle payment and Skydrop shipping quotation.

Button behavior:

- `Agregar al carrito` posts to `/cart/add` with the real `variant.id`.
- `Comprar ahora` posts to `/cart/add` with `return_to=/checkout`.
- Header and sticky CTAs use a Shopify cart permalink when the product exists.
- If a product cannot be resolved, the theme shows a setup notice and safe fallback.

Affected CTAs:

- Header `Comprar`.
- Hero CTA.
- Product details CTA.
- Final CTA.
- Sticky mobile CTA.
- Public pack cards.
- Authorized wholesale cards.

## Product setup summary

Public product:

```text
Alicyn Solución Antiséptica 100 ml para Piercings: $350 MXN
Handle: alicyn-solucion-antiseptica
```

Main product URL:

```text
https://alicynmx.com/products/alicyn-solucion-antiseptica
```

Public packs and wholesale products must exist as real Shopify products for checkout to respect prices. Full setup is documented in `SETUP_REWARDS_WHOLESALE.md`.

Public packs:

```text
Alicyn Pack 2: $665 MXN
Alicyn Pack 3: $945 MXN
Alicyn Pack 4: $1,220 MXN
Alicyn Pack 5: $1,500 MXN
```

## Envío con Skydrop

El texto de envío debe mantenerse preciso:

```text
Envío cotizado en checkout con Skydrop.
```

Versión larga:

```text
El costo de envío se cotiza al finalizar la compra con Skydrop según tu dirección, cobertura y paquetería disponible.
```

No publiques copy que prometa tarifas fijas, cobertura específica o envío sin costo.

## Product photo background and fit

In `Online Store > Themes > Customize > Home page > Alicyn Landing > Hero`, upload the product image in `Product image`.

Use:

- `Limpieza visual del fondo de la foto: Fondo claro` for photos on white or pale backgrounds.
- `Limpieza visual del fondo de la foto: PNG/WebP transparente` when the image already has the background removed.
- `Encuadre de la foto de producto: Producto completo visible` for bottle/product photos.
- `Encuadre de la foto de producto: Llenar el area del hero` only for wider editorial product shots.
- `Posición`, `Escala`, `Ajuste vertical`, `Ajuste horizontal` and `Espacio alrededor` to fine-tune uploaded PNG/JPG product photos.

For true pixel-level background removal, remove the background in Shopify's media editor with Shopify Magic or an image app before selecting the file in the theme editor.

## Brand assets

Configure from `Online Store > Themes > Customize`:

- `Logo principal`
- `Logo footer`

Configure from `Theme settings > Brand assets`:

- `Favicon`
- `Imagen para compartir / thumbnail`

If no logo is selected, the theme keeps the current text/drop fallback.

## Positioning and claims

Alicyn is positioned as targeted support for key moments, not automatic daily use by default.

Keep copy focused on:

- cuidado post piercing puntual
- limpieza de piercing responsable
- sensación calmante
- molestias comunes
- momentos de mayor sensibilidad, exposición, roce, jalón o golpe
- piel sana y uso tópico externo

Do not claim that Alicyn resolves medical problems, assures outcomes or changes the natural timing of the process.

## Connect this repo to Shopify

1. In Shopify Admin, go to `Online Store > Themes`.
2. Click `Add theme`.
3. Choose `Connect from GitHub`.
4. Select the GitHub account/repo: `sebhesp/alicynmx.com-page`.
5. Select branch: `main`.
6. Connect the theme.
7. Preview before publishing.

## Shopify domain setup

1. Connect custom domain: `alicynmx.com`.
2. Redirect `www.alicynmx.com` to `alicynmx.com`.
3. Confirm SSL is enabled.
4. Set `alicynmx.com` as the primary domain.

## Required Shopify Admin setup

Read `SETUP_REWARDS_WHOLESALE.md` before publishing rewards or wholesale blocks.

Important limitations:

- Liquid can show benefits from the logged-in `customer` object.
- Liquid cannot create discounts or change checkout prices.
- Pack and wholesale prices must be real Shopify products or real Shopify discounts.
- Customer tags must be managed manually, with Shopify Flow, a loyalty app or another automation.
- Skydrop must be installed/configured in checkout from Shopify Admin.
- Reward discount links are disabled by default; enable `Show reward discount links` only after the discount codes exist in Shopify Admin.

## Shopify GitHub connection troubleshooting

If Shopify says `Not Found`, confirm that the Shopify GitHub app has access to `sebhesp/alicynmx.com-page`.

Choose branch `main`. The branch root must contain these folders directly:

- `layout/`
- `templates/`
- `sections/`
- `snippets/`
- `assets/`
- `config/`
- `locales/`

Do not connect a subfolder or an old static branch.

## Local checks

Static checks you can run locally:

- Confirm `templates/index.json` renders `alicyn-landing`.
- Confirm `templates/product.json` renders `main-product-alicyn`.
- Confirm `templates/cart.json` renders `main-cart-alicyn`.
- Confirm `templates/page.mayoreo-alicyn.json` renders `alicyn-wholesale-application`.
- Confirm `layout/theme.liquid` includes `{{ content_for_header }}` and `{{ content_for_layout }}`.
- Confirm no old bottle-size or old public price references exist.
- Confirm product CTA links use real Shopify product/cart/checkout flow.
- Confirm WhatsApp links use the current number.

## SEO and indexing notes

After launch:

- Verify `https://alicynmx.com` in Google Search Console.
- Submit the Shopify sitemap.
- Confirm the preferred canonical domain is `https://alicynmx.com`.
- Review product schema in Rich Results Test after the product is published.

## Placeholders

- Product photo: replace `assets/alicyn-product.png` or use the Theme Editor product image setting.
- Product handles: configure section settings in the Shopify theme editor if handles differ.
- WhatsApp: `https://wa.me/525542388056`.
- Instagram: `https://www.instagram.com/alicyn.mx/`.
- Domain/canonical: `https://alicynmx.com`.
