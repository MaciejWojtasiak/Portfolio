//initialize AOS
AOS.init({
    offset: 300,
    duration: 1000,
    once: true
});

//menu
const menuBtn = document.querySelector('.menuBtn');
const nav = document.getElementById('navbar');
const a = nav.getElementsByTagName('a');

const links = document.querySelector('.links');
const navbar = document.getElementById("navbar");

Array.from(a).forEach(element => {
    element.addEventListener('click', function () {
        closeMenu();
    })
});

menuBtn.addEventListener('click', () => {

    if (menuBtn.firstChild.getAttribute('name') === 'menu-outline') {
        showMenu();
    } else {
        closeMenu();
    }
})

function showMenu() {
    links.classList.add('showLinks');
    navbar.classList.add('showMenu');
    menuBtn.firstChild.setAttribute('name', 'close-outline');
}

function closeMenu() {
    links.classList.remove('showLinks');
    navbar.classList.remove('showMenu');
    menuBtn.firstChild.setAttribute('name', 'menu-outline');
}


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").classList.add('showNavbar');
    } else {
        document.getElementById("navbar").classList.remove('showNavbar');
    }
}

window.onscroll = function () {
    scrollFunction();
};



const preload = document.querySelector('.preload');

preload.classList.add('show-preloader');
window.addEventListener('load', () => {
    preload.classList.remove('show-preloader');
});