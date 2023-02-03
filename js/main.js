// fonction burgerMenu
function burgerMenu() {
    const toggleButton = document.querySelector('.clickMm'); // declaration variable qui va chercher une class
    toggleButton.addEventListener('click', (event) => {  // click sur la class
        event.preventDefault(); 
        const body = document.querySelector('body'); // déclaration variable qui va chercher la class body
        if (body.classList.contains('menu-show')) {   // condition si class menu-show
            body.classList.remove('menu-show'); // alors suppression class menu-show
            document.querySelector('#colorlib-main-nav .clickMm').classList.remove('show'); // alors supp class show
        } else {   // sinon  
            body.classList.add('menu-show'); // ajout class
            setTimeout(() => { // durée pour affichage
                document.querySelector('#colorlib-main-nav .clickMm').classList.add('show'); // ajout class show
            }, 900); // temps 900
        }
    });
}

// slider img homepage
var slides = document.querySelectorAll('.slideshow img');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'inactive';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'active';
}

// load dom
document.addEventListener('DOMContentLoaded', function () {
    // menu burger
    burgerMenu();
    // slider home page
    nextSlide();
});
