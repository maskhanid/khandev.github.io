// navbar.js
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function initNavbar() {
    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.addEventListener('click', toggleMenu);
}