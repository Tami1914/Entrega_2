let hideTextButtoms = document.getElementsByClassName('btn btn-primary read-more-btns');

console.log("hola holita 1")
console.log(hideTextButtoms);

// let hideText = document.getElementById('hide-text');

let hideTexts = document.getElementsByClassName("hide hide-texts");

console.log("hola holita")
console.log(hideTexts);

for (let i = 0; i < hideTexts.length; i++) {
  hideTextButtoms[i].addEventListener('click', function() { toggleText(hideTexts[i]) });
}



function toggleText(elementToToggle) {
  console.log("holota")
  console.log(elementToToggle)
  elementToToggle.classList.toggle('show');

  // if(elementToToggle.classList.contains('show')) {
  // //   hideTextButtom.innerHTML = 'Read Less';
  // // }
  // else{
  //   hideTextButtom.innerHTML = 'Read More';
  // }
}