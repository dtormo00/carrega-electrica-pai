# Càrrega Elèctrica · Projecte final PAI 2026-2027

Projecte final de **Programació d'Aplicacions a Internet** (UAB, Grau de Gestió de Ciutats Intel·ligents i Sostenibles).

**Equip:** Daniel Tormo Martín · Gerard Rios Gomez · Joan German Pomes

**Temàtica (parts 3 i 4):** *Càrrega Elèctrica — Guia per passar-se a la mobilitat elèctrica a la ciutat*.

## Estructura

| Carpeta | Part | Com s'executa |
|---|---|---|
| `part1-formulari/` | 1 · Formulari i validacions | Obre `index.html` al navegador |
| `part2-accidents/` | 2 · Dades obertes d'accidents | Obre `index.html` i carrega el CSV de 2025 |
| `part3-wordpress/` | 3 · Web a WordPress.com | URL: *pendent* |
| `part4-web/` | 4 · Web HTML/CSS/JS | Obre `index.html` al navegador |
| `docs/` | Enunciat del projecte (PDF) | — |

## Estat (Lliurament 2 · 04/12/2026)

**Part 1:** el formulari té tots els camps, la validació progressiva (els camps següents queden bloquejats fins que l'actual és correcte), mostrar/ocultar contrasenya, els botons Esborrar i Enviar i el resum sense contrasenyes. No es fa servir cap expressió regular. Pendent: més proves i retocs visuals.

**Part 2:** els apartats 2.1 (total de registres) i 2.2 (dia de la setmana amb més accidents) funcionen. Pendent: 2.3 (accidents per districte) i 2.4 (selector de districte).

**Part 3:** pendent de crear el lloc a WordPress.com.

**Part 4:** hi ha la pàgina d'inici amb menú responsive i 4 pàgines interiors. La pàgina «On carregar» té un mapa interactiu de Barcelona amb els 134 punts de recàrrega públics d'Endolla Barcelona, filtres per tipus de càrrega, ubicació i adreça, un comptador i un llistat que centra el mapa en el punt triat. Pendent: els continguts de les altres pàgines, la calculadora d'estalvi i el simulador de càrrega.

> El mapa necessita connexió a internet per carregar Leaflet i el fons cartogràfic. Si no n'hi ha, els filtres i el llistat continuen funcionant.

## Origen del codi de la part 2

Els fitxers `index.html`, `js/script.js`, `css/style.css` i `dades/README.md` provenen del repositori del professorat [MarcEsteve/projecte-final-pai](https://github.com/MarcEsteve/projecte-final-pai) (commit `bb299cb`) i no s'han modificat. El codi propi de l'equip és a `js/estudiants.js` i `css/estudiants.css`.

Dades: [Open Data BCN · Accidents segons causa conductor](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/accidents_causa_conductor_gu_bcn), fitxer de 2025. El CSV no s'inclou al repositori.

## Recursos externs de la part 4

- [Leaflet 1.9.4](https://leafletjs.com) (llicència BSD-2), llibreria de mapes carregada des d'unpkg amb comprovació d'integritat.
- Mapa de fons topogràfic de l'[Institut Cartogràfic i Geològic de Catalunya](https://www.icgc.cat/).
- Punts de recàrrega: [Open Data BCN · Informació ampliada dels punts de recàrrega](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/informacio-punts-recarrega-electric), fitxer del 3r trimestre de 2026 (CC BY 4.0). Està simplificat a `part4-web/js/dades-punts-recarrega.js` i es desa com a `.js` perquè funcioni obrint la web en local.

## Ús d'IA

S'ha utilitzat Claude Code com a eina de suport per generar i revisar codi. L'equip ha revisat i entén el codi lliurat.
