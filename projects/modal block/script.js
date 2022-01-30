const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')

openModal.addEventListener('click', function(){
    modal.classList.add('active')
})

closeModal.addEventListener('click', function(){
    modal.classList.remove('active')
})