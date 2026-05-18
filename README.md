# Alicyn landing/product page

Static, production-ready sales page for Alicyn, a 30 ml antiseptic solution for responsible post-piercing care.

The page is intentionally framework-free, build-free, and easy to migrate into Shopify. It can run by opening `index.html` directly and can also be published on GitHub Pages.

## Run locally

Open `index.html` in a browser.

Optional local server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## File tree

```text
alicynmx.com-page/
├── index.html
├── styles.css
├── script.js
├── README.md
├── SHOPIFY_IMPLEMENTATION.md
└── assets/
    ├── product/
    │   └── README.md
    └── reviews/
        └── README.md
```

## Replace the product image

Place the main product photo here:

```text
assets/product/alicyn-product.png
```

The HTML image block is clearly commented in `index.html`. If the file is missing, `script.js` hides the broken image and shows the CSS bottle placeholder.

Recommended product photo:

- Transparent PNG
- Frontal bottle view
- Minimum 1200 px tall
- Clean edges and no background text

## Change the price

Search for:

```text
$349
349.00
```

Update:

- Hero CTA
- Product details CTA
- Sticky mobile CTA
- Product JSON-LD `offers.price`
- Open Graph product price metadata

## Change the product URL

Search for:

```text
/products/alicyn-solucion-antiseptica
```

Replace it with the final Shopify product URL.

## Change the WhatsApp number

Search for:

```text
525542388056
```

Update it in `index.html` and `script.js`. Keep the `https://wa.me/` format and URL-encode message text.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select `main` and `/root`.
6. Save.

The page will publish as:

```text
https://YOUR-USER.github.io/alicynmx.com-page/
```

## Link checklist

Before publishing, verify internal anchors and CTA links:

1. Open `index.html` in a browser.
2. Open DevTools Console.
3. Paste:

```js
[...document.querySelectorAll('a[href^="#"]')]
  .map((link) => link.getAttribute('href'))
  .filter((href) => !document.querySelector(href));
```

Expected result:

```js
[]
```

Also click:

- Header navigation
- Hero CTA buttons
- FAQ accordion
- WhatsApp chat widget
- Sticky mobile CTA
- Footer links

## Next steps for Shopify

1. Create the Alicyn product in Shopify.
2. Upload the final bottle image.
3. Create a custom page or product template.
4. Paste the HTML sections from `index.html` into Custom Liquid or the theme editor.
5. Move `styles.css` into a theme asset or custom CSS area.
6. Move `script.js` into a theme asset and load it on the Alicyn page only.
7. Replace placeholder URLs with Shopify product, cart, and policy URLs.

See `SHOPIFY_IMPLEMENTATION.md` for the full migration checklist.
