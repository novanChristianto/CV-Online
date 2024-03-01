// const hamburgerToggle = document.getElementById('hamburger-toggle');
const menu = document.getElementById('menu');

document.getElementById('hamburger-toggle').addEventListener('click',openNav);
function openNav(){
    menu.classList.toggle("hidden");
    
}