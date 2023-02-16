// Use Select Function
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true
       
    });

});








const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open')
});



//Scroll Revel

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left', 
    duration: 1000,
    distance:'25rem',
    delay:300
});


sr.reveal('.animate-right', {
    origin: 'right', 
    duration: 2000,
    distance:'25rem',
    delay:400
});



sr.reveal('.animate-top', {
    origin: 'top', 
    duration: 1000,
    distance:'25rem',
    delay:600
});


sr.reveal('.animate-bottom', {
    origin: 'bottom', 
    duration: 1000,
    distance:'25rem',
    delay:600
});


//owal carousel


