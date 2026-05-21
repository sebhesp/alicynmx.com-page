# Alicyn product import notes

Este CSV crea solo los productos publicos de Alicyn para compra individual o compra con amigos. No incluye productos de mayoreo, distribuidor ni precios profesionales.

Archivo:

```text
data/alicyn-shopify-products-packs.csv
```

## Como importarlo en Shopify

1. Entra a `Shopify Admin > Products`.
2. Haz clic en `Import`.
3. Selecciona `data/alicyn-shopify-products-packs.csv`.
4. Revisa la vista previa de columnas.
5. Confirma la importacion.
6. Al terminar, abre cada producto y revisa precio, handle, SKU, inventario, envio e impuestos.

## Precios a revisar despues de importar

```text
Alicyn Solucion Antiseptica 100 ml para Piercings: $350 MXN
Alicyn Pack 2 Piezas: $665 MXN
Alicyn Pack 3 Piezas: $945 MXN
Alicyn Pack 4 Piezas: $1,220 MXN
Alicyn Pack 5 Piezas: $1,500 MXN
```

Los precios deben existir como precios reales del producto en Shopify. No se simulan con HTML, CSS ni JavaScript.

## Imagenes

El CSV deja `Image Src` vacio porque todavia no hay URLs finales de imagen.

Despues de importar:

1. Abre cada producto.
2. Sube la imagen correspondiente.
3. Revisa que el texto alternativo quede correcto.
4. Usa PNG con fondo transparente cuando sea posible para que el theme lo muestre limpio.

## Handles que deben coincidir con el theme

Confirma que estos handles queden exactamente asi:

```text
alicyn-solucion-antiseptica
alicyn-pack-2
alicyn-pack-3
alicyn-pack-4
alicyn-pack-5
```

El theme detecta los packs publicos por handle mediante `all_products[handle]`. Si un handle cambia, actualizalo en `Online Store > Themes > Customize > Home page > Alicyn Landing`.

## Skydrop

Despues de importar y publicar los productos:

1. Agrega cada producto al carrito desde el theme.
2. Continua a checkout.
3. Confirma que Skydrop cotice el envio segun direccion, cobertura y paqueteria disponible.

No prometas envio gratis, tarifa fija ni cobertura garantizada en la descripcion del producto.

## Botones del theme

Para confirmar que el theme detecta los productos:

1. Abre la home.
2. Revisa la seccion `Compra individual o en grupo`.
3. Cada pack debe mostrar precio real de Shopify cuando el producto existe.
4. Prueba `Agregar al carrito`.
5. Prueba `Comprar ahora`.
6. Confirma que WhatsApp no sea la unica forma de compra si el producto existe.

## Recordatorio de claims

Mantener lenguaje seguro:

- cuidado puntual
- limpieza externa
- sensacion calmante
- molestias comunes del proceso
- uso topico externo
- consulta a tu perforador si tienes dudas

No prometer curacion, regeneracion, aceleracion de cicatrizacion ni tratamiento de infecciones.
