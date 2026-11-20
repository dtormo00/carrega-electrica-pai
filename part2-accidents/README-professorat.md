# Anàlisi d'accidents de trànsit a Barcelona

Projecte acadèmic de la segona part del Projecte Final de **Programació
d'Aplicacions a Internet (PAI)**, curs 2026-2027, del Grau en Gestió de Ciutats
Intel·ligents i Sostenibles de la Universitat Autònoma de Barcelona.

L'aplicació de partida permet carregar dades obertes reals de l'Ajuntament de
Barcelona i preparar-les en un array JavaScript. Quatre funcions estan
intencionadament pendents perquè l'alumnat les desenvolupi.

## Objectius d'aprenentatge

- Llegir i validar dades d'un fitxer CSV local.
- Treballar amb arrays i objectes en JavaScript natiu.
- Fer càlculs i generar contingut HTML dinàmicament.
- Gestionar esdeveniments del DOM.
- Aplicar criteris bàsics de maquetació web i accessibilitat.
- Interpretar críticament dades urbanes obertes.

## Dades oficials

Les dades provenen del conjunt
[Accidents gestionats per la Guàrdia Urbana. Causes de conductor](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/accidents_causa_conductor_gu_bcn)
de l'Open Data BCN. Per a aquest curs cal descarregar el CSV corresponent a
l'**any 2025**.

1. Obre la pàgina del conjunt de dades.
2. Localitza el recurs CSV de 2025.
3. Descarrega'l al teu ordinador.
4. Des de la pàgina web, selecciona'l amb el botó de càrrega.

No cal posar el CSV al repositori ni publicar-lo a GitHub Pages. Consulta
[dades/README.md](dades/README.md) per al detall de la descàrrega.

## Estructura

```text
UAB-PAI-Accidents/
├── README.md
├── index.html
├── css/
│   ├── style.css
│   └── estudiants.css
├── js/
│   ├── script.js
│   └── estudiants.js
└── dades/
    └── README.md
```

- `index.html`: estructura semàntica, càrrega del CSV, menú i àrea de resultats.
- `css/style.css`: estils base del projecte preparats pel professorat.
- `js/script.js`: lectura, validació i transformació del CSV.
- `css/estudiants.css`: espai per als estils que desenvolupi l'alumnat.
- `js/estudiants.js`: funcions i connexions dels exercicis que ha de completar
  l'alumnat.

## Executar l'aplicació

No hi ha backend, compilació ni dependències externes. Pots obrir `index.html`
directament amb un navegador modern. Per evitar restriccions locals del
navegador també pots servir la carpeta amb un servidor estàtic, per exemple amb
l'opció **Live Server** de VS Code.

1. Obre l'aplicació.
2. Selecciona el CSV oficial de 2025.
3. Comprova que es mostra l'any i l'estat de càrrega.
4. Programa i prova cadascun dels quatre exercicis.

El lloc és compatible amb una publicació estàtica a GitHub Pages.

## Fitxers que ha de modificar l'alumnat

Treballa principalment a:

- `js/estudiants.js`
- `css/estudiants.css`

Consulta primer el contracte de dades creat a `obj`:

```javascript
{
  diaSet: "",
  mes: 0,
  nomMes: "",
  diaMes: 0,
  hora: 0,
  descAcc: "",
  districte: "",
  nDist: 0,
  barri: ""
}
```

L'enllaç entre cada element del menú i la seva funció també s'ha d'afegir com a
part de l'aprenentatge amb JavaScript.

## Tasques pendents

1. **Nombre total d'accidents**: calcular el total de registres carregats i
   mostrar-lo de manera comprensible.
2. **Dia de la setmana amb més accidents**: comptabilitzar els registres per dia
   de la setmana i presentar el màxim.
3. **Accidents per districte**: calcular els totals i crear una llista HTML
   dinàmica.
4. **Accidents d'un districte seleccionat**: fer servir el formulari de
   `creaFormulari()` i escoltar el canvi del selector.

Aquest repositori no conté les solucions d'aquestes tasques.

## Crear una còpia a GitHub

Per treballar individualment:

1. Al repositori publicat pel professorat, selecciona **Use this template** o
   fes un **Fork**, segons les indicacions de l'aula.
2. Crea un repositori nou al teu compte.
3. Clona el repositori amb Git o obre'l directament a GitHub Codespaces.
4. Fes canvis curts i freqüents, i registra'ls amb commits descriptius.
5. Puja la feina amb `git push`.

La publicació del professorat es pot marcar com a **Template repository** des
de **Settings → General**.

## Recomanacions de prova

- Prova primer els exercicis amb una mostra petita del CSV i després amb el
  fitxer complet.
- Comprova els resultats amb una operació manual independent.
- Prova el cas en què encara no hi ha dades carregades.
- Introdueix un CSV amb capçaleres inexistents per verificar el missatge d'error.
- Revisa el teclat, els missatges de la pàgina i el zoom del navegador.
- Obre la consola de desenvolupament i corregeix tots els errors abans de
  publicar.

## Traçabilitat dels fitxers inicials

La versió anterior del projecte es conserva a l'historial Git abans dels canvis
del curs 2026-2027.
