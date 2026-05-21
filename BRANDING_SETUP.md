# Alicyn branding setup

Este theme ya incluye assets fallback para que la marca se vea completa aunque no configures imagenes manualmente en Shopify.

## Assets incluidos

```text
assets/alicyn-logo-principal-blanco.png
assets/alicyn-logo-footer-blanco.png
assets/alicyn-favicon.png
assets/alicyn-social-share.png
```

Tambien puedes subirlos desde Shopify Theme Editor si prefieres administrarlos desde el panel.

## Logo principal del header

Ruta en Shopify:

```text
Online Store > Themes > Customize > Home page > Alicyn Landing
```

Settings:

- `Logo principal del header`
- `Ancho del logo principal`
- `Ancho del logo en mobile`

Valores recomendados:

- Desktop: 150 a 170 px.
- Mobile: 116 a 132 px.

Si no seleccionas imagen, el theme usa `assets/alicyn-logo-principal-blanco.png`. Si ese asset no carga, aparece el fallback textual con gota y `alicyn`.

## Logo del footer

Ruta:

```text
Online Store > Themes > Customize > Home page > Alicyn Landing
```

Settings:

- `Logo del footer`
- `Ancho del logo footer`

Si no seleccionas logo de footer, el theme intenta usar el logo del header. Si tampoco existe, usa `assets/alicyn-logo-footer-blanco.png`. Si ese asset no carga, aparece el fallback textual.

## Favicon y social share

Ruta:

```text
Online Store > Themes > Customize > Theme settings > Brand assets
```

Settings:

- `Favicon`
- `Imagen para compartir / thumbnail`

Fallbacks incluidos:

- Favicon: `assets/alicyn-favicon.png`
- Social share: `assets/alicyn-social-share.png`

Si subes una imagen personalizada en Theme Editor, esa imagen tiene prioridad sobre el asset fallback.

## Imagen de producto en packs

Ruta:

```text
Online Store > Themes > Customize > Home page > Alicyn Landing > Pack images
```

Settings:

- `Mostrar imagen de producto en packs`
- `Imagen de producto para packs`
- `Alt de imagen para packs`
- `Estilo visual de imagen en packs`
- `Escala de imagen en packs`

Comportamiento:

1. Si `Imagen de producto para packs` existe, se usa en las cards.
2. Si no existe, se reutiliza `Product image` del hero.
3. Si tampoco existe, se usa `assets/alicyn-product.png`.

Cada pack renderiza la cantidad visual de productos:

- 1 pieza: 1 imagen.
- 2 piezas: 2 imagenes.
- 3 piezas: 3 imagenes.
- 4 piezas: 4 imagenes.
- 5 piezas: 5 imagenes.

## Checklist visual

- Header desktop: logo nitido, aprox. 150 a 170 px, sin empujar la navegacion.
- Header mobile: logo aprox. 116 a 132 px, menu a la derecha, sin overflow horizontal.
- Footer: logo visible arriba del copy, no gigante.
- Favicon: aparece en la pestana del navegador.
- Social share: revisar con una herramienta de preview de Open Graph despues de publicar.
- Packs: cada card muestra 1, 2, 3, 4 o 5 piezas sin deformar el PNG.
- Packs mobile: Pack 5 no debe salirse de la card.

## Notas

Usa PNG transparente para logos y producto cuando sea posible. No uses el logo sobre fondos claros sin revisar contraste, porque este asset es blanco.
