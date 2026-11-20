/*
  Càrrega Elèctrica · Mapa dels punts de recàrrega de Barcelona.

  - Dades: PUNTS_RECARREGA (js/dades-punts-recarrega.js, Open Data BCN).
  - Mapa: llibreria Leaflet (https://leafletjs.com) amb el fons de l'ICGC.
  - Interacció pròpia: filtres (checkbox, radio i cerca), comptador i llistat
    que es regeneren amb el DOM cada vegada que l'usuari canvia un filtre.
*/

// Centre aproximat de Barcelona i zoom inicial.
const CENTRE_BCN = [41.395, 2.165];
const ZOOM_INICIAL = 12;

// Colors de cada tipus de càrrega (els mateixos que la llegenda del CSS).
const COLORS = {
  lenta: "#0f8a5f",
  semirapida: "#e69a00",
  rapida: "#c2185b"
};

const NOMS_TIPUS = {
  lenta: "Càrrega lenta",
  semirapida: "Càrrega semiràpida",
  rapida: "Càrrega ràpida"
};

let mapa = null;          // Objecte del mapa de Leaflet (null si no s'ha pogut carregar)
const marcadors = {};     // id del punt -> marcador de Leaflet

/* ---------- Classificació i textos ---------- */

// Classifica un punt segons la potència màxima dels seus endolls.
function tipusDeCarrega(punt) {
  if (punt.potenciaMax >= 50) return "rapida";
  if (punt.potenciaMax > 7.4) return "semirapida";
  return "lenta";
}

// Nom visible del punt: el de l'aparcament si en té, o si no l'adreça.
function nomDelPunt(punt) {
  return punt.nom ? punt.nom.replace("Aparcament Ap. BSM - ", "Aparcament ").replace("Aparcament Ap. - ", "Aparcament ") : punt.adreca;
}

// Crea el contingut de la finestra emergent amb elements del DOM
// (així evitem inserir text de les dades com a HTML).
function creaContingutPopup(punt) {
  const tipus = tipusDeCarrega(punt);
  const contenidor = document.createElement("div");
  contenidor.className = "popup";

  const titol = document.createElement("h3");
  titol.textContent = nomDelPunt(punt);

  const adreca = document.createElement("p");
  adreca.textContent = `${punt.adreca} · ${punt.carrer ? "Al carrer" : "En aparcament"}`;

  const etiqueta = document.createElement("p");
  etiqueta.className = `etiqueta-tipus ${tipus}`;
  etiqueta.textContent = `${NOMS_TIPUS[tipus]} · fins a ${punt.potenciaMax.toLocaleString("ca-ES")} kW`;

  const llista = document.createElement("ul");
  for (const connector of punt.connectors) {
    const element = document.createElement("li");
    element.textContent = `${connector.quantitat} × ${connector.tipus.replace(".", ",")}`;
    llista.appendChild(element);
  }

  contenidor.append(titol, adreca, etiqueta, llista);
  return contenidor;
}

/* ---------- Mapa ---------- */

// Crea el mapa i un marcador circular per a cada punt. Retorna false si Leaflet no és disponible.
function inicialitzaMapa() {
  if (typeof L === "undefined") {
    document.getElementById("mapa").hidden = true;
    document.getElementById("mapa-avis").hidden = false;
    return false;
  }

  mapa = L.map("mapa", { scrollWheelZoom: false }).setView(CENTRE_BCN, ZOOM_INICIAL);

  // Fons del mapa: mapa topogràfic en gris de l'Institut Cartogràfic i Geològic de Catalunya
  // (servei públic i gratuït, sense clau d'API, que també funciona obrint la web en local).
  L.tileLayer("https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/topogris/GRID3857/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.icgc.cat/">Institut Cartogràfic i Geològic de Catalunya</a>'
  }).addTo(mapa);

  for (const punt of PUNTS_RECARREGA) {
    const tipus = tipusDeCarrega(punt);
    const marcador = L.circleMarker([punt.lat, punt.lon], {
      radius: tipus === "rapida" ? 9 : 7,
      color: "#ffffff",
      weight: 2,
      fillColor: COLORS[tipus],
      fillOpacity: 0.9
    });
    marcador.bindPopup(() => creaContingutPopup(punt));
    marcador.bindTooltip(nomDelPunt(punt));
    marcadors[punt.id] = marcador;
  }

  // Ajusta la vista perquè es vegin tots els punts.
  const limits = L.latLngBounds(PUNTS_RECARREGA.map((punt) => [punt.lat, punt.lon]));
  mapa.fitBounds(limits, { padding: [20, 20] });

  // Activa el zoom amb la roda del ratolí només quan l'usuari clica el mapa.
  mapa.on("click", () => mapa.scrollWheelZoom.enable());
  mapa.on("mouseout", () => mapa.scrollWheelZoom.disable());
  return true;
}

