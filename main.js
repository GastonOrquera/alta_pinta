let nav = document.querySelector('nav');
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});



ScrollReveal().reveal('.box_producto', {
    origin: 'right',
    distance: '10px',
    duration: 800,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 400
});

ScrollReveal().reveal('h2', {
    origin: 'top',
    distance: '14px',
    duration: 600,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 400
});