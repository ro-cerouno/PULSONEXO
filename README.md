# PULSONEXO — sitio final (Entrega 5, Punto Ciego)

## Qué incluye
Sitio completo con identidad editorial maximalista en blanco y negro (tipografía Archivo Black, acento rojo, marquee ticker, animaciones scroll-reveal, firma visual: el asterisco-pulso ✳).

### Estructura de navegación
`Inicio · Qué hago · Mis trabajos · Sobre mí · Contacto`

### Contenido integrado (Semanas 1–4)
- **Autopsia textual** — `autopsia.html`
- **Nota informativa** (Zócalo) — `nota-zocalo.html`
- **Nota informativa** (Taquería) — `nota-taqueria.html`
- **Crónica** — `cronica-noche-condesa.html`
- **Entrevista** (Gerardo Bieletto) — `entrevista-bieletto.html`
- **Editorial** — `editorial-ciudad-moda.html`
- **Infografía** — `infografia-capital-cultural.html`

Todas están enlazadas desde `mis-trabajos.html`, organizadas por tipo de pieza.

## Cómo publicar en GitHub Pages

1. Ve a [github.com](https://github.com) → tu repositorio existente (o crea uno nuevo, público).
2. **Add file → Upload files** → arrastra **todo el contenido** de esta carpeta (los `.html`, `styles.css`, `script.js`, `README.md` y la carpeta `images/` completa) — no arrastres la carpeta contenedora, arrastra lo que está dentro.
3. Si ya tenías archivos viejos en el repo con otros nombres (por ejemplo `nota-abastur.html` o `nota-tecnologia.html`), bórralos desde GitHub para que no queden huérfanos — el sitio nuevo no los usa.
4. **Commit changes.**
5. Ve a **Settings → Pages** — si ya estaba activado, no necesitas tocar nada más; en 1-2 minutos se actualiza solo.
6. Verifica tu URL pública y revisa que las 7 imágenes carguen bien.

## Notas técnicas
- Las imágenes ya vienen optimizadas (convertidas a `.jpg`, redimensionadas) para carga rápida.
- Las animaciones respetan `prefers-reduced-motion` (se desactivan si el usuario lo tiene configurado en su sistema).
- El menú se adapta a móvil (botón "MENÚ" que abre un panel lateral).
- Todo el CSS vive en `styles.css` y el JS de animaciones en `script.js` — para agregar una pieza nueva, duplica el patrón de cualquier página de artículo (nav + byline-row + article-hero + article-body + footer) y agrégala a `mis-trabajos.html`.
