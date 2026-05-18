# Shopify implementation guide

## Easiest Shopify path

1. Create product in Shopify.
2. Upload product photo.
3. Create custom page/template.
4. Paste HTML sections into Custom Liquid or theme editor.
5. Add CSS to theme custom CSS or asset file.
6. Add JS to theme asset file.

## Product setup

Create one Shopify product:

- Title: `Alicyn Solución Antiséptica 30 ml`
- Price: `$349 MXN`
- URL handle: `alicyn-solucion-antiseptica`
- Product type: `Piercing aftercare`
- Vendor: `Alicyn`
- Main image: upload the final bottle image used as `assets/product/alicyn-product.png`

Recommended product description:

```text
Solución antiséptica de uso tópico para limpieza y rutina responsable de cuidado post-piercing. Uso externo sobre piel sana. Evita ojos y mucosas. Consulta a tu perforador o profesional de salud si las molestias empeoran o persisten.
```

## Section-by-section migration

### Announcement bar

Move the announcement copy into the theme announcement bar if the theme supports it. Otherwise keep the HTML block.

### Header/nav

If the Shopify theme already has a header, remove the static header from `index.html` and map these links into Shopify navigation:

- Producto → `#producto`
- Beneficios → `#beneficios`
- Cómo usarlo → `#como-usarlo`
- Experiencias → `#experiencias`
- Estudios → `#estudios`
- FAQ → `#faq`

### Hero and product image

Use the Shopify product image where possible. Keep the fallback CSS bottle only while the final product photo is pending.

For a Liquid product image:

```liquid
{{ product.featured_image | image_url: width: 1200 | image_tag: loading: 'lazy', alt: product.title }}
```

### Benefits, usage, details, testimonials, studios and FAQ

These can be pasted into Custom Liquid sections. Keep the outer `.alicyn-page` wrapper so the CSS remains scoped and avoids theme conflicts.

### CTAs

Replace `/products/alicyn-solucion-antiseptica` with the final product URL or an add-to-cart flow if the theme supports it.

### Chat widget

Keep the widget if WhatsApp is the preferred sales channel. Update the phone number and messages in both `index.html` and `script.js`.

## CSS migration

Recommended path:

1. Create a theme asset named `alicyn-page.css`.
2. Paste `styles.css`.
3. Load it only on the Alicyn product/page template.

Most styles are scoped under `.alicyn-page` to reduce conflicts with Shopify theme CSS.

## JS migration

Recommended path:

1. Create a theme asset named `alicyn-page.js`.
2. Paste `script.js`.
3. Load it only on the Alicyn product/page template with `defer`.

The JS handles:

- Product image fallback
- Mobile nav toggle
- FAQ accordion
- WhatsApp chat widget

## Recommended apps

Use apps only if Shopify native features are not enough:

- Reviews app: only if Alicyn has verified customer reviews and consent to publish them.
- WhatsApp/chat app: only if the custom widget is not enough for order handling.
- SEO app: optional; the template already includes basic SEO, but Shopify theme SEO settings should be filled in too.

Avoid adding apps for layout, icons, animations or simple accordions.

## Mobile QA checklist

- Header does not cover the hero title.
- Mobile navigation opens, closes and all links scroll to real sections.
- Sticky CTA does not block footer or chat panel.
- Chat panel opens, closes with button and Escape key, and WhatsApp link updates.
- FAQ buttons are reachable by keyboard and announce expanded/collapsed state.
- Text does not overflow buttons, cards or review panels.
- Product image or CSS fallback is visible.
- Tap targets are at least 40 px high.

## Conversion checklist

- Hero CTA links to the Shopify product.
- Price is consistent everywhere.
- WhatsApp CTA uses the correct number.
- Studio CTA clearly says `Cotizar`.
- Product details include size, ingredients, usage and shipping note.
- Testimonials sound human and avoid medical promises.
- Footer includes WhatsApp, Instagram and legal notes.

## Legal/claims checklist

Do not publish claims that Alicyn:

- Resuelve infecciones
- Acorta el proceso natural de recuperación
- Identifica condiciones médicas
- Atiende problemas médicos
- Asegura resultados

Required disclaimers to keep visible:

- Solo uso externo.
- Evitar ojos y mucosas.
- Usar sobre piel sana.
- Consultar a un perforador o profesional de salud si las molestias empeoran o persisten.

For testimonials and customer photos:

- Use real consent.
- Avoid wound or gore imagery.
- Remove medical claims from customer quotes before publishing.
