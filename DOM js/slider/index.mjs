const left = document.querySelector(".left");
const right = document.querySelector(".right");
const imgWrapper = document.querySelectorAll(".img-wrapper");
const imgs = document.querySelectorAll(".img")

let slideNumber = 0;
imgs[slideNumber].classList.add('activeImg');

right.addEventListener("click", () => {

  slideNumber++
  if (slideNumber >= imgs.length) {
    slideNumber = 0
  }
  imgs.forEach(img => {
    img.classList.remove("activeImg")
  });

  imgs[slideNumber].classList.add("activeImg")
});

left.addEventListener("click", () => {

  slideNumber--
  if (slideNumber < 0 ) {
    slideNumber = imgs.length - 1
  }
  imgs.forEach(img => {
    img.classList.remove("activeImg")
  });
  
  imgs[slideNumber].classList.add("activeImg")

});
