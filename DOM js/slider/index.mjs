const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const imgs = document.querySelectorAll(".img-size")

let slideNumber = 1;

function showSlide() {

 imgs.forEach(img => {
  img.classList.add("img-block")
 });
    
  
  
}

right.addEventListener("click", () => {
  slideNumber + 1 

  showSlide(slideNumber)
})

