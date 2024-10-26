const left = document.querySelector(".left");
const right = document.querySelector(".right");
const imgWrapper = document.querySelectorAll(".img-wrapper");
const imgs = document.querySelectorAll(".img")
const buttons = document.querySelectorAll(".button")

let slideNumber = 0;

imgs[slideNumber].classList.add('activeImg');
buttons[slideNumber].classList.add('activeBtns');

right.addEventListener("click", () => {

buttons[slideNumber].classList.remove('activeBtns');
  
  slideNumber++
  if (slideNumber >= imgs.length) {
    slideNumber = 0
  }
  imgs.forEach(img => {
    img.classList.remove("activeImg")
  });
    imgs[slideNumber].classList.add("activeImg")
  buttons[slideNumber].classList.add('activeBtns');


});

left.addEventListener("click", () => {

buttons[slideNumber].classList.remove('activeBtns');

  slideNumber--
  if (slideNumber < 0 ) {
    slideNumber = imgs.length - 1
  }
  imgs.forEach(img => {
    img.classList.remove("activeImg")
  });
  
  imgs[slideNumber].classList.add("activeImg")
  buttons[slideNumber].classList.add('activeBtns');

});
 


