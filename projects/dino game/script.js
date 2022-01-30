//console.log(' Hello World!')
//console.log(85+5*5-7)

// alert('Do u want to play?')
// confirm('Ты голоден?')
// ПЕРЕМЕННЫЕ
/*var cat = {
    name: 'Leao',
    age: 85,
    isAngry: true
}
console.log(cat.name, cat.age)

var dog = {
    name: 'Rex',
    age: 7,
    isAngry: true
}
console.log(dog.name, dog.age)*/
//DOM - Document
let dino = document.getElementById("dino")
let cactus = document.getElementById("kaktus")
// console.log(dino)
document.addEventListener("keydown", function(){
    jump();
})

function jump(){
    if (dino.classList != 'jump') {
        dino.classList.add('jump')

    }
    setTimeout(function(){
        dino.classList.remove('jump')
    },300)
}
let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let kaktusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    console.log(dinoTop, kaktusLeft)
    if (kaktusLeft < 20 && kaktusLeft > 0 && dinoTop >=200 ){
        alert("GAME OVER")
    }
}, 10)










// VAR
/* var Legenda = 78
console.log(Legenda)
Legenda=20
console.log(Legenda) 

//CONST
const text = 'Здесь какой-то текст будет'
Text = 85
console.log(text) 

//LET
let button ='btn'
button='Button'
console.log(button) */