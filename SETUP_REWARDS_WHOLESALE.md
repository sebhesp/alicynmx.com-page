# Setup de compra real, recompensas, mayoreo y Skydrop

Este theme usa Liquid y formularios nativos de Shopify. El checkout solo respeta precios, descuentos y envíos que existan en Shopify Admin.

Reglas:

- No simular precios con HTML, CSS o JavaScript.
- No alterar checkout con JavaScript.
- No hardcodear IDs de variantes.
- No mostrar descuentos si no existen en Shopify Admin.
- No prometer tarifa fija ni envío sin costo.
- El envío se cotiza en checkout con Skydrop.

## A) Customer accounts

En Shopify Admin:

1. Ve a `Settings > Customer accounts`.
2. Activa cuentas de cliente.
3. Define si usarás New Customer Accounts o Classic Customer Accounts.
4. Prueba estas rutas:
   - `/account/login`
   - `/account/register`
   - `/account`

El theme incluye templates classic:

- `templates/customers/login.liquid`
- `templates/customers/register.liquid`
- `templates/customers/account.liquid`

Si la tienda usa New Customer Accounts, Shopify puede redirigir a su flujo propio. Los links del theme siguen siendo seguros.

## B) Producto y packs para cliente final

Crea productos reales en Shopify:

| Producto | Precio | Handle recomendado |
| --- | ---: | --- |
| Alicyn Solución Antiséptica 100 ml para Piercings | $350 MXN | `alicyn-solucion-antiseptica` |
| Alicyn Pack 2 | $665 MXN | `alicyn-pack-2` |
| Alicyn Pack 3 | $945 MXN | `alicyn-pack-3` |
| Alicyn Pack 5 | $1,500 MXN | `alicyn-pack-5` |

El theme usa `all_products[handle]` y renderiza formularios reales `/cart/add` únicamente cuando el producto existe, está disponible y tiene variante disponible.

Los handles se editan desde `Online Store > Themes > Customize > Home page > Alicyn Landing > Product handles`.

## C) Botones de compra

El snippet `snippets/alicyn-buy-actions.liquid` centraliza compra real:

- `Agregar al carrito`: POST real a `/cart/add` con `variant.id`.
- `Comprar ahora`: POST real a `/cart/add` con `return_to=/checkout`.
- Fallback: si el producto no existe, muestra aviso de configuración y link seguro.

Los CTAs principales usan el producto real por handle. El campo `Checkout URL for buy buttons` es opcional y debe dejarse vacío si quieres el flujo estándar Shopify + Skydrop.

Usa `Checkout URL for buy buttons` solo si es un link válido de checkout/payment y sabes que no rompe cotización de envío.

## D) Carrito y checkout

El theme incluye:

- `templates/cart.json`
- `sections/main-cart-alicyn.liquid`

El carrito permite:

- Ver productos agregados.
- Cambiar cantidades.
- Eliminar productos.
- Ver subtotal.
- Continuar comprando.
- Finalizar compra con el botón estándar `name="checkout"`.

Texto de envío:

```text
El envío se calculará en checkout con Skydrop según tu dirección.
```

No se calcula envío en el carrito porque Skydrop lo cotiza en checkout.

## E) Página de producto

El theme incluye:

- `templates/product.json`
- `sections/main-product-alicyn.liquid`

La página de producto usa el objeto real `product` de Shopify:

- Imagen del producto.
- Título.
- Precio real con `product.price` / variante seleccionada.
- Descripción real.
- Selector de variante si existe.
- Cantidad.
- Agregar al carrito.
- Comprar ahora.
- Links a cuenta.
- Nota de envío con Skydrop.

Copy de envío:

```text
Envío cotizado al finalizar la compra con Skydrop.
```

## F) Productos de mayoreo

Crea productos reales en Shopify:

| Producto | Precio | Precio unitario | Handle recomendado |
| --- | ---: | ---: | --- |
| Alicyn Mayoreo 5 | $750 MXN | $150 c/u | `alicyn-mayoreo-5` |
| Alicyn Mayoreo 10 | $1,350 MXN | $135 c/u | `alicyn-mayoreo-10` |
| Alicyn Mayoreo 20 | $2,400 MXN | $120 c/u | `alicyn-mayoreo-20` |
| Alicyn Mayoreo 50 | $5,250 MXN | $105 c/u | `alicyn-mayoreo-50` |

Precio público sugerido de reventa:

```text
$350 MXN
```

Recomendaciones:

