const left = document.querySelector(".left");
const right = document.querySelector(".right");
const imgs = document.querySelectorAll(".img")
const buttons = document.querySelectorAll(".buttonCircle")

let slideNumber = 0;

imgs[slideNumber].classList.add('activeImg');
buttons[slideNumber].classList.add('activeBtns');

const next = () => {
  buttons[slideNumber].classList.remove('activeBtns');
  imgs[slideNumber].classList.remove("activeImg");

  slideNumber++
  if (slideNumber >= imgs.length) {
    slideNumber = 0;
  };

  imgs[slideNumber].classList.add("activeImg");
  buttons[slideNumber].classList.add('activeBtns');
};

const previous = () => {
  buttons[slideNumber].classList.remove('activeBtns');
  imgs[slideNumber].classList.remove("activeImg")

  slideNumber--
  if (slideNumber < 0) {
    slideNumber = imgs.length - 1
  };

  imgs[slideNumber].classList.add("activeImg")
  buttons[slideNumber].classList.add('activeBtns');
};

right.addEventListener("click", next);

left.addEventListener("click", previous);

buttons.forEach(button => {
  button.addEventListener('click', () => {

    buttons[slideNumber].classList.remove('activeBtns');
    imgs[slideNumber].classList.remove("activeImg");
    
    slideNumber++;
    slideNumber--;

    imgs[slideNumber].classList.add("activeImg");
    buttons[slideNumber].classList.add('activeBtns');
  })
});
