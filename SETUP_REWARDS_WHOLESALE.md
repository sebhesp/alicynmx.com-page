# Setup de recompensas y mayoreo Alicyn

Este theme muestra recompensas y acceso a mayoreo con Shopify Liquid, pero el checkout sólo puede respetar precios y descuentos que existan en Shopify Admin.

No trates el frontend como motor de precios. Ningún JavaScript cambia precios. Ninguna line item property simula descuentos.

## A) Customer accounts

1. In Shopify Admin, go to `Settings > Customer accounts`.
2. Activa customer accounts.
3. Decide si la tienda usará classic customer accounts o new customer accounts.
4. Confirma que estas URLs funcionen en storefront:
   - `/account/login`
   - `/account/register`

Notas:

- The rewards snippet uses the global `customer` object.
- Si la persona visitante no inició sesión, el theme muestra links para crear cuenta e iniciar sesión.
- New customer accounts puede redirigir a páginas de cuenta alojadas por Shopify. Prueba la experiencia antes de publicar.

## B) Productos y packs para cliente final

Crea productos reales en Shopify:

| Producto | Precio | Handle recomendado |
| --- | ---: | --- |
| Alicyn 100 ml | $300 MXN | `alicyn-solucion-antiseptica` |
| Alicyn Pack 2 | $570 MXN | `alicyn-pack-2` |
| Alicyn Pack 3 | $810 MXN | `alicyn-pack-3` |
| Alicyn Pack 5 | $1,250 MXN | `alicyn-pack-5` |

El theme usa `all_products[handle]` y renderiza formularios `/cart/add` únicamente cuando el producto existe, está disponible y tiene una variante disponible.

Si un producto no existe, el theme muestra:

```text
Configura este pack en Shopify Admin para activar compra directa.
```

## C) Productos de mayoreo

Crea productos reales en Shopify:

| Producto | Precio | Precio unitario | Handle recomendado |
| --- | ---: | ---: | --- |
| Alicyn Mayoreo 5 | $750 MXN | $150 c/u | `alicyn-mayoreo-5` |
| Alicyn Mayoreo 10 | $1,350 MXN | $135 c/u | `alicyn-mayoreo-10` |
| Alicyn Mayoreo 20 | $2,400 MXN | $120 c/u | `alicyn-mayoreo-20` |
| Alicyn Mayoreo 50 | $5,250 MXN | $105 c/u | `alicyn-mayoreo-50` |

Recomendaciones:

- No agregues productos de mayoreo a la navegación pública.
- No agregues productos de mayoreo a colecciones públicas.
- Si Shopify lo permite en tu configuración, ocúltalos de búsqueda o de canales no deseados.
- Si necesitas control más fuerte, usa Shopify B2B, una app de wholesale, customer-specific pricing, Shopify Functions o descuentos por segmento.

La protección del theme es visual y basada en Liquid:

- Personas no autorizadas no ven precios de mayoreo.
- Personas no autorizadas no reciben formularios add-to-cart de productos de mayoreo.
- Personas autorizadas se detectan por customer tags.

## D) Customer tags

Usa estos tags para recompensas:

- `cliente-recurrente`
- `vip-alicyn`
- `embajador-alicyn`

Usa estos tags para acceso a mayoreo:

- `piercer`
- `estudio-aliado`
- `estudio-pro`
- `distribuidor-alicyn`
- `mayoreo`

Desbloqueo manual de niveles:

- `cliente-recurrente` unlocks Cliente Recurrente.
- `vip-alicyn` unlocks Cliente VIP.
- `embajador-alicyn` unlocks Embajador Alicyn.

Acceso a mayoreo:

- Cualquiera de los tags de mayoreo desbloquea cards y formularios add-to-cart.

## E) Discounts

Crea estos descuentos reales en `Discounts` de Shopify Admin:

