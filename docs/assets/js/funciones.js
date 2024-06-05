$(document).ready(function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('#navbarNav');

    hamburger.addEventListener('click', function() {
        if (mobileMenu.classList.contains('show')) {
            $(mobileMenu).collapse('hide');
        } else {
            $(mobileMenu).collapse('show');
        }
    });

    // Función para iniciar la animación de las estrellas
    $('.fa-star').each(function(index) {
        // Iniciar la animación de cada estrella
        animateStar($(this));
    });

    // Activar carrusel de Bootstrap con una transición rápida
    $('#myCarousel').carousel({
        interval: 2000, // Cambia la imagen cada 2 segundos
        ride: 'carousel'
    });

    // Configurar duración de la transición
    $('.carousel').carousel('dispose').carousel({
        interval: 2000, // Intervalo de tiempo entre imágenes
        ride: 'carousel',
        pause: 'hover',
        wrap: true
    });

    // Cambiar la duración de la transición (en milisegundos)
    $('.carousel .carousel-item').css({
        'transition-duration': '0.5s' // Transición de 0.5 segundos
    });
});

// Función para animar cada estrella de manera independiente
function animateStar(starElement) {
    var duration = Math.random() * 1000 + 500; // Duración entre 0.5 y 1.5 segundos
    var delay = Math.random() * 500; // Retraso entre 0 y 0.5 segundos en milisegundos

    // Animación inicial de la estrella
    function animate() {
        starElement.css('transition', 'transform ' + duration + 'ms ease'); // Configurar la transición
        starElement.css('transform', 'translateY(-10px)'); // Mover hacia arriba

        // Revertir la animación después de un tiempo
        setTimeout(function() {
            starElement.css('transition', 'transform ' + duration + 'ms ease'); // Configurar la transición
            starElement.css('transform', 'translateY(0)'); // Volver a la posición original

            // Llamar recursivamente a la función animate() después de completar la animación
            setTimeout(animate, duration);
        }, duration);
    }

    // Iniciar la animación después de un retraso inicial
    setTimeout(animate, delay);
}