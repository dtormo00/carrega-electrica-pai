// Taula global amb els accidents que pot utilitzar l'alumnat.
let obj = [];

const columnesNecessaries = {
  diaSet: ["Descripcio_dia_setmana"],
  any: ["Nk_Any", "Any"],
  mes: ["Mes_any"],
  nomMes: ["Nom_mes"],
  diaMes: ["Dia_mes"],
  hora: ["Hora_dia"],
  descAcc: ["Causa conductor", "Descripcio_causa_conductor"],
  districte: ["Nom_districte"],
  nDist: ["Codi_districte"],
  barri: ["Nom_barri"]
};

function normalitzaNomColumna(nom) {
  return nom
    .replace(/^\uFEFF/, "")
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function mostraEstat(missatge, tipus = "") {
  const estat = document.getElementById("carrega-estat");
  if (!estat) {
    return;
  }

  estat.textContent = missatge;
  if (tipus) {
    estat.dataset.tipus = tipus;
  } else {
    delete estat.dataset.tipus;
  }
}

function mostraAny(any) {
  const indicador = document.getElementById("any");
  if (indicador) {
    indicador.textContent = any;
  }
}

function reiniciaResultats() {
  const resultats = document.getElementById("resultats");
  if (!resultats) {
    return;
  }

  resultats.replaceChildren();
  const missatge = document.createElement("p");
  missatge.className = "estat-buit";
  missatge.textContent =
    "Carrega un fitxer CSV i activa la funcionalitat d'un exercici per visualitzar-ne els resultats aquí.";
  resultats.appendChild(missatge);
}

function netejaDadesAnteriors() {
  obj = [];
  mostraAny("Sense dades");
  reiniciaResultats();
}

function readSingleFile(event) {
  const fitxer = event.target.files[0];
  netejaDadesAnteriors();

  if (!fitxer) {
    mostraEstat("No s'ha seleccionat cap fitxer CSV.");
    return;
  }

  mostraEstat(`S'està llegint «${fitxer.name}»…`);

  const lector = new FileReader();
  lector.onload = function (lectura) {
    try {
      generaObj(lectura.target.result, fitxer.name);
    } catch (error) {
      obj = [];
      mostraAny("Sense dades");
      mostraEstat(`No s'ha pogut carregar el fitxer: ${error.message}`, "error");
    }
  };

  lector.onerror = function () {
    obj = [];
    mostraAny("Sense dades");
    mostraEstat("No s'ha pogut llegir el fitxer del dispositiu.", "error");
  };

  lector.readAsText(fitxer, "UTF-8");
}

// Lector de CSV senzill que respecta comes, cometes escapades i salts de línia.
function parseCSV(contingut) {
  if (typeof contingut !== "string" || contingut.trim() === "") {
    throw new Error("el fitxer CSV és buit.");
  }

  const text = contingut.replace(/^\uFEFF/, "");
  const files = [];
  let fila = [];
  let camp = "";
  let entreCometes = false;

  for (let i = 0; i < text.length; i += 1) {
    const caracter = text[i];

    if (entreCometes) {
      if (caracter === '"' && text[i + 1] === '"') {
        camp += '"';
        i += 1;
      } else if (caracter === '"') {
        entreCometes = false;
      } else if (caracter === "\r") {
        if (text[i + 1] === "\n") {
          i += 1;
        }
        camp += "\n";
      } else {
        camp += caracter;
      }
    } else if (caracter === '"' && camp.length === 0) {
      entreCometes = true;
    } else if (caracter === ",") {
      fila.push(camp);
      camp = "";
    } else if (caracter === "\r" || caracter === "\n") {
      if (caracter === "\r" && text[i + 1] === "\n") {
        i += 1;
      }
      fila.push(camp);
      if (fila.some((valor) => valor.trim() !== "")) {
        files.push(fila);
      }
      fila = [];
      camp = "";
    } else {
      camp += caracter;
    }
  }

  if (entreCometes) {
    throw new Error("hi ha un camp entre cometes que no està tancat.");
  }

  fila.push(camp);
  if (fila.some((valor) => valor.trim() !== "")) {
    files.push(fila);
  }

  return files;
}

function trobaIndexosColumnes(capcaleres) {
  const capcaleresNormalitzades = capcaleres.map(normalitzaNomColumna);
  const indexos = {};
  const mancants = [];

  Object.entries(columnesNecessaries).forEach(([propietat, alternatives]) => {
    const index = alternatives
      .map(normalitzaNomColumna)
      .map((nom) => capcaleresNormalitzades.indexOf(nom))
      .find((posicio) => posicio !== -1);

    if (index === undefined) {
      mancants.push(alternatives[0]);
    } else {
      indexos[propietat] = index;
    }
  });

  if (mancants.length > 0) {
    throw new Error(`falten les columnes obligatòries: ${mancants.join(", ")}.`);
  }

  return indexos;
}

function enterDesDeCamp(valor) {
  const valorNet = String(valor ?? "").trim();
  if (!/^-?\d+$/.test(valorNet)) {
    return null;
  }

  const numero = Number.parseInt(valorNet, 10);
  return Number.isInteger(numero) ? numero : null;
}

function transformaRegistre(fila, indexos) {
  const valor = (propietat) => String(fila[indexos[propietat]] ?? "").trim();
  const any = enterDesDeCamp(valor("any"));
  const mes = enterDesDeCamp(valor("mes"));
  const diaMes = enterDesDeCamp(valor("diaMes"));
  const hora = enterDesDeCamp(valor("hora"));
  const nDist = enterDesDeCamp(valor("nDist"));

  if (
    any === null ||
    any < 1000 ||
    mes === null ||
    mes < 1 ||
    mes > 12 ||
    diaMes === null ||
    diaMes < 1 ||
    diaMes > 31 ||
    hora === null ||
    hora < 0 ||
    hora > 23 ||
    nDist === null ||
    (nDist !== -1 && (nDist < 1 || nDist > 10))
  ) {
    return null;
  }

  return {
    diaSet: valor("diaSet"),
    mes,
    nomMes: valor("nomMes"),
    diaMes,
    hora,
    descAcc: valor("descAcc"),
    districte: valor("districte"),
    nDist,
    barri: valor("barri")
  };
}

function generaObj(contingut, nomFitxer = "") {
  const files = parseCSV(contingut);
  if (files.length < 2) {
    throw new Error("el CSV ha de contenir una capçalera i almenys un registre.");
  }

  const indexos = trobaIndexosColumnes(files[0]);
  const registres = [];
  const anys = new Set();
  let registresOmesos = 0;

  files.slice(1).forEach((fila) => {
    const registre = transformaRegistre(fila, indexos);
    if (registre) {
      registres.push(registre);
      anys.add(String(fila[indexos.any] ?? "").trim());
    } else {
      registresOmesos += 1;
    }
  });

  if (registres.length === 0) {
    throw new Error("no s'ha trobat cap registre vàlid.");
  }

  obj = registres;
  const llistaAnys = [...anys].filter(Boolean).sort();
  const textAny = llistaAnys.length === 1
    ? llistaAnys[0]
    : llistaAnys.join(", ");

  mostraAny(textAny || "No disponible");

  const avísRegistres = registresOmesos > 0
    ? ` S'han omès ${registresOmesos} registre${registresOmesos === 1 ? "" : "s"} buit${registresOmesos === 1 ? "" : "s"} o invàlid${registresOmesos === 1 ? "" : "s"}.`
    : "";
  const fitxer = nomFitxer ? ` de «${nomFitxer}»` : "";
  mostraEstat(
    `S'han carregat ${registres.length} registres${fitxer}.${avísRegistres}`,
    "correcte"
  );

  return obj;
}

document.getElementById("file-input").addEventListener("change", readSingleFile);

// Crea el selector que l'alumnat necessita per al quart exercici.
function creaFormulari() {
  const resultats = document.getElementById("resultats");
  resultats.replaceChildren();

  if (!Array.isArray(obj) || obj.length === 0) {
    const missatge = document.createElement("p");
    missatge.className = "estat-buit";
    missatge.textContent =
      "Carrega primer un fitxer CSV per poder seleccionar un districte.";
    resultats.appendChild(missatge);
    return;
  }

  const districtes = new Map();
  obj.forEach((accident) => {
    if (!districtes.has(accident.nDist)) {
      districtes.set(accident.nDist, accident.districte);
    }
  });

  if (districtes.size === 0) {
    const missatge = document.createElement("p");
    missatge.textContent =
      "No s'han trobat districtes als registres carregats.";
    resultats.appendChild(missatge);
    return;
  }

  const formulari = document.createElement("form");
  formulari.name = "formulari";

  const etiqueta = document.createElement("label");
  etiqueta.htmlFor = "districtes";
  etiqueta.textContent = "Selecciona un districte";

  const selector = document.createElement("select");
  selector.name = "districtes";
  selector.id = "districtes";

  [...districtes.entries()]
    .sort(([primer], [segon]) => primer - segon)
    .forEach(([numero, nom]) => {
      const opcio = document.createElement("option");
      opcio.value = nom;
      opcio.textContent = numero === -1
        ? `${nom || "Districte desconegut"} (-1)`
        : nom || `Districte ${numero}`;
      selector.appendChild(opcio);
    });

  formulari.append(etiqueta, selector);
  resultats.appendChild(formulari);
}
