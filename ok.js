let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        let height = sec.offsetHeight;  // Correction : offsetheight -> offsetHeight

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {  // Correction : navlinks -> navLinks et links -> link
                link.classList.remove('active');  // Correction : relive -> remove
                document.querySelector('header nav [href*=' + id + ']').classList.add('active');  // Correction : syntaxe de la sélection du lien actif
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
