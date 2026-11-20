/*
  PAI · Part 1 · Formulari de registre amb validació progressiva.
  Equip: Daniel Tormo Martín, Gerard Rios Gomez, Joan German Pomes.

  Condició de l'enunciat: NO es fan servir expressions regulars.
  Totes les comprovacions es fan recorrent els caràcters un a un.

  Funcionament de la validació progressiva:
  - Els camps s'han d'omplir en ordre (ORDRE_CAMPS).
  - Un camp només s'activa quan tots els anteriors són vàlids, de manera
    que no es pot avançar al següent fins a corregir l'actual.
  - Cada camp es valida mentre s'escriu (input/change) i en sortir-ne (blur).
  - En enviar, es tornen a comprovar tots els camps.
*/

/* ---------- Constants ---------- */

const SIGNES_ESPECIALS = "!@#$%&?";
const DIGITS = "0123456789";

// Ordre en què s'han d'emplenar els camps (id de l'element del DOM).
const ORDRE_CAMPS = ["nom", "edat", "cp", "email", "contrasenya", "confirmacio", "privacitat"];

/* ---------- Funcions auxiliars de caràcters (sense regex) ---------- */

// Retorna true si el caràcter és una lletra (inclou accents, ç, ñ...).
// Una lletra té versió majúscula i minúscula diferents; un dígit o un signe no.
function esLletra(caracter) {
  return caracter.toLowerCase() !== caracter.toUpperCase();
}

function esMajuscula(caracter) {
  return esLletra(caracter) && caracter === caracter.toUpperCase();
}

function esMinuscula(caracter) {
  return esLletra(caracter) && caracter === caracter.toLowerCase();
}

function esDigit(caracter) {
  return DIGITS.includes(caracter);
}

// Compta quantes vegades apareix un caràcter dins d'un text.
function comptaCaracter(text, caracter) {
  let total = 0;
  for (const c of text) {
    if (c === caracter) {
      total++;
    }
  }
  return total;
}

/* ---------- Transformació del nom ---------- */

// Posa en majúscula la primera lletra de cada paraula i la resta en minúscula.
// També elimina els espais repetits. Ex.: "  anna   puig-serra " -> "Anna Puig-serra"
function capitalitzaParaules(text) {
  const paraules = text.split(" ").filter((paraula) => paraula !== "");
  const resultat = [];
  for (const paraula of paraules) {
    resultat.push(paraula.charAt(0).toUpperCase() + paraula.slice(1).toLowerCase());
  }
  return resultat.join(" ");
}

/* ---------- Validadors ----------
   Cada validador rep el valor i retorna un text d'error, o "" si és correcte. */

function validaNom(valor) {
  const text = valor.trim();
  if (text === "") {
    return "Escriu el teu nom i cognoms.";
  }
  for (const c of text) {
    if (!esLletra(c) && c !== " " && c !== "-" && c !== "'") {
      return "El nom només pot contenir lletres, espais, guions i apòstrofs.";
    }
  }
  const paraules = text.split(" ").filter((paraula) => paraula !== "");
  if (paraules.length < 2) {
    return "Escriu com a mínim el nom i un cognom.";
  }
  for (const paraula of paraules) {
    if (paraula.length < 2) {
      return "Cada paraula ha de tenir com a mínim 2 lletres.";
    }
  }
  return "";
}

function validaEdat(valor) {
  if (valor === "") {
    return "Selecciona un rang d'edat diferent de «Selecciona una opció».";
  }
  return "";
}

function validaCodiPostal(valor) {
  const text = valor.trim();
  if (text.length !== 5) {
    return "El codi postal ha de tenir exactament 5 dígits.";
  }
  for (const c of text) {
    if (!esDigit(c)) {
      return "El codi postal només pot contenir números.";
    }
  }
  return "";
}

function validaEmail(valor) {
  const text = valor.trim();
  if (text === "") {
    return "Escriu el teu correu electrònic.";
  }
  if (text.includes(" ")) {
    return "El correu no pot contenir espais.";
  }
  if (comptaCaracter(text, "@") !== 1) {
    return "El correu ha de contenir una sola @.";
  }
  const posicioArrova = text.indexOf("@");
  if (posicioArrova === 0) {
    return "Falta el nom d'usuari abans de l'@.";
  }
  const domini = text.slice(posicioArrova + 1);
  const posicioPunt = domini.indexOf(".");
  if (posicioPunt === -1) {
    return "Després de l'@ hi ha d'haver almenys un punt (p. ex. exemple.cat).";
  }
  if (posicioPunt === 0 || domini.endsWith(".")) {
    return "El domini del correu no és vàlid (revisa la posició del punt).";
  }
  return "";
}

