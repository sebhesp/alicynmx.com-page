# Importacion de productos Alicyn Lab

Este archivo acompana a `alicyn-lab-shopify-products.csv`, preparado para crear los 12 productos individuales y 9 paquetes tecnicos Aesthetic Labs de Alicyn Lab en Shopify.

## Que deja preparado el CSV

- Productos con titulo, handle, SKU, precio, descripcion responsable, etiquetas SEO y estado activo.
- Plantilla de producto asignada como `product.alicyn-lab`.
- Imagen y texto ALT vacios para que se suba la fotografia real de cada producto en Shopify Admin sin que Shopify rechace el CSV.
- Etiqueta comun `alicyn-lab` para crear una coleccion automatica.
- Copy limitado a investigacion, analisis tecnico y uso de laboratorio.

## Importar en Shopify

1. Ve a `Products > Import`.
2. Carga `data/alicyn-lab-shopify-products.csv`.
3. Revisa la vista previa y confirma que aparezcan 21 productos nuevos, sin reemplazar productos Alicyn existentes.
4. Ejecuta la importacion.
5. En cada ficha, sube la imagen real correspondiente y agrega un texto ALT descriptivo del producto.

## Coleccion de tienda

1. Ve a `Products > Collections > Create collection`.
2. Nombre: `Peptidos`.
3. Handle: `peptidos`.
4. Tipo automatico: producto con tag igual a `alicyn-lab`.
5. Asigna la plantilla de coleccion `collection.alicyn-lab`.
6. Publica la coleccion en Online Store cuando todas las imagenes esten listas.

## Revision obligatoria antes de vender

Los precios, SKUs y textos quedan cargados, pero hay dos datos que no deben inventarse:

- Sube fotografias reales de producto antes de promocionar la coleccion.
- Configura el peso empacado real y la disponibilidad/inventario de cada producto antes de habilitar ventas y cotizacion de envio.

El CSV deja el inventario sin seguimiento automatico y peso en `0`, para evitar asumir stock o medidas logisticas que deben confirmarse con el producto fisico.

## Theme y rutas

- Plantilla de producto: `product.alicyn-lab`.
- Plantilla de coleccion: `collection.alicyn-lab`.
- Landing/pagina: plantilla `page.alicyn-lab`.
- Coleccion esperada: `/collections/peptidos`.
- Los cards de la landing deben apuntar a los handles de producto del CSV al publicar.
- Los handles deben coincidir con los URLs efectivamente generados en Shopify para las fichas activas.

## Cumplimiento de contenido

- Los productos se presentan exclusivamente para investigacion y laboratorio.
- No deben publicarse instrucciones de aplicacion, cantidades de uso o promesas de resultados.
- No son medicamentos, suplementos alimenticios ni cosmeticos.
- No estan destinados al consumo humano o animal.
