let burgerBtn = document.querySelector('.burger--menu');
let menu = document.querySelector('.mobile--menu');
let closeBtn = document.querySelector('.close--btn');

burgerBtn.onclick = function() {
    menu.classList.add('show--menu');
}
closeBtn.onclick = function() {
    menu.classList.remove('show--menu');
}