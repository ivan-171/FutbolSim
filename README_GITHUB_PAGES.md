# LeagueForge VM 1.3.1 — HOTFIX crítico de autoguardado

VM 1.3.1 mantiene exactamente el balance, draft, economía y mercado de VM 1.3.
El cambio es la persistencia.

## Qué fallaba en VM 1.3
IndexedDB guarda de forma asíncrona. Varias llamadas a autosave podían quedar procesándose a la vez.
Una captura vieja podía terminar después de una nueva y sobrescribirla.

Además, el arranque automático miraba IndexedDB antes que una posible copia local más reciente.
En iPhone existe un problema añadido: iOS puede suspender una PWA sin esperar a una Promise pendiente.

## Qué hace 1.3.1
1. Cada acción crea primero una copia síncrona inmediata en localStorage.
2. IndexedDB se escribe después mediante una única cola serial.
3. El timestamp de IndexedDB es el del estado capturado, no el momento en que acaba la compresión.
4. Un save viejo nunca sustituye a uno nuevo.
5. Al arrancar se comparan TODOS los candidatos:
   - autosave IndexedDB
   - checkpoints IndexedDB
   - manual
   - autosave local
   - copia de emergencia
   - formatos legacy
6. Se carga el payload con el `savedAt` más reciente.
7. La partida se reanuda ANTES de compactar/migrar guardados.
8. visibilitychange y pagehide continúan guardando.
9. beforeunload añade otra protección.
10. Hay un watchdog de seguridad cada 30 segundos mientras la app está abierta.

## ¿Puede recuperar la temporada que ya perdiste?
Puede que sí.

Si VM 1.3 llegó a escribir un snapshot/checkpoint con esa temporada, pero luego eligió un autosave viejo al abrir,
VM 1.3.1 detectará el `savedAt` real del snapshot y debería recuperarlo automáticamente.

Si ningún almacenamiento llegó a recibir ese estado, no es posible reconstruirlo.

## Cómo actualizar
- Exporta JSON primero si puedes.
- Sustituye los archivos en el MISMO repo y mantén la MISMA URL de GitHub Pages.
- Commit/push.
- Cierra LeagueForge por completo en el iPhone.
- Vuelve a abrir desde el icono.

## Prueba recomendada
1. Juega un partido.
2. NO pulses Guardar.
3. Cierra la PWA desde el selector de apps.
4. Ábrela.
5. El partido debe seguir jugado.

El botón Guardar queda como checkpoint manual, no como requisito para no perder progreso.