/* ---------- Filtres ---------- */

// Llegeix l'estat actual del formulari de filtres.
function llegeixFiltres() {
  const tipus = [];
  for (const casella of document.querySelectorAll('input[name="tipus"]:checked')) {
    tipus.push(casella.value);
  }
  return {
    tipus,
    ubicacio: document.querySelector('input[name="ubicacio"]:checked').value,
    text: document.getElementById("cerca").value.trim().toLowerCase()
  };
}

// Retorna true si el punt compleix tots els filtres.
function compleixFiltres(punt, filtres) {
  if (!filtres.tipus.includes(tipusDeCarrega(punt))) return false;
  if (filtres.ubicacio === "carrer" && !punt.carrer) return false;
  if (filtres.ubicacio === "aparcament" && punt.carrer) return false;
  if (filtres.text !== "") {
    const textPunt = `${punt.adreca} ${punt.nom}`.toLowerCase();
    if (!textPunt.includes(filtres.text)) return false;
  }
  return true;
}

// Centra el mapa en un punt i n'obre la finestra emergent.
function mostraPuntAlMapa(punt) {
  if (!mapa) return;
  mapa.flyTo([punt.lat, punt.lon], 16, { duration: 0.8 });
  marcadors[punt.id].openPopup();
  document.getElementById("mapa").scrollIntoView({ behavior: "smooth", block: "center" });
}

// Crea un element del llistat per a un punt.
function creaElementLlista(punt) {
  const tipus = tipusDeCarrega(punt);
  const element = document.createElement("li");

  const boto = document.createElement("button");
  boto.type = "button";
  boto.className = "element-punt";

  const marca = document.createElement("span");
  marca.className = `punt-llegenda ${tipus}`;

  const text = document.createElement("span");
  text.className = "element-text";
  const nom = document.createElement("strong");
  nom.textContent = nomDelPunt(punt);
  const detall = document.createElement("small");
  detall.textContent = `${punt.endolls} endoll${punt.endolls === 1 ? "" : "s"} · fins a ${punt.potenciaMax.toLocaleString("ca-ES")} kW`;
  text.append(nom, detall);

  boto.append(marca, text);
  boto.addEventListener("click", () => mostraPuntAlMapa(punt));
  element.appendChild(boto);
  return element;
}

// Aplica els filtres: actualitza els marcadors del mapa, el comptador i el llistat.
function aplicaFiltres() {
  const filtres = llegeixFiltres();
  const visibles = PUNTS_RECARREGA.filter((punt) => compleixFiltres(punt, filtres));

  // Marcadors del mapa
  if (mapa) {
    for (const punt of PUNTS_RECARREGA) {
      const marcador = marcadors[punt.id];
      if (visibles.includes(punt)) {
        marcador.addTo(mapa);
      } else {
        marcador.remove();
      }
    }
  }

  // Comptador
  let endolls = 0;
  for (const punt of visibles) {
    endolls += punt.endolls;
  }
  document.getElementById("comptador").innerHTML =
    `Es mostren <strong>${visibles.length}</strong> de ${PUNTS_RECARREGA.length} punts · <strong>${endolls.toLocaleString("ca-ES")}</strong> endolls`;

  // Llistat (ordenat alfabèticament)
  const llista = document.getElementById("llista-punts");
  llista.replaceChildren();
  if (visibles.length === 0) {
    const buit = document.createElement("li");
    buit.className = "llista-buida";
    buit.textContent = "Cap punt no compleix els filtres seleccionats.";
    llista.appendChild(buit);
    return;
  }
  visibles
    .slice()
    .sort((a, b) => nomDelPunt(a).localeCompare(nomDelPunt(b), "ca"))
    .forEach((punt) => llista.appendChild(creaElementLlista(punt)));
}

/* ---------- Inicialització ---------- */

function inicialitza() {
  inicialitzaMapa();

  const formulari = document.getElementById("filtres");
  formulari.addEventListener("change", aplicaFiltres);
  document.getElementById("cerca").addEventListener("input", aplicaFiltres);
  // En restablir, esperem que el navegador hagi reiniciat els camps.
  formulari.addEventListener("reset", () => setTimeout(aplicaFiltres, 0));
  formulari.addEventListener("submit", (event) => event.preventDefault());

  aplicaFiltres();
}

document.addEventListener("DOMContentLoaded", inicialitza);
