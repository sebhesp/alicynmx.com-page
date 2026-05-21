# Shopify implementation guide

This repository is a Shopify Online Store 2.0 theme for `https://alicynmx.com`.

## Files Shopify needs

- `layout/theme.liquid`
- `templates/index.json`
- `templates/product.json`
- `templates/cart.json`
- `templates/page.mayoreo-alicyn.json`
- `templates/customers/login.liquid`
- `templates/customers/register.liquid`
- `templates/customers/account.liquid`
- `sections/alicyn-landing.liquid`
- `sections/main-product-alicyn.liquid`
- `sections/main-cart-alicyn.liquid`
- `sections/alicyn-wholesale-application.liquid`
- `sections/apps.liquid`
- `snippets/alicyn-buy-actions.liquid`
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

Do not publish until the product, packs, customer accounts, Skydrop and discounts are configured.

## Product setup

Create the main Shopify product:

- Title: `Alicyn Solución Antiséptica 100 ml para Piercings`
- Price: `$350 MXN`
- URL handle: `alicyn-solucion-antiseptica`
- Product type: `Antiséptico`
- Vendor: `Alicyn`
- Main image ALT: `Alicyn solución antiséptica 100 ml para cuidado post-piercing y perforaciones`

Recommended product description:

```text
Solución antiséptica de uso tópico externo para cuidado post piercing puntual. Pensada para apoyar una limpieza responsable y sensación calmante en momentos clave de mayor sensibilidad o exposición. Uso sobre piel sana. Evita ojos y mucosas. No debe usarse como sustituto de valoración profesional ante signos de infección.
```

## Public packs

Create real Shopify products:

- `alicyn-pack-2` — `$665 MXN`
- `alicyn-pack-3` — `$945 MXN`
- `alicyn-pack-5` — `$1,500 MXN`

The homepage pack cards use `all_products[handle]`. If a pack does not exist, the theme shows a setup notice instead of pretending the price will be honored.

## Purchase flow

The theme now includes `snippets/alicyn-buy-actions.liquid`.

It renders:

- Real `/cart/add` form for `Agregar al carrito`.
- Real `/cart/add` form with `return_to=/checkout` for `Comprar ahora`.
- Safe fallback if the product handle does not resolve.

Recommended behavior:

- Leave `Checkout URL for buy buttons` empty.
- Let Shopify cart/checkout run normally.
- Let Skydrop quote shipping during checkout.

Use `Checkout URL for buy buttons` only for a valid checkout/payment link that you intentionally want to use. If the link skips Shopify shipping, Skydrop may not quote.

## Cart

The theme includes:

- `templates/cart.json`
- `sections/main-cart-alicyn.liquid`

The cart supports:

- Product list.
- Quantity updates.
- Remove item links.
- Subtotal.
- `Finalizar compra` with Shopify's standard checkout submit.
- `Seguir comprando`.

Shipping text:

```text
El envío se calculará en checkout con Skydrop según tu dirección.
```

## Product page

The theme includes:

- `templates/product.json`
- `sections/main-product-alicyn.liquid`

The product page uses the real Shopify `product` object:

- Product image.
- Title.
- Real price.
- Product description.
- Variant selector when variants exist.
- Quantity input.
- Add to cart.
- Buy now.
- Account links.
- Skydrop shipping note.

## Customer accounts

Confirm in Shopify Admin:

1. `Settings > Customer accounts`.
2. Whether the store uses New Customer Accounts or Classic Customer Accounts.
3. `/account/login` works.
4. `/account/register` works or redirects correctly.
5. `/account` works for logged-in customers.

Classic templates are included. If the store uses New Customer Accounts, Shopify may serve its hosted account flow.

## Theme behavior

`templates/index.json` renders:

```json
{
  "type": "alicyn-landing"
}
```

The homepage section is configured for Shopify's native theme editor:

