// const section_hero = document.getElementById("hero");
// section_hero.style.height = window.innerHeight - 50 + "px";

const tumbler = document.getElementById("theme");

const header = document.getElementById('header');

tumbler.addEventListener('click', function (){
    document.documentElement.setAttribute("theme", tumbler.checked ? 'dark': '')
})