# LeagueForge VM 1.3 — Balance de economía y mercado

## Mantener tu partida actual
VM 1.3 es compatible con VM 1.2. Si sustituyes los archivos en el **mismo repo de GitHub Pages y mantienes la misma URL**, IndexedDB sigue siendo el mismo y la partida local permanece.

Antes de actualizar, por prudencia: **Historia → Exportar JSON → guardar en Archivos/iCloud**.

## Actualización
1. Descomprime el ZIP.
2. Sustituye en el repo los archivos anteriores por los de `LeagueForge_VM_1_3`.
3. Commit + push.
4. Espera al deploy de GitHub Pages.
5. Cierra y vuelve a abrir la PWA si iOS mantiene unos segundos la versión antigua.

El Service Worker cambia a `leagueforge-vm-v1-3`, por lo que elimina la caché anterior al activarse.

## Qué cambia

### Mercado más activo
- Máximo normal: **5 entradas y 5 salidas por club**.
- Recién ascendido: hasta **6 entradas**.
- Los mínimos y máximos por posición siguen siendo obligatorios.
- El mercado automático resuelve primero las propuestas que ya estaban pendientes y luego realiza nuevas oleadas.
- Un fichaje puede reemplazar al peor jugador de esa misma posición si el club ya estaba en el máximo. El fichaje se queda y el desplazado pasa a agentes libres.
- Stress de 5 universos × 30 temporadas: ~49,4 traspasos por verano de media, sin romper ninguna plantilla.

### Economía sin inflación infinita
- Techo de tesorería: **135M**.
- Premios de Liga se han recalibrado.
- Las plantillas pagan un mantenimiento más fuerte según su valor.
- Las plantillas especialmente caras pagan un coste de lujo adicional.
- A partir de 65M de caja aparece un coste progresivo de tesorería, de modo que acumular dinero sin gastarlo deja de ser gratis.
- Al migrar desde VM 1.2, los presupuestos ya inflados se normalizan una sola vez de forma proporcional, no se resetean todos al mismo valor.

Stress 5 × 30 temporadas:
- mediana presupuestaria media al año 30: ~91M;
- máximo medio al año 30: ~133M;
- solo ~1,8% de las observaciones club-temporada tocaron el techo;
- ningún presupuesto creció sin control.

### Warning de club estancado
En la ficha de club se detecta automáticamente:
- **7 o más temporadas consecutivas en Segunda**, y
- ninguna de ellas terminando en top 4.

Aparece el aviso **⚠ Crisis institucional** con la racha exacta y la sugerencia de reestructuración. No hay boost automático ni rubber-banding: tú decides si renombrar, cambiar entrenador o reconstruir plantilla.

### Plantillas y agentes libres
- Tras retiradas se restauran inmediatamente los mínimos por posición antes del mercado.
- Los agentes libres envejecen y el pool se poda para no crecer indefinidamente.
- Máximos siguen siendo POR 3 / DEF 8 / MED 8 / DEL 6 / total 25.

## Savegame
- Schema VM 1.3: 5.3.
- Sigue usando el mismo IndexedDB de VM 1.2.
- Autosave + manual + 2 checkpoints.
- gzip cuando Safari lo soporta.
- Export/import JSON sigue siendo compatible.
