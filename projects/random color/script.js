const colors = ["white", "yellow", "red", "green"];
const btnColor = document.querySelector(".click");
const colorName = document.querySelector('.name');

btnColor.addEventListener("click", function () {
  const number = getRandomNumber();
  document.body.style.backgroundColor = `${colors[number]}`;
  colorName.innerHTML = colors[number]
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
