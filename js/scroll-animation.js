function reveal(){
  let REVEALS = document.querySelectorAll(".reveal");

  for (let i = 0; i < REVEALS.length; i++){
    let WINDOW_HEIGHT = window.innerHeight;
    let ELEMENT_TOP = REVEALS[i].getBoundingClientRect().top;
    let ELEMENT_VISIBLE = 150;

    if(ELEMENT_TOP < WINDOW_HEIGHT - ELEMENT_VISIBLE){
      REVEALS[i].classList.add("active");
    }
    else{
      REVEALS[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);