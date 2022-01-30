let value = document.getElementById("value");
btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let currentClass = event.target.classList;
    if (currentClass.contains("plus")) {
      count++;
    } else if (currentClass.contains("minus")) {
      count--;
    } else if (currentClass.contains("reset")) {
      count = 0;
    }
    value.innerHTML = count;
    if (count > 0) {
      value.style.color = "black";
    } else if (count < 0) {
      value.style.color = "white";
    }
  });
});

// plus.addEventListener("click", function () {
//   count++;
//   value.innerHTML = count;
// });
// minus.addEventListener("click", function () {
//   count--;
//   value.innerHTML = count;
// });
// reset.addEventListener("click", function () {
//   count = 0;
//   value.innerHTML = count;
// });
