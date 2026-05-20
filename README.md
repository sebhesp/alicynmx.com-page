# Alicyn Shopify theme

Production-ready Shopify Online Store 2.0 theme for `https://alicynmx.com`.

This repo is a Shopify theme, not a static GitHub Pages site. The homepage renders `sections/alicyn-landing.liquid` with the Alicyn 100 ml landing page, product packs, rewards, wholesale gating, FAQ, WhatsApp widget and mobile CTA.

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
│   └── apps.liquid
├── snippets/
│   ├── alicyn-placeholder.liquid
│   ├── alicyn-product-packs.liquid
│   ├── alicyn-rewards.liquid
│   └── alicyn-wholesale-pricing.liquid
├── templates/
│   ├── index.json
│   └── page.mayoreo-alicyn.json
├── BRAND_REFERENCE_NOTES.md
├── SETUP_REWARDS_WHOLESALE.md
└── SHOPIFY_IMPLEMENTATION.md
```

## Main files

- `layout/theme.liquid` loads `content_for_header`, `content_for_layout`, `assets/alicyn.css` and `assets/alicyn.js`.
- `templates/index.json` renders the homepage landing section.
- `sections/alicyn-landing.liquid` contains the primary landing page, editable section settings and local Shopify blocks.
- `snippets/alicyn-product-packs.liquid` renders real Shopify add-to-cart forms for public packs when products exist.
- `snippets/alicyn-rewards.liquid` renders rewards based on `customer.orders_count`, `customer.total_spent` and customer tags.
- `snippets/alicyn-wholesale-pricing.liquid` renders wholesale prices only for authorized customer tags.
- `sections/alicyn-wholesale-application.liquid` renders the real Shopify contact form for wholesale access.

## Shopify theme editor customization

Open `Online Store > Themes > Customize > Home page > Alicyn Landing`.

The section exposes settings for:

- Product URL, Checkout URL, WhatsApp URL, Instagram URL and brand text.
- Announcement bar, hero copy, product image, CTAs, price labels and product facts.
- Product pack handles and wholesale pack handles.
- Section headings and copy for benefits, usage moments, warning signs, how-to, details, reviews, studios, FAQ, chat and footer.
- SEO/Product schema name, description and price amount.

The homepage template includes 46 editable Shopify blocks:

- Trust badges.
- Benefit cards.
- Usage moments.
- How-to steps.
- Testimonials.
- Story cards.
- FAQ items.
- WhatsApp quick replies.
- App blocks through Shopify's `@app` block type.

Each block uses Shopify `block.shopify_attributes`, so it can be selected, edited, reordered, duplicated or removed in the theme editor. Keep total blocks at or below Shopify's section limit of 50.

The theme also includes `sections/apps.liquid` so app blocks can be added as standalone app sections when Shopify or an installed app needs that wrapper.

Do not edit prices only as text if checkout must respect them. Public packs and wholesale prices still need real Shopify products/discounts, documented in `SETUP_REWARDS_WHOLESALE.md`.

## Link buy buttons to checkout

In Shopify Admin:

1. Go to `Online Store > Themes > Customize`.
2. Open `Home page > Alicyn Landing`.
3. In `General`, paste the configured checkout/payment link into `Checkout URL for buy buttons` only if you want to override Shopify's automatic checkout link.
4. Leave `Product URL` as `/products/alicyn-solucion-antiseptica` for SEO/schema and fallback.
5. Enable `Open checkout in a new tab` only if the checkout is external.

Buy button behavior:

- If `Checkout URL for buy buttons` is filled, these CTAs use that URL.
- If it is empty and the individual Shopify product exists, the CTAs use a Shopify cart permalink: `/cart/{variant_id}:1`.
- If the product cannot be resolved, the CTAs fall back to `Product URL`.

Affected CTAs:

- Header `Comprar`
- Hero primary CTA
- Product details CTA
- Final CTA
- Sticky mobile CTA

## Product setup summary

Public product price:

```text
Alicyn 100 ml: $300 MXN
```

Main product URL:

```text
https://alicynmx.com/products/alicyn-solucion-antiseptica
```

Public packs and wholesale products must exist as real Shopify products for checkout to respect prices. Full setup is documented in `SETUP_REWARDS_WHOLESALE.md`.

## Product image

Replace:

```text
assets/alicyn-product.png
```

Upload the final 100 ml bottle photo with the same filename before launch.

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

## Rewards and wholesale setup

Read `SETUP_REWARDS_WHOLESALE.md` before publishing rewards or wholesale blocks.

Important limitations:

- Liquid can show benefits from the logged-in `customer` object.
- Liquid cannot create discounts or change checkout prices.
- Pack and wholesale prices must be real Shopify products or real Shopify discounts.
- Customer tags must be managed manually, with Shopify Flow, a loyalty app or another automation.

## Shopify GitHub connection troubleshooting

If Shopify says `Not Found`, confirm that the Shopify GitHub app has access to `sebhesp/alicynmx.com-page`.

Choose branch `main`. The branch root must contain these folders directly:

- `layout/`
- `templates/`
- `sections/`
- `assets/`
- `config/`
- `locales/`

Do not connect a subfolder or an old static branch.

## Local checks

Static checks you can run locally:

- Confirm `templates/index.json` renders `alicyn-landing`.
- Confirm `templates/page.mayoreo-alicyn.json` renders `alicyn-wholesale-application`.
- Confirm `layout/theme.liquid` includes `{{ content_for_header }}` and `{{ content_for_layout }}`.
- Confirm no old bottle-size or old public price references exist.
- Confirm product CTA links point to `/products/alicyn-solucion-antiseptica`.
- Confirm WhatsApp links use the current number.

## SEO and indexing notes

After launch:

- Verify `https://alicynmx.com` in Google Search Console.
- Submit the Shopify sitemap.
- Confirm the preferred canonical domain is `https://alicynmx.com`.
- Review product schema in Rich Results Test after the product is published.

## Placeholders

- Product photo: replace `assets/alicyn-product.png`.
- Product handles: configure section settings in the Shopify theme editor if handles differ.
- WhatsApp: `https://wa.me/525542388056`.
- Instagram: `https://www.instagram.com/alicyn.mx/`.
- Domain/canonical: `https://alicynmx.com`.
