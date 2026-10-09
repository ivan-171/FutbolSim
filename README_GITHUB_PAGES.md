# LeagueForge VM 1.4.1 — continuidad del campeón y retorno inmediato

Esta versión es una **actualización conservadora de la VM 1.4**. No cambia la resolución de partidos, los drafts, el potencial, la cantidad de operaciones del mercado ni los parámetros económicos.

## Actualizar GitHub Pages sin perder la partida

1. **Antes de subir nada**, en la PWA actual pulsa **Exportar JSON** y guarda la copia en Archivos/iCloud.
2. Descarga y descomprime el ZIP de VM 1.4.1.
3. Sube **el contenido de `LeagueForge_VM_1_4_1/`**, no la carpeta exterior, a la **raíz del mismo repositorio de GitHub Pages**.
4. Haz commit/push y comprueba que GitHub Pages desplegó la actualización.
5. Cierra completamente LeagueForge en el iPhone y ábrelo de nuevo desde el icono. Si tarda en actualizarse, ciérralo y ábrelo otra vez.
6. **No borres la PWA ni limpies los datos web**: tu guardado existente está asociado al mismo origen/URL.

Saves VM 1.4 / schema 5.4 siguen siendo compatibles: el nuevo formato escribe schema **5.4.1**, mantiene IndexedDB y las copias de emergencia de VM 1.3.1.

## Novedades

### Continuidad del campeón
- Solo durante **el mercado posterior al título**, el campeón conserva un recuerdo de su XI y núcleo al abrir la ventana.
- La IA puede vender jugadores importantes, pero bloquea operaciones que provoquen un deterioro acumulado excesivo del XI.
- Puede autorizar una venta extraordinaria hacia un destino deportivo superior por una prima importante; no admite una cadena de ventas que destruya medio equipo.
- La protección también se aplica a los intercambios 1x1 y 2x1.
- La base del mercado **no se reinicia** al pulsar varias veces «Mercado automático».
- **No hay bonificación en partidos, puntos adicionales ni inmunidad al descenso.**

### Retorno inmediato tras descenso
- Ya no se aplica `reconstrucción` automáticamente a cualquier descendido.
- Se compara su XI con el nivel de los tres mejores equipos de la siguiente Segunda.
- Si mantiene calidad suficiente, el plan es **`retorno`** y conserva una política de ventas prudente.
- Si su plantilla queda claramente por debajo de la Segunda competitiva, conserva el plan `reconstrucción`.
- No se alteran ratings ni presupuestos por este plan.

### Ajuste de diagnóstico
- El botón de tests ya no destruye el identificador del cartel de resultados al ejecutar la primera batería.

## Validación

- Core: 60/60
- Economía/mercado VM 1.1: 9/9
- Draft VM 1.2: 8/8
- Balance VM 1.3: 7/7
- Mercado y potencial VM 1.4: 8/8
- Autosave: 6/6
- Nuevos tests 1.4.1: 8/8
- **TOTAL 106/106 pruebas aprobadas** en un navegador Chromium de pruebas.

Save real T33: Los Dragones (XI 86,36) y Sarracenos de Bucarest (XI 84,82) reciben `retorno`; Infernus, campeón T33, queda marcado para conservar continuidad. Tras un mercado automático desde el save real, el XI de Infernus pasó de 87,09 a 88,09. En ese verano, 78 movimientos correspondieron a 78 futbolistas diferentes. En un segundo clic, el nivel de referencia inicial se conservó.

**Nota:** las pruebas han sido en Chromium, no en Safari/iOS físico. Es recomendable comprobar en el iPhone un partido → salir → entrar sin pulsar Guardar para validar el autoguardado en tu dispositivo.
