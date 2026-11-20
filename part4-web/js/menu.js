/*
  Càrrega Elèctrica · Menú desplegable per a mòbil.
  Obre i tanca el menú principal en pantalles petites.
*/

function alternaMenu() {
  const boto = document.getElementById("boto-menu");
  const menu = document.getElementById("menu-principal");
  const obert = menu.classList.toggle("obert");
  boto.setAttribute("aria-expanded", obert ? "true" : "false");
}

document.getElementById("boto-menu").addEventListener("click", alternaMenu);