| Código | Beneficio previsto |
| --- | --- |
| `ALICYN10` | 10% OFF |
| `ALICYNVIP15` | 15% OFF |
| `ALICYNEMBAJADOR` | 1 Alicyn gratis en compra de 2+ piezas, si Shopify Discount permite configurarlo como Buy X Get Y |

Controles recomendados:

- Limita `ALICYN10` al segmento/tag Cliente Recurrente si es posible.
- Limita `ALICYNVIP15` a clientes VIP.
- Limita `ALICYNEMBAJADOR` a clientes embajadores.
- Si Shopify Admin no permite la restricción exacta, administra el código manualmente o usa Shopify Flow/app automation.

Comportamiento del theme:

- Liquid sólo muestra el link de descuento cuando el cliente califica por pedidos, gasto acumulado o tag.
- El formato del link es:

```text
/discount/CODE?redirect=/products/alicyn-solucion-antiseptica
```

El descuento debe existir en Shopify Admin. Liquid no puede verificarlo ni crearlo.

## F) Lógica de recompensas y limitaciones

Niveles de recompensas:

| Nivel | Condición | Beneficio |
| --- | --- | --- |
| Nivel 1 — Cliente Alicyn | 1 compra o más | Historial activo |
| Nivel 2 — Cliente Recurrente | 3 pedidos o $900 MXN acumulados | 10% OFF |
| Nivel 3 — Cliente VIP | 5 pedidos o $1,500 MXN acumulados | 15% OFF |
| Nivel 4 — Embajador Alicyn | 8 pedidos o $2,400 MXN acumulados | 1 Alicyn gratis en compra de 2+ piezas |

`customer.total_spent` se compara en subunidad de moneda, así que los umbrales MXN son:

- $900 MXN → `90000`
- $1,500 MXN → `150000`
- $2,400 MXN → `240000`

Limitaciones:

- Liquid puede mostrar beneficios según el objeto `customer` logueado.
- Liquid no puede crear descuentos.
- Liquid no puede cambiar precios reales en checkout.
- `customer.total_spent` y `customer.orders_count` dependen de datos de cuenta/pedidos.
- Shopify no agrega tags automáticamente para estos niveles salvo que configures Shopify Flow, una app o gestión manual.
- Para automatizar tags por gasto/pedidos, usa Shopify Flow si está disponible, una loyalty app o automatización externa.

## G) Página de solicitud de mayoreo

Crea una página en Shopify:

- Title: `Mayoreo Alicyn`
- Handle: `mayoreo-alicyn`
- Theme template: `page.mayoreo-alicyn`

El template renderiza `sections/alicyn-wholesale-application.liquid`.

El formulario es un Shopify contact form real y envía:

- Nombre del estudio
- Nombre de contacto
- Ciudad
- Instagram o página del estudio
- Teléfono / WhatsApp
- Correo
- Volumen estimado de compra mensual
- Mensaje adicional
- Subject oculto: `Solicitud de acceso a mayoreo Alicyn`
- Tags ocultos: `mayoreo-alicyn,piercer-lead`

## H) Checklist de prueba

Prueba antes de publicar:

- Usuario no logueado.
- Usuario logueado sin compras.
- Cliente con 1 compra.
- Cliente con 3 pedidos o tag `cliente-recurrente`.
- Cliente con tag `vip-alicyn`.
- Cliente con tag `embajador-alicyn`.
- Cliente sin mayoreo.
- Cliente con tag `piercer`.
- Cliente con tag `distribuidor-alicyn`.
- Producto pack existente.
- Producto pack no existente.
- Add to cart de cada pack público.
- Add to cart de cada pack de mayoreo autorizado.
- URL de descuento para `ALICYN10`.
- URL de descuento para `ALICYNVIP15`.
- URL de descuento para `ALICYNEMBAJADOR`.
- Mobile sticky CTA.
- FAQ accordion.
- WhatsApp widget.
- Formulario de mayoreo.