- No agregues productos de mayoreo a navegación pública.
- No los agregues a colecciones públicas.
- Ocúltalos de búsqueda/canales públicos si tu configuración lo permite.
- Para control fuerte usa Shopify B2B, una app de wholesale, Shopify Functions o descuentos por segmento.

## G) Tags de cliente

Recompensas:

- `cliente-recurrente`
- `vip-alicyn`
- `embajador-alicyn`

Mayoreo:

- `piercer`
- `estudio-aliado`
- `estudio-pro`
- `distribuidor-alicyn`
- `mayoreo`

Los precios y botones de mayoreo solo se renderizan para clientes logueados con alguno de esos tags.

## H) Descuentos reales

Crea estos descuentos en `Discounts` de Shopify Admin:

| Código | Beneficio previsto |
| --- | --- |
| `ALICYN10` | 10% OFF |
| `ALICYNVIP15` | 15% OFF |
| `ALICYNEMBAJADOR` | Buy X Get Y o beneficio Embajador equivalente si Shopify lo permite |

Limita los códigos por segmento/tag si Shopify Admin lo permite. Liquid solo muestra links; no crea descuentos ni verifica su existencia.

En el Theme Editor, deja `Show reward discount links` apagado hasta que los códigos existan y estén limitados correctamente en Shopify Admin.

## I) Recompensas

Niveles:

| Nivel | Condición | Código |
| --- | --- | --- |
| Nivel 1 — Cliente Alicyn | 1 compra | Sin código |
| Nivel 2 — Cliente Recurrente | 3 pedidos o $1,050 MXN acumulados | `ALICYN10` |
| Nivel 3 — Cliente VIP | 5 pedidos o $1,750 MXN acumulados | `ALICYNVIP15` |
| Nivel 4 — Embajador Alicyn | 8 pedidos o $2,800 MXN acumulados | `ALICYNEMBAJADOR` |

`customer.total_spent` se compara en subunidad de moneda:

- $1,050 MXN → `105000`
- $1,750 MXN → `175000`
- $2,800 MXN → `280000`

Limitaciones:

- Liquid puede mostrar beneficios según el objeto `customer`.
- Liquid no puede crear descuentos ni cambiar precios reales.
- Shopify no agrega tags automáticamente salvo que configures Shopify Flow, una app o automatización externa.

## J) Solicitud de mayoreo

Crea una página en Shopify:

- Title: `Mayoreo Alicyn`
- Handle: `mayoreo-alicyn`
- Theme template: `page.mayoreo-alicyn`

El template renderiza un formulario real `{% form 'contact' %}` con:

- Nombre del estudio.
- Nombre de contacto.
- Ciudad.
- Instagram o página del estudio.
- Teléfono / WhatsApp.
- Correo.
- Volumen estimado mensual.
- Mensaje adicional.

## K) Skydrop

En Shopify Admin:

1. Confirma que Skydrop esté instalado y activo.
2. Confirma que pueda cotizar en checkout.
3. Prueba una dirección de CDMX.
4. Prueba una dirección fuera de CDMX.
5. No publiques textos de tarifa fija ni promesas de costo.

Frase corta:

```text
Envío cotizado en checkout con Skydrop.
```

Frase larga:

```text
El costo de envío se cotiza al finalizar la compra con Skydrop según tu dirección, cobertura y paquetería disponible.
```

## L) Checklist de prueba

Compra:

- Header CTA.
- Hero CTA.
- Details CTA.
- Final CTA.
- Sticky mobile CTA.
- Pack 1.
- Pack 2.
- Pack 3.
- Pack 5.
- Add to cart.
- Comprar ahora.
- Cart page.
- Checkout.
- Skydrop cotizando envío.

Cuentas:

- Crear cuenta.
- Iniciar sesión.
- Cerrar sesión.
- Ver cuenta.
- Usuario no logueado viendo rewards.
- Usuario logueado viendo rewards.

Rewards:

- Cliente sin compras.
- Cliente con 1 compra.
- Cliente con tag `cliente-recurrente`.
- Cliente con tag `vip-alicyn`.
- Cliente con tag `embajador-alicyn`.

Mayoreo:

- Cliente sin tag no ve precios.
- Cliente con tag `piercer` ve precios.
- Cliente con tag `distribuidor-alicyn` ve precios.
- Mayoreo add-to-cart funciona.
- Mayoreo checkout funciona.

Imagen:

- PNG transparente.
- JPG con fondo claro.
- Contain.
- Cover.
- Escala 90/100/110.
- Offset vertical.
- Offset horizontal.
- Mobile.
- Desktop.

SEO:

- Schema price `350.00`.
- OG price `350.00`.
- Alt text correcto.
- No quedan referencias viejas de precio público.
