function initialize(){
  const SIDE_MENU_OPEN = document.getElementById("side-menu-open");
  SIDE_MENU_OPEN.addEventListener("click", openNav);
  const SIDE_MENU_CLOSE = document.getElementById("side-menu-close");
  SIDE_MENU_CLOSE.addEventListener("click", closeNav);

}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

initialize();