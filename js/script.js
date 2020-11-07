// Mobile menu:
let burgerBtn = document.querySelector('.burger--menu');
let menu = document.querySelector('.mobile--menu');
let closeBtn = document.querySelector('.close--btn');

burgerBtn.onclick = function() {
    menu.classList.add('show--menu');
}
closeBtn.onclick = function() {
    menu.classList.remove('show--menu');
}

// Show modal:
let modal = document.querySelector('.modal');

function openModal() {
    modal.classList.add('show--modal');
}

function closeModal() {
    modal.classList.remove('show--modal');
}