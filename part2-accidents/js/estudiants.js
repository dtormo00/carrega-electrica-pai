/*
  Treballa amb la variable global obj, que conté un array d'objectes amb els
  accidents carregats. No modifiquis el contingut de js/script.js.

  Després de completar una funció, crea l'esdeveniment corresponent sobre
  l'enllaç del menú. Aquesta connexió també forma part de l'exercici.

  Equip: Daniel Tormo Martín, Gerard Rios Gomez, Joan German Pomes.
*/

// Ordre natural dels dies de la setmana tal com apareixen al CSV (en català).
const DIES_SETMANA = [
  "Dilluns",
  "Dimarts",
  "Dimecres",
  "Dijous",
  "Divendres",
  "Dissabte",
  "Diumenge"
];

/* ---------- Funcions auxiliars ---------- */

// Formata un número amb separador de milers (p. ex. 8072 -> "8.072").
function formataNumero(numero) {
  return numero.toLocaleString("ca-ES");
}

// Buida la zona de resultats i hi afegeix un títol. Retorna el contenidor.
function preparaResultats(titol) {
  const resultats = document.getElementById("resultats");
  resultats.replaceChildren();

  const encapcalament = document.createElement("h3");
  encapcalament.className = "resultat-titol";
  encapcalament.textContent = titol;
  resultats.appendChild(encapcalament);

  return resultats;
}

// Comprova que hi ha dades carregades. Si no n'hi ha, mostra un avís i retorna false.
function hiHaDades(resultats) {
  if (Array.isArray(obj) && obj.length > 0) {
    return true;
  }
  const avis = document.createElement("p");
  avis.className = "resultat-avis";
  avis.textContent = "Encara no hi ha dades. Carrega primer el fitxer CSV de 2025.";
  resultats.appendChild(avis);
  return false;
}

/* ---------- Exercici 2.1 · Nombre total de registres ---------- */
function exercici01() {
  const resultats = preparaResultats("Exercici 01 · Nombre total d'accidents");
  if (!hiHaDades(resultats)) {
    return;
  }

  const total = obj.length;

  const xifra = document.createElement("p");
  xifra.className = "resultat-xifra";
  xifra.textContent = formataNumero(total);

  const explicacio = document.createElement("p");
  explicacio.className = "resultat-explicacio";
  explicacio.textContent =
    "registres d'accident carregats (cada registre és una causa atribuïda al conductor).";

  resultats.append(xifra, explicacio);
}

/* ---------- Exercici 2.2 · Dia de la setmana amb més accidents ----------
   Compta els registres de cada dia, busca el màxim i mostra també el
   recompte de tots els dies en una taula per poder comprovar el resultat. */
function exercici02() {
  const resultats = preparaResultats("Exercici 02 · Dia de la setmana amb més accidents");
  if (!hiHaDades(resultats)) {
    return;
  }

  // 1. Recompte per dia: objecte { Dilluns: n, Dimarts: n, ... }
  const recompte = {};
  for (const accident of obj) {
    const dia = accident.diaSet || "Sense dia";
    if (recompte[dia] === undefined) {
      recompte[dia] = 0;
    }
    recompte[dia] += 1;
  }

  // 2. Cerca del dia amb el valor màxim (es contemplen possibles empats).
  let maxim = 0;
  let diesMaxims = [];
  for (const dia in recompte) {
    if (recompte[dia] > maxim) {
      maxim = recompte[dia];
      diesMaxims = [dia];
    } else if (recompte[dia] === maxim) {
      diesMaxims.push(dia);
    }
  }

  // 3. Resposta destacada.
  const resposta = document.createElement("p");
  resposta.className = "resultat-destacat";
  resposta.innerHTML =
    `El dia amb més accidents és <strong>${diesMaxims.join(" i ")}</strong>, ` +
    `amb <strong>${formataNumero(maxim)}</strong> registres ` +
    `(${((maxim / obj.length) * 100).toFixed(1)} % del total).`;
  resultats.appendChild(resposta);

  // 4. Taula amb el recompte de tots els dies, en l'ordre de la setmana.
  const taula = document.createElement("table");
  taula.className = "taula-resultats";
  taula.innerHTML =
    "<caption>Registres per dia de la setmana</caption>" +
    "<thead><tr><th scope=\"col\">Dia</th><th scope=\"col\">Accidents</th>" +
    "<th scope=\"col\">Comparació</th></tr></thead>";

  const cos = document.createElement("tbody");
  const ordreDies = DIES_SETMANA.concat(
    Object.keys(recompte).filter((dia) => !DIES_SETMANA.includes(dia))
  );

  for (const dia of ordreDies) {
    if (recompte[dia] === undefined) {
      continue;
    }
    const fila = document.createElement("tr");
    if (diesMaxims.includes(dia)) {
      fila.className = "fila-maxim";
    }
    const amplada = (recompte[dia] / maxim) * 100;
    fila.innerHTML =
      `<th scope="row">${dia}</th>` +
      `<td>${formataNumero(recompte[dia])}</td>` +
      `<td><span class="barra" style="width:${amplada.toFixed(1)}%"></span></td>`;
    cos.appendChild(fila);
  }

  taula.appendChild(cos);
  resultats.appendChild(taula);
}

/* ---------- Exercici 2.3 · PENDENT (lliurament final) ---------- */
function exercici03() {
  // TODO: Calcula els accidents de cada districte i genera'n una llista HTML.
}

/* ---------- Exercici 2.4 · PENDENT (lliurament final) ---------- */
function exercici04() {
  creaFormulari();
  // TODO: Afegeix un eventListener al selector creat per mostrar els accidents del districte triat.
}

/* ---------- Connexió del menú amb les funcions ----------
   Els exercicis 03 i 04 es connectaran quan estiguin acabats. */
document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
