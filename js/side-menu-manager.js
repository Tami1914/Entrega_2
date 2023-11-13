function initialize() {
  const HEADER_MENU_ICON = document.getElementById("header-menu-icon");
  HEADER_MENU_ICON.addEventListener("click", showSideMenu);
  const SIDE_MENU_CLOSE_ICON = document.getElementById("side-menu-close-icon");
  SIDE_MENU_CLOSE_ICON.addEventListener("click", closeSideMenu);
}

function showSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.style.visibility = "visible";
}

function closeSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.style.visibility = "hidden";
}

initialize();