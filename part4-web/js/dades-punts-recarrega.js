/*
  Punts de recàrrega de vehicles elèctrics de Barcelona (xarxa Endolla Barcelona).
  Font: Open Data BCN · «Informació ampliada dels punts de recàrrega» (informacio-punts-recarrega-electric),
  fitxer 2026_3T_locations_punts_recarrega_mi.json · Llicència CC BY 4.0.
  Dades simplificades amb un script per l'equip: només els camps que fa servir el mapa.
  Es desa com a fitxer .js (i no .json) perquè el navegador el pugui carregar obrint la web en local (file://).
*/
const PUNTS_RECARREGA = [
    {
        "id":  "3713",
        "lat":  41.419664,
        "lon":  2.118465,
        "adreca":  "Camí de Vallvidrera al Tibidabo 32",
        "nom":  "Aparcament Ap. - Tibidabo",
        "carrer":  false,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3715",
        "lat":  41.372802,
        "lon":  2.154058,
        "adreca":  "Av. Reina Maria Cristina, 16",
        "nom":  "Aparcament Ap. BSM - Rius i Taulet",
        "carrer":  false,
        "endolls":  44,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  24
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  20
                           }
                       ]
    },
    {
        "id":  "3717",
        "lat":  41.40631,
        "lon":  2.152165,
        "adreca":  "C/Torrent de l´Olla, 221",
        "nom":  "Aparcament Ap. BSM - Torrent de l´Olla",
        "carrer":  false,
        "endolls":  27,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  18
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  8
                           },
                           {
                               "tipus":  "Schuko · 3.2 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3718",
        "lat":  41.38116,
        "lon":  2.181465,
        "adreca":  "Pg. de Colom, 1",
        "nom":  "Aparcament Ap. BSM - Moll de la Fusta",
        "carrer":  false,
        "endolls":  14,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  14
                           }
                       ]
    },
    {
        "id":  "3719",
        "lat":  41.403247,
        "lon":  2.152312,
        "adreca":  "c/ Gran de Gràcia 190",
        "nom":  "Aparcament Ap. BSM - Gràcia Motos",
        "carrer":  false,
        "endolls":  28,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  28
                           }
                       ]
    },
    {
        "id":  "3720",
        "lat":  41.39792,
        "lon":  2.1255,
        "adreca":  "C/Cardenal Sentmenat, 8",
        "nom":  "Aparcament Ap. BSM - Cardenal Sentmenat",
        "carrer":  false,
        "endolls":  36,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  36
                           }
                       ]
    },
    {
        "id":  "3721",
        "lat":  41.384616,
        "lon":  2.122279,
        "adreca":  "Avda. Joan XXIII, 23-25",
        "nom":  "Aparcament Ap. BSM - Tanatori Les Corts",
        "carrer":  false,
        "endolls":  14,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  14
                           }
                       ]
    },
    {
        "id":  "3722",
        "lat":  41.401305,
        "lon":  2.13352,
        "adreca":  "C/ Josep Balarí, 9",
        "nom":  "Aparcament Ap. BSM - Ferran Casablancas",
        "carrer":  false,
        "endolls":  25,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  21
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3723",
        "lat":  41.4022,
        "lon":  2.2046,
        "adreca":  "C/ Bilbao, 29 S",
        "nom":  "Aparcament Ap. BSM - Bilbao Llull",
        "carrer":  false,
        "endolls":  11,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  11
                           }
                       ]
    },
    {
        "id":  "3724",
        "lat":  41.3828,
        "lon":  2.19435,
        "adreca":  "Pg. Marítim de la Barceloneta, 23-31",
        "nom":  "Aparcament Ap. BSM - Hospital del Mar",
        "carrer":  false,
        "endolls":  20,
        "potenciaMax":  7.36,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  11
                           },
                           {
                               "tipus":  "Schuko · 7.36 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3725",
        "lat":  41.38687,
        "lon":  2.19763,
        "adreca":  "C/ de la Marina, 13-17",
        "nom":  "Aparcament Ap. BSM - Marina Port",
        "carrer":  false,
        "endolls":  25,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  17
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           }
                       ]
    },
    {
        "id":  "3726",
        "lat":  41.39388,
        "lon":  2.18155,
        "adreca":  "C/ Alí Bei, 54",
        "nom":  "Aparcament Ap. BSM - Estació Bcn-Nord",
        "carrer":  false,
        "endolls":  169,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  163
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  6
                           }
                       ]
    },
    {
        "id":  "3727",
        "lat":  41.389957,
        "lon":  2.128359,
        "adreca":  "C/Flos i Calcat, 2",
        "nom":  "Aparcament Ap. BSM - Flos i Calcat",
        "carrer":  false,
        "endolls":  18,
        "potenciaMax":  3.68,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  17
                           },
                           {
                               "tipus":  "Schuko · 3.68 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3729",
        "lat":  41.409256,
        "lon":  2.168206,
        "adreca":  "C/ de la Marina, 345",
        "nom":  "Aparcament Ap. BSM - Marina Gràcia",
        "carrer":  false,
        "endolls":  26,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  26
                           }
                       ]
    },
    {
        "id":  "3730",
        "lat":  41.399654,
        "lon":  2.185597,
        "adreca":  "C/ Padilla, 159",
        "nom":  "Aparcament Ap. BSM - Plaça de les Arts",
        "carrer":  false,
        "endolls":  23,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  23
                           }
                       ]
    },
    {
        "id":  "3731",
        "lat":  41.38553,
        "lon":  2.19359,
        "adreca":  "C/ Doctor Aiguader, 88",
        "nom":  "Aparcament Ap. BSM - P. R. Biomèdica",
        "carrer":  false,
        "endolls":  16,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  16
                           }
                       ]
    },
    {
        "id":  "3732",
        "lat":  41.411936,
        "lon":  2.220656,
        "adreca":  "Pl. d\u0027Ernest Lluch i Martín",
        "nom":  "Aparcament Ap. BSM - Plaça del Fòrum",
        "carrer":  false,
        "endolls":  25,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  25
                           }
                       ]
    },
    {
        "id":  "3733",
        "lat":  41.42686,
        "lon":  2.14359,
        "adreca":  "Pg. Vall d´Hebron, 138-176",
        "nom":  "Aparcament Ap. BSM - Sant Genís",
        "carrer":  false,
        "endolls":  10,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3734",
        "lat":  41.405377,
        "lon":  2.143079,
        "adreca":  "Rda. del General Mitre, 203",
        "nom":  "Aparcament Ap. BSM - Mitre - Putxet",
        "carrer":  false,
        "endolls":  17,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  9
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  8
                           }
                       ]
    },
    {
        "id":  "3735",
        "lat":  41.42767,
        "lon":  2.17721,
        "adreca":  "C/ Ramón Albó, 77s",
        "nom":  "Aparcament Ap. BSM - Pl. Carmen Laforet",
        "carrer":  false,
        "endolls":  30,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  18
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  12
                           }
                       ]
    },
    {
        "id":  "3736",
        "lat":  41.394408,
        "lon":  2.114755,
        "adreca":  "C/ Marqués de Mulhacen, 51 B",
        "nom":  "Aparcament Ap. BSM - Marquès de Mulhacén",
        "carrer":  false,
        "endolls":  10,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  10
                           }
                       ]
    },
    {
        "id":  "3737",
        "lat":  41.374658,
        "lon":  2.160033,
        "adreca":  "C/ Jaume Fabra, 12",
        "nom":  "Aparcament Ap. BSM - Plaça Navas",
        "carrer":  false,
        "endolls":  26,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  18
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           }
                       ]
    },
    {
        "id":  "3738",
        "lat":  41.41613,
        "lon":  2.18056,
        "adreca":  "Pg. Maragall, 54",
        "nom":  "Aparcament Ap. BSM - Passeig Maragall",
        "carrer":  false,
        "endolls":  28,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  17
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  11
                           }
                       ]
    },
    {
        "id":  "3739",
        "lat":  41.40585,
        "lon":  2.16264,
        "adreca":  "C Escorial, 1(Pl Joanic,1)",
        "nom":  "Aparcament Ap. BSM - Plaça Joanic",
        "carrer":  false,
        "endolls":  30,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  26
                           }
                       ]
    },
    {
        "id":  "3740",
        "lat":  41.40681,
        "lon":  2.133584,
        "adreca":  "Pl. Bonanova, 2",
        "nom":  "Aparcament Ap. BSM - Plaça Bonanova",
        "carrer":  false,
        "endolls":  26,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  26
                           }
                       ]
    },
    {
        "id":  "3741",
        "lat":  41.39245,
        "lon":  2.12909,
        "adreca":  "Pg Manuel Girona, 77",
        "nom":  "Aparcament Ap. BSM - Cotxeres de Sarrià",
        "carrer":  false,
        "endolls":  24,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  24
                           }
                       ]
    },
    {
        "id":  "3742",
        "lat":  41.44219,
        "lon":  2.1777,
        "adreca":  "Via Julia, 95",
        "nom":  "Aparcament Ap. BSM - Pl. Francesc Layret",
        "carrer":  false,
        "endolls":  23,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  23
                           }
                       ]
    },
    {
        "id":  "3743",
        "lat":  41.37216,
        "lon":  2.15668,
        "adreca":  "C/ de la França Xica, 35",
        "nom":  "Aparcament Ap. BSM - Ciutat del Teatre",
        "carrer":  false,
        "endolls":  10,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  7
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  3
                           }
                       ]
    },
    {
        "id":  "3744",
        "lat":  41.42596,
        "lon":  2.18416,
        "adreca":  "C/ Concepción Arenal, 156",
        "nom":  "Aparcament Ap. BSM - Concepció Arenal",
        "carrer":  false,
        "endolls":  13,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  13
                           }
                       ]
    },
    {
        "id":  "3745",
        "lat":  41.39991,
        "lon":  2.12341,
        "adreca":  "C/ Salvador Mundí, 17",
        "nom":  "Aparcament Ap. BSM - Porta de Sarrià",
        "carrer":  false,
        "endolls":  15,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  7
                           }
                       ]
    },
    {
        "id":  "3746",
        "lat":  41.43052,
        "lon":  2.18798,
        "adreca":  "C/ de les Monges, 2",
        "nom":  "Aparcament Ap. BSM - Sant Andreu Teatre",
        "carrer":  false,
        "endolls":  41,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  41
                           }
                       ]
    },
    {
        "id":  "3747",
        "lat":  41.4045,
        "lon":  2.1972,
        "adreca":  "Rambla del poblenou, 130",
        "nom":  "Aparcament Ap. BSM - Rambla Poblenou",
        "carrer":  false,
        "endolls":  15,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  15
                           }
                       ]
    },
    {
        "id":  "3748",
        "lat":  41.381738,
        "lon":  2.17007,
        "adreca":  "C/ Floristes de la rambla S/N",
        "nom":  "Aparcament Ap. BSM - La Boqueria",
        "carrer":  false,
        "endolls":  26,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  26
                           }
                       ]
    },
    {
        "id":  "3749",
        "lat":  41.379509,
        "lon":  2.162065,
        "adreca":  "Comte Urgell 1",
        "nom":  "Aparcament Ap. BSM - Mercat de Sant Antoni",
        "carrer":  false,
        "endolls":  37,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  37
                           }
                       ]
    },
    {
        "id":  "3750",
        "lat":  41.4098,
        "lon":  2.154,
        "adreca":  "Travessera de Dalt, 51",
        "nom":  "Aparcament Ap. BSM - Travessera de Dalt ",
        "carrer":  false,
        "endolls":  40,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  32
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           }
                       ]
    },
    {
        "id":  "3751",
        "lat":  41.419018,
        "lon":  2.178893,
        "adreca":  "c/ Teodor Llorente 28",
        "nom":  "Aparcament Ap. BSM - Mercat del Guinardó",
        "carrer":  false,
        "endolls":  16,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  16
                           }
                       ]
    },
    {
        "id":  "3752",
        "lat":  41.402971,
        "lon":  2.189897,
        "adreca":  "C/ Badajoz, 168",
        "nom":  "Aparcament Ap. BSM - Badajoz",
        "carrer":  false,
        "endolls":  22,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  9
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  13
                           }
                       ]
    },
    {
        "id":  "3753",
        "lat":  41.405136,
        "lon":  2.177452,
        "adreca":  "C/ Mallorca, 425-433",
        "nom":  "Aparcament Ap. BSM - Mercat Sagr. Família",
        "carrer":  false,
        "endolls":  22,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  22
                           }
                       ]
    },
    {
        "id":  "3754",
        "lat":  41.400992,
        "lon":  2.185633,
        "adreca":  "c/ Castillejos 160",
        "nom":  "Aparcament Ap. BSM - Encants",
        "carrer":  false,
        "endolls":  11,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  11
                           }
                       ]
    },
    {
        "id":  "3756",
        "lat":  41.40683,
        "lon":  2.21849,
        "adreca":  "Pg. García Faria, 71",
        "nom":  "Aparcament Ap. BSM - Bus Garcia Fària",
        "carrer":  false,
        "endolls":  8,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3757",
        "lat":  41.449261,
        "lon":  2.190651,
        "adreca":  "C/ Galícia, 16",
        "nom":  "Aparcament Ap. BSM - Galícia",
        "carrer":  false,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3758",
        "lat":  41.459745,
        "lon":  2.175609,
        "adreca":  "C/ Rasos de Peguera, 51",
        "nom":  "Aparcament Ap. BSM - Ciutat Meridiana",
        "carrer":  false,
        "endolls":  3,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  3
                           }
                       ]
    },
    {
        "id":  "3759",
        "lat":  41.406577,
        "lon":  2.152142,
        "adreca":  "c/ Torrent de l\u0027Olla 203",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3760",
        "lat":  41.399721,
        "lon":  2.124675,
        "adreca":  "Hort de la Vila, 46",
        "nom":  "",
        "carrer":  true,
        "endolls":  6,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3761",
        "lat":  41.414495,
        "lon":  2.13708,
        "adreca":  "Pl. Alfonso Comín, 12",
        "nom":  "",
        "carrer":  true,
        "endolls":  6,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3762",
        "lat":  41.388423,
        "lon":  2.169394,
        "adreca":  "Passeig de Gràcia, 5",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3763",
        "lat":  41.40295,
        "lon":  2.1656,
        "adreca":  "Indústria, 19 - Pg. Sant Joan",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3764",
        "lat":  41.444752,
        "lon":  2.174366,
        "adreca":  "Via Favència, 169 - Almansa",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3765",
        "lat":  41.394067,
        "lon":  2.108034,
        "adreca":  "Av. Pearson-Miret i Sans(IESE)",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3766",
        "lat":  41.43136,
        "lon":  2.183519,
        "adreca":  "Av. Meridiana, 400 E",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3768",
        "lat":  41.374791,
        "lon":  2.171084,
        "adreca":  "Avinguda del Paral·lel, 55",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3769",
        "lat":  41.405719,
        "lon":  2.19278,
        "adreca":  "Llacuna, 149",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3770",
        "lat":  41.436981,
        "lon":  2.191159,
        "adreca":  "Torras i Bages, 11",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3771",
        "lat":  41.392722,
        "lon":  2.146466,
        "adreca":  "Villarroel, 277 - Av. Diagonal",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3773",
        "lat":  41.393841,
        "lon":  2.156069,
        "adreca":  "Còrsega, 264 - Balmes",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3774",
        "lat":  41.387108,
        "lon":  2.17143,
        "adreca":  "Fontanella, 1 - Pl. Catalunya",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3775",
        "lat":  41.394294,
        "lon":  2.169688,
        "adreca":  "Bruc, 84 - Consell de Cent",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3776",
        "lat":  41.359949,
        "lon":  2.133299,
        "adreca":  "Ctra. Del Prat, 42 - Ciències",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3777",
        "lat":  41.407161,
        "lon":  2.138525,
        "adreca":  "Balmes, 422 - Castanyer",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3778",
        "lat":  41.392338,
        "lon":  2.132172,
        "adreca":  "Av.Sarrià, 126",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3779",
        "lat":  41.394184,
        "lon":  2.123801,
        "adreca":  "D\u0027Osi, 4 - Santa Amèlia",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3780",
        "lat":  41.413572,
        "lon":  2.143069,
        "adreca":  "Av. Vallcarca, 154",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3781",
        "lat":  41.423672,
        "lon":  2.179258,
        "adreca":  "Garcilaso, 204 - Manigua",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3782",
        "lat":  41.419931,
        "lon":  2.181425,
        "adreca":  "Pl. Maragall, 21 - Olesa",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3783",
        "lat":  41.375283,
        "lon":  2.130336,
        "adreca":  "Rambla Badal, 167 - Sants",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3784",
        "lat":  41.429405,
        "lon":  2.158544,
        "adreca":  "Lisboa, 9 - Santa Joana d\u0027Arc",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3785",
        "lat":  41.4424,
        "lon":  2.197355,
        "adreca":  "República Dominicana - Potosí",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3786",
        "lat":  41.38028,
        "lon":  2.18729,
        "adreca":  "Joan de Borbó, 12 - Maquinista",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3787",
        "lat":  41.40512,
        "lon":  2.20753,
        "adreca":  "Llull, 285 - Bac de Roda",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3788",
        "lat":  41.382386,
        "lon":  2.183673,
        "adreca":  "Pla de Palau, 21",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  160,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CCS Combo 2 · 160 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3789",
        "lat":  41.432541,
        "lon":  2.204752,
        "adreca":  "Carrer Fra Juníper Serra, 57",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3790",
        "lat":  41.402769,
        "lon":  2.19456,
        "adreca":  "Carrer Roc Boronat, 122",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3792",
        "lat":  41.409983,
        "lon":  2.204184,
        "adreca":  "Fluvià 102-118",
        "nom":  "",
        "carrer":  true,
        "endolls":  14,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           }
                       ]
    },
    {
        "id":  "3793",
        "lat":  41.380373,
        "lon":  2.139158,
        "adreca":  "carrer Puiggarí, 37",
        "nom":  "",
        "carrer":  true,
        "endolls":  6,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3794",
        "lat":  41.441242,
        "lon":  2.164861,
        "adreca":  "Via Favència, 21 (Mercat Canyelles)",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3795",
        "lat":  41.393732,
        "lon":  2.149179,
        "adreca":  "Av. Diagonal, 447 (lateral Mar)",
        "nom":  "",
        "carrer":  true,
        "endolls":  11,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           },
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3796",
        "lat":  41.395522,
        "lon":  2.153667,
        "adreca":  "Av. Diagonal, 508 (lateral Muntanya)",
        "nom":  "",
        "carrer":  true,
        "endolls":  10,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  10
                           }
                       ]
    },
    {
        "id":  "3797",
        "lat":  41.382161,
        "lon":  2.184037,
        "adreca":  "Pla de Palau, 19",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3798",
        "lat":  41.382081,
        "lon":  2.191611,
        "adreca":  "Pg. Salvat Papasseit, 3 - Ginebra",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3799",
        "lat":  41.407187,
        "lon":  2.218089,
        "adreca":  "Passeig Garcia i Faria - Josep Pla",
        "nom":  "",
        "carrer":  true,
        "endolls":  7,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3800",
        "lat":  41.389233,
        "lon":  2.161352,
        "adreca":  "Pl. Dr. Letamendi, 30-33 - Aragó",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3801",
        "lat":  41.381088,
        "lon":  2.142061,
        "adreca":  "Av. Josep Tarradellas, 1 - Numància",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3802",
        "lat":  41.38147,
        "lon":  2.129431,
        "adreca":  "Fígols, 6 - Jardins dels Doctors Dolsa",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3803",
        "lat":  41.408372,
        "lon":  2.202957,
        "adreca":  "Cristobal de Moura, 24 - Bac de Roda",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3804",
        "lat":  41.411564,
        "lon":  2.218659,
        "adreca":  "Rbla. Prim, 19 - Av. Diagonal, 2",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3805",
        "lat":  41.420061,
        "lon":  2.201705,
        "adreca":  "Rbla. Guipúscoa, 103 - Cantàbria",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3806",
        "lat":  41.396611,
        "lon":  2.200294,
        "adreca":  "Ciutat de Granada, 11 - Ptge. Mas de Roda",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3807",
        "lat":  41.388133,
        "lon":  2.107238,
        "adreca":  "Av. Esplugues, 52 - Eduard Toldrà",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3808",
        "lat":  41.397347,
        "lon":  2.119925,
        "adreca":  "Av. Josep Vicenç Foix, 86 Bis - Mendel",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3809",
        "lat":  41.434627,
        "lon":  2.148196,
        "adreca":  "Arquitecte Moragas, 31 - Av. Can Marcet",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3810",
        "lat":  41.390975,
        "lon":  2.196397,
        "adreca":  "Rosa Sensat, 14 - Av. d\u0027Icària, 145-147",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3811",
        "lat":  41.38495,
        "lon":  2.11611,
        "adreca":  "Pascual i Vila, 23 - Av. Diagonal",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3812",
        "lat":  41.406514,
        "lon":  2.200808,
        "adreca":  "Lope de Vega, 158-160 - Pere IV (Hotel ME)",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3813",
        "lat":  41.394501,
        "lon":  2.152312,
        "adreca":  "Av. Diagonal, 429 (lateral Mar)",
        "nom":  "",
        "carrer":  true,
        "endolls":  6,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  6
                           }
                       ]
    },
    {
        "id":  "3814",
        "lat":  41.396199,
        "lon":  2.158994,
        "adreca":  "Av. Diagonal, 387 (lateral mar) - Córsega",
        "nom":  "",
        "carrer":  true,
        "endolls":  6,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  6
                           }
                       ]
    },
    {
        "id":  "3815",
        "lat":  41.393227,
        "lon":  2.145783,
        "adreca":  "Av. Diagonal, 598 - Travessera de Gràcia",
        "nom":  "",
        "carrer":  true,
        "endolls":  8,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           }
                       ]
    },
    {
        "id":  "3816",
        "lat":  41.377444,
        "lon":  2.119479,
        "adreca":  "Pintor Tapiró 2-6 - Travessera de les Corts",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3817",
        "lat":  41.329694,
        "lon":  2.114526,
        "adreca":  "Aparcament Mercabarna",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Tipus 2 (Mennekes) · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3818",
        "lat":  41.414493,
        "lon":  2.172389,
        "adreca":  "Mas Casanovas, 69",
        "nom":  "",
        "carrer":  true,
        "endolls":  6,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3819",
        "lat":  41.38682,
        "lon":  2.128793,
        "adreca":  "c/ Europa 12",
        "nom":  "",
        "carrer":  true,
        "endolls":  7,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  3
                           }
                       ]
    },
    {
        "id":  "3820",
        "lat":  41.389851,
        "lon":  2.13795,
        "adreca":  "c/ Entença 335",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  160,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CCS Combo 2 · 160 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3822",
        "lat":  41.388337,
        "lon":  2.182322,
        "adreca":  "Pg. Picasso 8",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3823",
        "lat":  41.405375,
        "lon":  2.149945,
        "adreca":  "Av. Riera de Cassoles 61",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3824",
        "lat":  41.401771,
        "lon":  2.150899,
        "adreca":  "Av. Riera de Cassoles 6",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  22,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3825",
        "lat":  41.385698,
        "lon":  2.151854,
        "adreca":  "c/ Mallorca 100",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3826",
        "lat":  41.386127,
        "lon":  2.116763,
        "adreca":  "c/ John M. Keynes 2-10",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3827",
        "lat":  41.37592,
        "lon":  2.188999,
        "adreca":  "Pg. Joan de Borbó 68",
        "nom":  "",
        "carrer":  true,
        "endolls":  4,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "3828",
        "lat":  41.396865,
        "lon":  2.170576,
        "adreca":  "c/ Bailen 93",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  3.6,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3829",
        "lat":  41.430408,
        "lon":  2.145753,
        "adreca":  "c/ Pare Mariana 21",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3830",
        "lat":  41.365523,
        "lon":  2.138671,
        "adreca":  "c/ Química 2",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3831",
        "lat":  41.431529,
        "lon":  2.145112,
        "adreca":  "Pg. Vall d\u0027Hebron 186",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3832",
        "lat":  41.445583,
        "lon":  2.190641,
        "adreca":  "Pg. Torras i Bages 124",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3833",
        "lat":  41.393233,
        "lon":  2.202865,
        "adreca":  "c/ Salvador Espriu 97",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  160,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CCS Combo 2 · 160 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3834",
        "lat":  41.419497,
        "lon":  2.183953,
        "adreca":  "c/ Concepció Arenal 26",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3835",
        "lat":  41.397157,
        "lon":  2.183254,
        "adreca":  "c/ Ausiàs March 151",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           },
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3836",
        "lat":  41.346781,
        "lon":  2.143336,
        "adreca":  "C/ 60",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  22,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3837",
        "lat":  41.39777,
        "lon":  2.162852,
        "adreca":  "c/ Roger de Llúria 124",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  160,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 160 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3838",
        "lat":  41.419847,
        "lon":  2.201282,
        "adreca":  "c/ Cantàbria 28",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3839",
        "lat":  41.360357,
        "lon":  2.13812,
        "adreca":  "c/ Foneria 29",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3840",
        "lat":  41.384238,
        "lon":  2.132736,
        "adreca":  "c/ Can Bruixa 23",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3841",
        "lat":  41.43672,
        "lon":  2.18281,
        "adreca":  "Carrer Rosselló i Porcel, 9",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3842",
        "lat":  41.397066,
        "lon":  2.139762,
        "adreca":  "C/ Reina Victoria, 9",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  160,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CCS Combo 2 · 160 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3843",
        "lat":  41.428759,
        "lon":  2.193718,
        "adreca":  "c/ Virgili 10",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3845",
        "lat":  41.396449,
        "lon":  2.175186,
        "adreca":  "c/ Diputació 344",
        "nom":  "",
        "carrer":  true,
        "endolls":  5,
        "potenciaMax":  160,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CCS Combo 2 · 160 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3846",
        "lat":  41.408515,
        "lon":  2.161415,
        "adreca":  "c/ Legalitat 53",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3847",
        "lat":  41.395003,
        "lon":  2.131742,
        "adreca":  "c/ Nena Cases 24",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3848",
        "lat":  41.434304,
        "lon":  2.150387,
        "adreca":  "Av. / Can Marcet 18",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3849",
        "lat":  41.377934,
        "lon":  2.164265,
        "adreca":  "Ronda Sant Pau, 60",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "3850",
        "lat":  41.408302,
        "lon":  2.137039,
        "adreca":  "c/ Moragas 17",
        "nom":  "",
        "carrer":  true,
        "endolls":  2,
        "potenciaMax":  160,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 160 kW",
                               "quantitat":  2
                           }
                       ]
    },
    {
        "id":  "3851",
        "lat":  41.353902,
        "lon":  2.142997,
        "adreca":  "c/ Cisell 8",
        "nom":  "",
        "carrer":  true,
        "endolls":  3,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           }
                       ]
    },
    {
        "id":  "4534",
        "lat":  41.3886,
        "lon":  2.1983,
        "adreca":  "Av. Litoral, 34",
        "nom":  "Aparcament Ap. BSM - Litoral Port",
        "carrer":  false,
        "endolls":  20,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  12
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  8
                           }
                       ]
    },
    {
        "id":  "4536",
        "lat":  41.400388,
        "lon":  2.174006,
        "adreca":  "Av. Diagonal 338",
        "nom":  "",
        "carrer":  true,
        "endolls":  7,
        "potenciaMax":  50,
        "connectors":  [
                           {
                               "tipus":  "CCS Combo 2 · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "CHAdeMO · 50 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 22 kW",
                               "quantitat":  1
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  4
                           }
                       ]
    },
    {
        "id":  "4767",
        "lat":  41.409841,
        "lon":  2.174087,
        "adreca":  "C/ Castillejos, 328",
        "nom":  "Aparcament Ap. BSM - Avinguda Gaudi",
        "carrer":  false,
        "endolls":  23,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  13
                           },
                           {
                               "tipus":  "Schuko · 3.6 kW",
                               "quantitat":  10
                           }
                       ]
    },
    {
        "id":  "965990",
        "lat":  41.388057,
        "lon":  2.192509,
        "adreca":  "Carrer de Ramon Trias Fargas, 19B",
        "nom":  "Aparcament Ap. BSM - Ciutadella del Coneixement- Zoo",
        "carrer":  false,
        "endolls":  23,
        "potenciaMax":  7.2,
        "connectors":  [
                           {
                               "tipus":  "Schuko · 7.2 kW",
                               "quantitat":  23
                           }
                       ]
    }
];
