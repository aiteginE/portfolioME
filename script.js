const text = "Я Начинающий Программист...";
const h1 = document.getElementById('h1');
let index = 0;
function showText(){
    h1.innerText = text.slice(0, index)
    index++
    if (index > text.length) {
        index = 0
    }
}
setInterval(showText, 260);



// Класс для шапки
let header = document.querySelector(".header")
window.addEventListener("scroll", function() {
    let scrolPos = window.scrollY;
    if(scrolPos > 550){
        header.classList.add('show')
    }
    else {
        header.classList.remove('show')
    }
});