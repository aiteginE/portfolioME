let button = document.querySelector('#button')
let input = document.querySelector('#text')
let list = document.querySelector('.list')
let todoList = []

button.addEventListener('click', function(){
    let newTodo = {
        text: input.value,
        checked : false
    }
    todoList.push(newTodo)
    showText()
})
function showText(){
    let li = ''
    for (let i in todoList){
        li += `<li><input type='checkbox'>${todoList[i].text}</li>`
    }
    list.innerHTML = li
}