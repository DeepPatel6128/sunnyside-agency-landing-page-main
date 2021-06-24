const nav = document.querySelector('#navbar')
const navBox = document.querySelector('#nav-cont')
const navDesign = document.querySelector('#nav-design')
const heading = document.querySelector('#top-header')
const arrow = document.querySelector('.arrow')
const menu = document.querySelector('.fas')

menu.addEventListener('click', ()=>{
    navBox.classList.toggle('show-nav');
    nav.classList.toggle('show-nav');
    navDesign.classList.toggle('show-nav');
    arrow.classList.toggle('change-z');
    heading.classList.toggle('change-z');
})
