# Shopify implementation guide

This repository is a Shopify Online Store 2.0 theme for `https://alicynmx.com`.

## Files Shopify needs

- `layout/theme.liquid`
- `templates/index.json`
- `templates/page.mayoreo-alicyn.json`
- `sections/alicyn-landing.liquid`
- `sections/alicyn-wholesale-application.liquid`
- `sections/apps.liquid`
- `snippets/alicyn-product-packs.liquid`
- `snippets/alicyn-rewards.liquid`
- `snippets/alicyn-wholesale-pricing.liquid`
- `assets/alicyn.css`
- `assets/alicyn.js`
- `assets/alicyn-product.png`
- `config/settings_schema.json`
- `locales/en.default.json`
- `locales/es.default.json`

## Connect from GitHub

1. Open Shopify Admin.
2. Go to `Online Store > Themes`.
3. Click `Add theme`.
4. Select `Connect from GitHub`.
5. Authorize GitHub if Shopify asks.
6. Choose repo: `sebhesp/alicynmx.com-page`.
7. Choose branch: `main`.
8. Click `Connect`.
9. Wait for Shopify to import the theme.
10. Click `Preview`.

Do not publish until the product image, product handles, discounts and wholesale page are configured.

## Product setup

Create the main Shopify product:

- Title: `Alicyn Solución Antiséptica 100 ml`
- Price: `$300 MXN`
- URL handle: `alicyn-solucion-antiseptica`
- Product type: `Piercing aftercare`
- Vendor: `Alicyn`
- Main image: final 100 ml bottle photo

Recommended product description:

```text
Solución antiséptica de uso tópico externo para cuidado post piercing puntual. Pensada para apoyar una limpieza responsable y sensación calmante en momentos clave de mayor sensibilidad o exposición. Uso sobre piel sana. Evita ojos y mucosas. No debe usarse como sustituto de valoración profesional ante signos de infección.
```

## Product packs and rewards

The homepage now includes:

- Public product packs using real Shopify products through `/cart/add`.
- Customer rewards using the logged-in `customer` object.
- Discount links using Shopify discount URLs.
- Wholesale pricing gated by customer tags.
- Wholesale access application page.

Full setup lives in:

```text
SETUP_REWARDS_WHOLESALE.md
```

## Theme behavior

`templates/index.json` renders:

```json
{
  "type": "alicyn-landing"
}
```

The homepage section is configured for Shopify's native theme editor:

- Global content, URLs, CTAs, product image, schema data and product handles are section settings.
- Repeating content is stored as Shopify blocks in `templates/index.json`.
- Blocks can be edited, reordered, duplicated or removed from `Online Store > Themes > Customize`.
- The section uses `block.shopify_attributes` for editor selection support.
- The section supports app blocks with Shopify's `@app` block type.
- `sections/apps.liquid` is present as the app wrapper section.
- The template currently ships with 46 blocks, under Shopify's 50-block limit per section.

The landing section contains:

- Announcement bar
- Header/nav
- Hero
- Product packs
- Rewards
- Trust badges
- Benefits
- When-to-use section
- Warning signs education
- How-to-use section
- Product details
- Testimonials
- Storytelling cards
- Studio/wholesale gated section
- FAQ accordion
- WhatsApp chat widget
- Sticky mobile CTA
- Footer

## Wholesale application page

Create a Shopify page:

- Title: `Mayoreo Alicyn`
- Handle: `mayoreo-alicyn`
- Theme template: `page.mayoreo-alicyn`

The template renders a real Shopify contact form with fields for studio name, contact, city, Instagram, WhatsApp, email, monthly volume and message.

## Section settings

In the Shopify theme editor, the homepage `Alicyn Landing` section exposes product handles:

- `product_single_handle`
- `product_pack_2_handle`
- `product_pack_3_handle`
- `product_pack_5_handle`
- `wholesale_pack_5_handle`
- `wholesale_pack_10_handle`
- `wholesale_pack_20_handle`
- `wholesale_pack_50_handle`

If handles differ in Shopify Admin, update them there. Do not hardcode variant IDs.

It also exposes editable settings for:

- Announcement, hero, CTAs and product image.
- Product price label and JSON-LD price amount.
- Section headings/copy.
- Warning signs and usage guidance.
- Studio/wholesale request copy.
- WhatsApp chat labels and default message.
- Footer disclaimers.

Editable block types:

- Trust badge
- Benefit card
- Usage moment
- Usage step
- Testimonial
- Story card
- FAQ item
- Chat quick reply
- App block

## CTA links

Current product CTA:

```text
/products/alicyn-solucion-antiseptica
```

Current WhatsApp CTA:

```text
https://wa.me/525542388056
```

Current Instagram:

```text
https://www.instagram.com/alicyn.mx/
```

## Shopify domain setup

1. Connect custom domain: `alicynmx.com`.
2. Redirect `www.alicynmx.com` to `alicynmx.com`.
3. Confirm SSL is enabled.
4. Set `alicynmx.com` as primary domain.

## Claims checklist

Keep the page within this positioning:

- Not daily-use by default.
- Targeted for key moments of discomfort, exposure or sensitivity.
- Consistent with Alicyn's Instagram positioning as piercing aftercare for real-life moments: sudor, bumps, cambio de joyería, dudas por DM and piercer/studio support.
- External topical use only.
- Use on healthy skin.
- Avoid eyes and mucosas.
- Consult a piercer or healthcare professional if warning signs appear.

Do not publish copy saying Alicyn:

- Resuelve problemas médicos
- Asegura resultados
- Changes the natural timing of the process
- Funciona como adormecedor médico
- Replaces a piercer or healthcare professional

## QA checklist before publishing

- Theme imports successfully from GitHub.
- Homepage renders the Alicyn landing section.
- Public pack products exist and add to cart.
- Missing pack products show setup messages instead of fake checkout.
- Rewards block shows guest/login state.
- Rewards block shows customer state with orders, spend and tags.
- Discount URLs apply only codes created in Shopify Admin.
- Wholesale prices are hidden from unauthorized customers.
- Authorized wholesale customer tags reveal add-to-cart forms.
- Wholesale application page submits the Shopify contact form.
- Product CTA opens the Shopify product URL.
- WhatsApp chat widget opens and fills encoded messages.
- FAQ opens and closes with keyboard and pointer.
- Sticky mobile CTA appears on mobile.
- Product image is replaced with a real 100 ml bottle photo.
- No old public price, old bottle-size references or unsafe medical claims remain.
- No console errors in preview.
