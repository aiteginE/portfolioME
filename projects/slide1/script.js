// let div = document.querySelector('#slide')
// let div = document.querySelector('#slide active')
// let div = document.querySelector('#slide')
// let div = document.querySelector('#slide')
// let div = document.querySelector('#slide')
// let container = []

// slide.addEventListener('click', function(){
//     let 
// })

const sliders = document.querySelectorAll('.slide')
console.log(sliders)
for (let slider of sliders ) {
    console.log(slider)
    slider.addEventListener('click', function(){
        deleteActiveClass()
        slider.classList.add("active")
    })
}
function deleteActiveClass(){
    for (let item of sliders){
        item.classList.remove('active')
    }
}