- Global content, URLs, CTAs, product image, schema data and product handles are section settings.
- Product image can be adjusted by cleanup mode, fit, position, scale, x/y offset and stage padding.
- Repeating content is stored as Shopify blocks in `templates/index.json`.
- Blocks can be edited, reordered, duplicated or removed from `Online Store > Themes > Customize`.
- The section supports Shopify `@app` blocks.

## Wholesale application page

Create a Shopify page:

- Title: `Mayoreo Alicyn`
- Handle: `mayoreo-alicyn`
- Theme template: `page.mayoreo-alicyn`

The template renders a real Shopify contact form with fields for studio name, contact, city, Instagram, WhatsApp, email, monthly volume and message.

## Wholesale and rewards

Full setup lives in:

```text
SETUP_REWARDS_WHOLESALE.md
```

Key requirements:

- Mayoreo products must exist as real Shopify products.
- Wholesale prices render only for tagged customers.
- Discounts `ALICYN10`, `ALICYNVIP15` and `ALICYNEMBAJADOR` must exist in Shopify Admin before promoting them.
- Homepage reward discount links are controlled by `Show reward discount links` and should stay off until those discounts exist.
- Liquid cannot create discounts or change checkout prices.

## Skydrop

In Shopify Admin:

1. Confirm Skydrop is active.
2. Confirm it quotes in checkout.
3. Test with a CDMX address.
4. Test with an address outside CDMX.

Approved copy:

```text
Envío cotizado en checkout con Skydrop.
```

Long version:

```text
El costo de envío se cotiza al finalizar la compra con Skydrop según tu dirección, cobertura y paquetería disponible.
```

Do not use copy promising a fixed shipping rate or cost.

## Product photo background and fit

In `Online Store > Themes > Customize > Home page > Alicyn Landing > Hero`, use:

- `Product image`: upload or select the Alicyn 100 ml product photo.
- `Limpieza visual del fondo de la foto`: `Fondo claro`, `PNG/WebP transparente` or `Sin ajuste`.
- `Encuadre de la foto de producto`: `Producto completo visible` or `Llenar el area del hero`.
- `Posición de la foto de producto`.
- `Escala de la foto de producto`.
- `Ajuste vertical de la foto`.
- `Ajuste horizontal de la foto`.
- `Espacio alrededor de la foto`.

For true pixel-level background removal, remove the background in Shopify's media editor with Shopify Magic or an image app before selecting the file in the theme editor.

## Shopify domain setup

1. Connect custom domain: `alicynmx.com`.
2. Redirect `www.alicynmx.com` to `alicynmx.com`.
3. Confirm SSL is enabled.
4. Set `alicynmx.com` as primary domain.

## Claims checklist

Keep the page within this positioning:

- Not daily-use by default.
- Targeted for key moments of discomfort, exposure or sensitivity.
- External topical use only.
- Use on healthy skin.
- Avoid eyes and mucosas.
- Consult a piercer or healthcare professional if warning signs appear.

Do not publish copy saying Alicyn:

- Resolves medical problems.
- Assures outcomes.
- Changes the natural timing of the process.
- Functions as a medical numbing product.
- Replaces a piercer or healthcare professional.

## QA checklist before publishing

Purchase:

- Header CTA.
- Hero CTA.
- Product details CTA.
- Final CTA.
- Sticky mobile CTA.
- Pack 1.
- Pack 2.
- Pack 3.
- Pack 5.
- Add to cart.
- Buy now.
- Cart page.
- Checkout.
- Skydrop quote in checkout.

Accounts:

- Create account.
- Login.
- Logout.
- Account page.
- Rewards guest state.
- Rewards logged-in state.

Wholesale:

- Unauthorized customer does not see wholesale prices.
- Tagged customer sees wholesale prices.
- Wholesale add-to-cart works.
- Wholesale checkout works.
- Wholesale application form submits.

Image:

- Transparent PNG.
- JPG with light background.
- Contain.
- Cover.
- Scale 90/100/110.
- Vertical offset.
- Horizontal offset.
- Mobile.
- Desktop.

SEO:

- Schema price is `350.00`.
- OG price is `350.00`.
- Product ALT text is correct.
- No old public price references remain.
