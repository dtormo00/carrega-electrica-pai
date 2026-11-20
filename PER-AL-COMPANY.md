# Instrucciones para seguir el proyecto con Claude (claude.ai)

Este archivo es para el compañero que continúa el trabajo usando **Claude en el navegador o la app** (claude.ai), no Claude Code. Claude no puede acceder al repositorio por sí mismo, así que tú le pasas los archivos y luego subes los cambios.

## 1. Preparar el repositorio

1. Acepta la invitación de colaborador que te ha enviado Daniel (te llega por correo o en https://github.com/notifications).
2. Instala **GitHub Desktop** (https://desktop.github.com) e inicia sesión con tu cuenta de GitHub.
3. En GitHub Desktop: **File → Clone repository → URL** y pega `https://github.com/dtormo00/carrega-electrica-pai`. Elige una carpeta de tu ordenador.
4. Antes de empezar a trabajar, pulsa siempre **Fetch origin / Pull origin** para tener la última versión.

> Si no quieres instalar nada: en la página del repo, **Code → Download ZIP**. Pero después tendrás que subir los cambios a mano con **Add file → Upload files**, y es más fácil equivocarse.

## 2. Cómo trabajar con Claude

1. Abre un chat nuevo en claude.ai (mejor con un Proyecto, para poder adjuntar archivos).
2. Copia el **prompt del apartado 4** y pégalo como primer mensaje.
3. **Adjunta los archivos** que se indican en cada tarea (arrástralos al chat). Como mínimo, adjunta siempre `README.md`.
4. Claude te devolverá **archivos completos**. Sustituye todo el contenido del archivo de tu carpeta por el que te dé Claude (no mezcles trozos).
5. Prueba el resultado abriendo el `index.html` correspondiente en el navegador (doble clic). Si algo falla, abre la consola (F12 → Console) y pégale el error a Claude.
6. Cuando funcione, en GitHub Desktop escribe un mensaje de commit (p. ej. «Part 2: exercici 2.3») → **Commit to main** → **Push origin**.
7. Haz una tarea cada vez, con un commit por tarea.

## 3. Lista de tareas pendientes

### Para el Lliurament 2 (viernes 04/12/2026), PRIORITARIO

| # | Tarea | Archivos que hay que adjuntar a Claude |
|---|---|---|
| A | Guía paso a paso para crear la web en WordPress.com (Parte 3) | `README.md` |
| B | Crear la web en WordPress.com siguiendo la guía (esto lo hacéis vosotros a mano) | — |
| C | Probar el formulario (Parte 1) y corregir lo que falle | `part1-formulari/index.html`, `css/formulari.css`, `js/formulari.js` |
| D | Probar la Parte 2 con el CSV de 2025 (apartados 2.1 y 2.2) | `part2-accidents/js/estudiants.js`, `css/estudiants.css` |
| E | Poner la URL de WordPress en el README y actualizar el estado | `README.md` |

### Para la entrega final (17-18/12/2026)

| # | Tarea | Archivos que hay que adjuntar a Claude |
|---|---|---|
| F | Parte 2: apartados 2.3 y 2.4 | `part2-accidents/js/estudiants.js`, `css/estudiants.css`, `js/script.js` (solo de consulta), `index.html` (solo de consulta) |
| G | Parte 4: contenido de «Com funciona» | `part4-web/html/com-funciona.html`, `css/estils.css`, `index.html` |
| H | Parte 4: contenido de «Ajudes i ZBE» (con preguntas frecuentes desplegables) | `part4-web/html/ajudes.html`, `css/estils.css` |
| I | Parte 4: calculadora de ahorro y simulador de carga | `part4-web/html/eines.html`, `css/estils.css` |
| J | Parte 3: completar WordPress (3 entradas, 2 categorías, menú) | — (a mano) |
| K | Memoria final en PDF | `README.md` y lo que pida Claude |

## 4. Prompt para pegar en Claude

Copia todo el bloque y pégalo como primer mensaje del chat. Después, en otro mensaje, dile qué tarea quieres hacer (p. ej. «Hagamos la tarea A») y adjunta los archivos de la tabla.

```text
Eres mi ayudante para el proyecto final de la asignatura Programació d'Aplicacions a Internet (PAI), UAB, Grau de Gestió de Ciutats Intel·ligents i Sostenibles, curso 2026-2027. Profesor: Marc Esteve.

Equipo: Daniel Tormo Martín (1796817), Gerard Rios Gomez (1790716), Joan German Pomes (1791215).
Repositorio: https://github.com/dtormo00/carrega-electrica-pai (no puedes accederte; yo te adjunto los archivos que necesites).

Temática de las webs (partes 3 y 4): "Càrrega Elèctrica — Guia per passar-se a la mobilitat elèctrica a la ciutat": cómo funciona el coche eléctrico, dónde cargar (sobre todo en pisos sin garaje), ayudas MOVES, etiquetas DGT, Zona de Baixes Emissions (ZBE) y mitos.

IDIOMA: todo el contenido de las webs, el código, los comentarios y los nombres de variables en CATALÁN. A mí explícame las cosas en castellano.

ESTRUCTURA DEL REPOSITORIO
- part1-formulari/: index.html, css/formulari.css, js/formulari.js. Formulario de registro ya completo con validación progresiva (los campos siguientes quedan deshabilitados hasta que los anteriores son válidos).
- part2-accidents/: base del repositorio del profesor (https://github.com/MarcEsteve/projecte-final-pai). index.html y js/script.js NO SE PUEDEN MODIFICAR. script.js crea el array global obj con objetos {diaSet, mes, nomMes, diaMes, hora, descAcc, districte, nDist, barri} a partir del CSV de 2025 de Open Data BCN, y la función creaFormulari(), que crea un <select id="districtes"> dentro de #resultats (el value de cada opción es el NOMBRE del distrito). Nosotros solo tocamos js/estudiants.js y css/estudiants.css. Ya están hechos el 2.1 (exercici01) y el 2.2 (exercici02), con las funciones auxiliares preparaResultats(titol), hiHaDades(resultats) y formataNumero(n).
- part3-wordpress/: (todavía no existe) guía de WordPress.
- part4-web/: index.html (portada), html/ (com-funciona, on-carregar, ajudes, eines), css/estils.css (variables --verd, --verd-fosc, --verd-clar, --groc, --text, --text-suau, --fons, --blanc, --vora, --radi, --ombra; clases .contenidor, .seccio, .targeta, .graella-targetes, .boto, .boto-primari, .boto-secundari, .avis-construccio), js/menu.js (menú hamburguesa), img/. La página on-carregar.html ya tiene un mapa Leaflet con los puntos de carga de Barcelona y filtros (js/mapa.js, css/mapa.css, js/dades-punts-recarrega.js): no lo toques salvo que te lo pida.

NORMAS DEL ENUNCIADO
- Parte 1: PROHIBIDO usar expresiones regulares (ni /.../ ni RegExp, ni .replace o .match con regex).
- Parte 2: respetar los nombres exercici01() a exercici04(). Calcular todo a partir de obj, sin valores escritos a mano. El código de distrito -1 es "districte desconegut / no identificat"; los distritos normales van del 1 al 10. Cada resultado se muestra dentro de #resultats. Los enlaces del menú (#exer01 a #exer04) se conectan con addEventListener en estudiants.js.
- Parte 3 (WordPress.com): plan gratuito, tema gratuito, SIN plugins, sin dominio ni hosting. Mínimo 3 páginas, 2 categorías propias, 3 entradas con texto e imágenes asignadas a las categorías, menú de navegación funcional y web publicada con URL.
- Parte 4: sin WordPress ni frameworks de JavaScript. Carpetas separadas html/css/js/img, al menos 3 páginas navegables con el mismo contenido principal que WordPress, menú funcional, CSS propio, diseño responsive, interactividad con JavaScript (eventos + DOM) y que funcione abriéndolo en local.
- Accesibilidad básica: etiquetas en los formularios, texto alternativo en las imágenes, contraste suficiente.
- Datos ficticios en los ejemplos; nada de contraseñas ni datos personales.
- Código comentado, con nombres claros y técnicas vistas en clase (DOM, eventos, arrays, objetos, bucles). Nada de librerías nuevas sin preguntarme.

CÓMO QUIERO QUE TRABAJES
1. Haz una sola tarea cada vez, la que yo te diga.
2. Si te falta algún archivo para hacerla bien, pídemelo antes de escribir código.
3. Devuélveme siempre ARCHIVOS COMPLETOS (no fragmentos ni "el resto queda igual"), cada uno en su bloque de código con la ruta del archivo como título, para que pueda sustituirlo entero.
4. Mantén el estilo visual y las clases existentes (paleta verde y amarilla de css/estils.css) y la misma cabecera, menú y pie en todas las páginas de la parte 4.
5. Al final de cada tarea dime: qué archivos he de sustituir o crear, cómo probarlo en el navegador (casos concretos) y qué mensaje de commit poner.
6. Explica brevemente las funciones importantes, porque en la defensa nos preguntarán por el código.

DETALLE DE LAS TAREAS (te diré cuál toca)
A. GUÍA WORDPRESS: crea part3-wordpress/GUIA-WORDPRESS.md, en castellano y paso a paso: crear el sitio gratuito, elegir un tema gratuito adecuado, cambiar título, logo y colores; crear las páginas Inici, Com funciona, On carregar, Ajudes i ZBE y Contacte, con un texto inicial en catalán listo para copiar; crear 2 categorías (p. ej. "Guies pràctiques" y "Notícies i ajudes") y 3 entradas con texto en catalán y sugerencias de imágenes libres; configurar el menú y publicar. Añade una nota de que el mapa interactivo no se puede hacer en el plan gratuito (en su lugar, una captura con un enlace) y que esto servirá para la comparación de la memoria.
C. REVISAR LA PARTE 1: revisa formulari.js comprobando cada requisito (nombre con mayúscula en cada palabra; select con 0-17, 18-25, 26-40, 41-55, 56-65 y más de 65; código postal de 5 dígitos; email con una sola @ y un punto después; contraseña de mínimo 8 caracteres con mayúscula, minúscula, 2 dígitos y un signo de !@#$%&?, con mostrar/ocultar; confirmación; checkbox de privacidad; Esborrar; Enviar con resumen sin contraseñas; no avanzar hasta corregir; sin regex). Dame una lista de casos de prueba y corrige lo que falle.
D. REVISAR LA PARTE 2: comprueba que 2.1 y 2.2 son correctos y dame una forma de verificar los resultados (p. ej. código para la consola del navegador).
E. README: actualiza el estado de cada parte y pon la URL de WordPress que te daré.
F. 2.3 y 2.4: exercici03() cuenta los accidentes por distrito (incluido el -1 como desconocido) y genera una lista HTML ordenada; exercici04() llama a creaFormulari() y, con un addEventListener "change" sobre #districtes, muestra el total del distrito elegido. Conecta #exer03 y #exer04 y añade los estilos necesarios.
G. COM FUNCIONA: contenido real (batería y autonomía, tipos de carga lenta/semirrápida/rápida, conectores Schuko/Tipus 2/CCS/CHAdeMO, coste de mantenimiento, comparación con un coche de combustión) con una tabla y alguna interacción sencilla (p. ej. pestañas).
H. AJUDES I ZBE: Pla MOVES, etiqueta 0 de la DGT, qué es la ZBE de Barcelona y una sección de mitos en formato de preguntas frecuentes desplegables hechas con JavaScript (no con <details>). Indica que las cifras de las ayudas son orientativas y que hay que consultar la fuente oficial.
I. EINES (eines.html + js/eines.js): (1) calculadora de ahorro eléctrico vs gasolina: km al año, consumo eléctrico (kWh/100 km), precio del kWh, consumo de gasolina (l/100 km) y precio del litro; muestra el coste anual de cada opción y el ahorro, validando los campos. (2) Simulador del tiempo de carga: capacidad de la batería, % inicial, % final y potencia del cargador (selector 3,7 / 7,4 / 22 / 50 / 150 kW); calcula el tiempo y anima una barra de batería que se llena. Todo con eventos y DOM.
K. MEMORIA: ayúdame a redactar la memoria final según el apartado 10 del enunciado (portada, objetivo y relación con las ciudades inteligentes, resumen de las 4 partes, problemas y soluciones, funciones JS relevantes, comparativa WordPress vs HTML, mejoras, fuentes y uso de IA, enlaces).

Confírmame que lo has entendido con un resumen de 3 líneas y espera a que te diga la primera tarea.
```

## 5. Datos útiles

- **CSV de la Parte 2:** https://opendata-ajuntament.barcelona.cat/data/ca/dataset/accidents_causa_conductor_gu_bcn → descarga el archivo **2025** en CSV. Guárdalo donde quieras (no se sube al repositorio) y cárgalo con el botón de `part2-accidents/index.html`.
- **El mapa de «On carregar»** necesita internet para cargarse.
- **Enunciado completo:** `docs/Enunciat_Projecte_Final_PAI_2026-2027_actualitzat.pdf`. Adjúntaselo a Claude al principio del chat, junto con el prompt.
