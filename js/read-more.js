let hideTextButtoms = document.getElementsByClassName('btn btn-primary read-more-btns');

let hideTexts = document.getElementsByClassName("hide hide-texts");

for (let i = 0; i < hideTexts.length; i++) {
  hideTextButtoms[i].addEventListener('click', function () { toggleText(hideTexts[i]); });
}

function toggleText(elementToToggle) {
  elementToToggle.classList.toggle('show');
}