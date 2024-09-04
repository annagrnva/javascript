const boxes = document.querySelector(".boxes");

boxes.addEventListener("click", function (event) {
  //  console.log(event.target)
  if(event.target.classList.contains("black")) {
    event.target.classList.remove("black")
        } else {
          event.target.classList.add("black")
        }
})


