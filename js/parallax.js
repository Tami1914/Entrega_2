function initialize() {
  window.addEventListener("scroll", moveImagesWhenUserScrolls)
}

function moveImagesWhenUserScrolls() {
  const SCROLL_POSITION = window.scrollY;

  const PARTY = document.getElementById("party");
  PARTY.style.left = SCROLL_POSITION + "px";

  const DJ = document.getElementById("dj");
  DJ.style.right = SCROLL_POSITION + "px";

}

initialize();