# Shopify implementation guide

This repository is now a Shopify Online Store 2.0 theme.

## Files Shopify needs

- `layout/theme.liquid`
- `templates/index.json`
- `sections/alicyn-landing.liquid`
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

Do not publish until the product image and product page exist.

## Product setup

Create one Shopify product:

- Title: `Alicyn Solución Antiséptica 100 ml`
- Price: `$349 MXN`
- URL handle: `alicyn-solucion-antiseptica`
- Product type: `Piercing aftercare`
- Vendor: `Alicyn`
- Main image: final 100 ml bottle photo

Recommended product description:

```text
Solución antiséptica de uso tópico externo para cuidado post piercing puntual. Pensada para apoyar una limpieza responsable y sensación calmante en momentos clave de mayor sensibilidad o exposición. Uso sobre piel sana. Evita ojos y mucosas. No debe usarse como sustituto de valoración profesional ante signos de infección.
```

## Theme behavior

`templates/index.json` renders one section:

```json
{
  "type": "alicyn-landing"
}
```

The section contains:

- Announcement bar
- Header/nav
- Hero
- Trust badges
- Benefits
- When-to-use section
- Warning signs education
- How-to-use section
- Product details
- Testimonials
- Storytelling cards
- Studio/wholesale section
- FAQ accordion
- WhatsApp chat widget
- Sticky mobile CTA
- Footer

## Product image

Replace this placeholder file:

```text
assets/alicyn-product.png
```

Keep the filename the same unless you also update `sections/alicyn-landing.liquid` and `layout/theme.liquid`.

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
https://www.instagram.com/alicynmx/
```

## Claims checklist

Keep the page within this positioning:

- Not daily-use by default.
- Targeted for key moments of discomfort, exposure or sensitivity.
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
- Product CTA opens the Shopify product URL.
- WhatsApp chat widget opens and fills encoded messages.
- FAQ opens and closes with keyboard and pointer.
- Sticky mobile CTA appears on mobile.
- Product image is replaced with a real 100 ml bottle photo.
- No old bottle-size references exist.
- No console errors in preview.
- Mobile preview looks clean at narrow widths.