// Retorna un objecte amb l'estat de cada requisit de la contrasenya.
function requisitsContrasenya(valor) {
  let majuscules = 0;
  let minuscules = 0;
  let digits = 0;
  let especials = 0;
  for (const c of valor) {
    if (esMajuscula(c)) majuscules++;
    else if (esMinuscula(c)) minuscules++;
    else if (esDigit(c)) digits++;
    else if (SIGNES_ESPECIALS.includes(c)) especials++;
  }
  return {
    longitud: valor.length >= 8,
    majuscula: majuscules >= 1,
    minuscula: minuscules >= 1,
    digits: digits >= 2,
    especial: especials >= 1
  };
}

function validaContrasenya(valor) {
  const req = requisitsContrasenya(valor);
  actualitzaLlistaRequisits(req);
  if (!req.longitud) return "La contrasenya ha de tenir com a mínim 8 caràcters.";
  if (!req.majuscula) return "Afegeix almenys una lletra majúscula.";
  if (!req.minuscula) return "Afegeix almenys una lletra minúscula.";
  if (!req.digits) return "Afegeix almenys dos dígits.";
  if (!req.especial) return "Afegeix un d'aquests signes: ! @ # $ % & ?";
  return "";
}

function validaConfirmacio(valor) {
  if (valor === "") {
    return "Torna a escriure la contrasenya.";
  }
  if (valor !== document.getElementById("contrasenya").value) {
    return "Les contrasenyes no coincideixen.";
  }
  return "";
}

function validaPrivacitat(marcat) {
  return marcat ? "" : "Has d'acceptar la política de privacitat per enviar.";
}

// Relació entre cada camp i el seu validador.
const VALIDADORS = {
  nom: validaNom,
  edat: validaEdat,
  cp: validaCodiPostal,
  email: validaEmail,
  contrasenya: validaContrasenya,
  confirmacio: validaConfirmacio,
  privacitat: validaPrivacitat
};

/* ---------- Manipulació del DOM ---------- */

// Obté el valor d'un camp (el checkbox retorna true/false).
function valorDelCamp(id) {
  const element = document.getElementById(id);
  return element.type === "checkbox" ? element.checked : element.value;
}

// Mostra l'estat (correcte / error) d'un camp i el seu missatge.
function mostraEstatCamp(id, error) {
  const contenidor = document.querySelector(`[data-camp="${id}"]`);
  const missatge = document.getElementById(`missatge-${id}`);
  const element = document.getElementById(id);

  contenidor.classList.toggle("es-error", error !== "");
  contenidor.classList.toggle("es-correcte", error === "");
  missatge.textContent = error;
  element.setAttribute("aria-invalid", error !== "" ? "true" : "false");
}

// Marca en verd o gris cada requisit de la contrasenya.
function actualitzaLlistaRequisits(req) {
  const elements = document.querySelectorAll("#requisits-contrasenya li");
  for (const li of elements) {
    li.classList.toggle("complert", req[li.dataset.requisit]);
  }
}

// Valida un camp, en mostra el resultat i retorna true si és vàlid.
function validaCamp(id, mostrarMissatge = true) {
  const error = VALIDADORS[id](valorDelCamp(id));
  if (mostrarMissatge) {
    mostraEstatCamp(id, error);
  }
  return error === "";
}

/*
  Activa o desactiva els camps segons l'ordre: un camp només està actiu
  si tots els anteriors són vàlids. Aquesta és la regla que impedeix
  avançar al camp següent fins que l'actual es corregeixi.
*/
function actualitzaCampsActius() {
  let anteriorsValids = true;
  for (const id of ORDRE_CAMPS) {
    const element = document.getElementById(id);
    const contenidor = document.querySelector(`[data-camp="${id}"]`);
    element.disabled = !anteriorsValids;
    contenidor.classList.toggle("es-bloquejat", !anteriorsValids);
    if (anteriorsValids && !validaCamp(id, false)) {
      anteriorsValids = false;
    }
  }
  // Els botons d'ull segueixen l'estat del seu camp.
  for (const boto of document.querySelectorAll(".boto-ull")) {
    boto.disabled = document.getElementById(boto.dataset.objectiu).disabled;
  }
}

/* ---------- Gestors d'esdeveniments ---------- */

