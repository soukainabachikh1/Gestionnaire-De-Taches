



const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
const closeToggle = document.querySelectorAll('.close');
const linkColor = document.querySelectorAll('.nav-link');

// Show Nav Bar
toggle.onclick = function () {
    nav.classList.toggle('show-nav')
}

// Remove Menu Bar


function linkAction() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-nav')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
closeToggle.forEach(n => n.addEventListener('click', linkAction));

// Active Link 


function colorLink() {
    if (linkColor) {
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink))

