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

## Estat (Lliurament 2 · 04/12/2026)

**Part 1:** el formulari té tots els camps, la validació progressiva (els camps següents queden bloquejats fins que l'actual és correcte), mostrar/ocultar contrasenya, els botons Esborrar i Enviar i el resum sense contrasenyes. No es fa servir cap expressió regular. Pendent: més proves i retocs visuals.

**Part 2:** els apartats 2.1 (total de registres) i 2.2 (dia de la setmana amb més accidents) funcionen. Pendent: 2.3 (accidents per districte) i 2.4 (selector de districte).

**Part 3:** pendent de crear el lloc a WordPress.com.

**Part 4:** hi ha la pàgina d'inici amb menú responsive i 4 pàgines interiors en construcció. Pendent: els continguts, la calculadora d'estalvi i el simulador de càrrega.

## Origen del codi de la part 2

Els fitxers `index.html`, `js/script.js`, `css/style.css` i `dades/README.md` provenen del repositori del professorat [MarcEsteve/projecte-final-pai](https://github.com/MarcEsteve/projecte-final-pai) (commit `bb299cb`) i no s'han modificat. El codi propi de l'equip és a `js/estudiants.js` i `css/estudiants.css`.

Dades: [Open Data BCN · Accidents segons causa conductor](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/accidents_causa_conductor_gu_bcn), fitxer de 2025. El CSV no s'inclou al repositori.

## Ús d'IA

S'ha utilitzat Claude Code com a eina de suport per generar i revisar codi. L'equip ha revisat i entén el codi lliurat.