// Mentre l'usuari escriu: valida el camp i actualitza quins camps queden actius.
function enEscriure(event) {
  const id = event.target.id;
  // Si es canvia la contrasenya, la confirmació s'ha de tornar a revisar.
  if (id === "contrasenya" && document.getElementById("confirmacio").value !== "") {
    validaCamp("confirmacio");
  }
  validaCamp(id);
  actualitzaCampsActius();
}

// En sortir d'un camp: transforma el nom i valida.
function enSortir(event) {
  const id = event.target.id;
  if (id === "nom") {
    event.target.value = capitalitzaParaules(event.target.value);
  }
  validaCamp(id);
  actualitzaCampsActius();
}

// Mostra o oculta el text d'un camp de contrasenya.
function alternaVisibilitat(event) {
  const boto = event.currentTarget;
  const camp = document.getElementById(boto.dataset.objectiu);
  const ocult = camp.type === "password";
  camp.type = ocult ? "text" : "password";
  boto.textContent = ocult ? "Oculta" : "Mostra";
  boto.setAttribute("aria-pressed", ocult ? "true" : "false");
}

// Botó Esborrar: restableix camps, seleccions, missatges i l'estat de bloqueig.
function enEsborrar() {
  // L'esdeveniment reset buida els valors després d'aquest gestor;
  // per això netegem l'estat visual amb un petit retard.
  setTimeout(() => {
    for (const id of ORDRE_CAMPS) {
      const contenidor = document.querySelector(`[data-camp="${id}"]`);
      contenidor.classList.remove("es-error", "es-correcte");
      document.getElementById(`missatge-${id}`).textContent = "";
      document.getElementById(id).removeAttribute("aria-invalid");
    }
    for (const boto of document.querySelectorAll(".boto-ull")) {
      document.getElementById(boto.dataset.objectiu).type = "password";
      boto.textContent = "Mostra";
      boto.setAttribute("aria-pressed", "false");
    }
    actualitzaLlistaRequisits(requisitsContrasenya(""));
    document.getElementById("resum").hidden = true;
    actualitzaCampsActius();
    document.getElementById("nom").focus();
  }, 0);
}

// Botó Enviar: comprova tots els camps i, si tot és correcte, mostra el resum.
function enEnviar(event) {
  event.preventDefault();

  let primerError = null;
  for (const id of ORDRE_CAMPS) {
    const element = document.getElementById(id);
    if (element.disabled) {
      // Camp encara bloquejat: no s'ha pogut omplir perquè un anterior falla.
      continue;
    }
    if (!validaCamp(id) && primerError === null) {
      primerError = id;
    }
  }

  // Comprovació final: tots els camps han de ser vàlids.
  const totValid = ORDRE_CAMPS.every((id) => validaCamp(id, false));
  if (!totValid) {
    const objectiu = primerError || ORDRE_CAMPS.find((id) => !validaCamp(id, false));
    validaCamp(objectiu);
    document.getElementById(objectiu).focus();
    return;
  }

  mostraResum();
}

// Construeix el resum de dades sense incloure les contrasenyes.
function mostraResum() {
  const edat = document.getElementById("edat");
  const dades = [
    ["Nom i cognoms", document.getElementById("nom").value],
    ["Rang d'edat", edat.options[edat.selectedIndex].text],
    ["Codi postal", document.getElementById("cp").value.trim()],
    ["Correu electrònic", document.getElementById("email").value.trim()],
    ["Contrasenya", "•••••••• (no es mostra)"],
    ["Privacitat", "Acceptada"]
  ];

  const llista = document.getElementById("resum-dades");
  llista.replaceChildren();
  for (const [etiqueta, valor] of dades) {
    const dt = document.createElement("dt");
    dt.textContent = etiqueta;
    const dd = document.createElement("dd");
    dd.textContent = valor;
    llista.append(dt, dd);
  }

  const resum = document.getElementById("resum");
  resum.hidden = false;
  resum.scrollIntoView({ behavior: "smooth" });
}

/* ---------- Inicialització ---------- */

function inicialitza() {
  const formulari = document.getElementById("formulari-registre");

  for (const id of ORDRE_CAMPS) {
    const element = document.getElementById(id);
    const esdeveniment = element.tagName === "SELECT" || element.type === "checkbox" ? "change" : "input";
    element.addEventListener(esdeveniment, enEscriure);
    element.addEventListener("blur", enSortir);
  }

  for (const boto of document.querySelectorAll(".boto-ull")) {
    boto.addEventListener("click", alternaVisibilitat);
  }

  formulari.addEventListener("submit", enEnviar);
  formulari.addEventListener("reset", enEsborrar);

  actualitzaCampsActius();
}

document.addEventListener("DOMContentLoaded", inicialitza);
