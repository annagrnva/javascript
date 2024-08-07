// const boxes = document.querySelectorAll(".box");

// const myFunc = (box) => {
// box.classList.add("red")
// }

// boxes.forEach(function (item) {
//   item.addEventListener("click", () => myFunc(item));
// })

const boxes = document.querySelectorAll(".box");

const myFunc = () => {

  boxes.forEach((box) => {
    box.classList.add("red");
  });

};

boxes.forEach(function (item) {
  item.addEventListener("click", myFunc);
});