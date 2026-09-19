# LeagueForge VM — instalación en GitHub Pages

## Qué necesitas
- Una cuenta gratuita de GitHub.
- Un repositorio **público** si usas GitHub Free.
- No necesitas Supabase, Node, Xcode ni ninguna cuenta adicional.

## Subirlo
1. Crea un repositorio, por ejemplo `leagueforge-mobile`.
2. Sube **el contenido de esta carpeta** a la raíz del repo: `index.html`, `manifest.webmanifest`, `sw.js` y la carpeta `icons`.
3. En GitHub: **Settings → Pages**.
4. En “Build and deployment”, selecciona **Deploy from a branch**.
5. Branch: `main`, carpeta: `/ (root)`, y guarda.
6. GitHub te dará una URL similar a `https://TUUSUARIO.github.io/leagueforge-mobile/`.

## Instalar en iPhone
1. Abre esa URL en **Safari**.
2. Pulsa **Compartir**.
3. Pulsa **Añadir a pantalla de inicio**.
4. Ábrelo desde el nuevo icono “LeagueForge”. Se ejecutará como una web app independiente.

## Guardado
- El guardado principal usa **IndexedDB**, una base de datos incorporada en Safari. No instalas nada.
- Se hace autosave tras acciones importantes y al mandar la app a segundo plano.
- La VM conserva varios snapshots locales.
- `Exportar JSON` crea un backup portable que puedes guardar en Archivos/iCloud.
- `Importar JSON` restaura una partida, incluida una exportada desde LeagueForge desktop v5.

## Importante
GitHub Pages aloja el juego, pero **no almacena tu savegame en el repositorio**. El save vive en tu iPhone. Por eso es recomendable exportar un JSON de backup de vez en cuando, especialmente para dinastías largas.

## Actualizar el juego
Sustituye los archivos del repo por una nueva versión. El Service Worker actualizará la aplicación; el savegame está separado del código en IndexedDB.
