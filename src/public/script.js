// Simulación del tipo de usuario (admin o cliente)
// En un caso real, podrías obtener esta información de un servidor o una base de datos.
const userType = 'admin'; // Cambia a 'cliente' para simular un usuario no admin

window.onload = function() {
    const adminContent = document.getElementById('admin-content');
    const userContent = document.getElementById('user-content');

    if (userType === 'admin') {
        adminContent.classList.remove('hidden');
    } else {
        userContent.classList.remove('hidden');
    }
};
let currentIndex = 0;

function moveSlide(step) {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex += step;

    // Si el índice es menor a 0, vamos a la última imagen
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Si el índice es mayor al número de imágenes, volvemos a la primera
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Desplazamos el contenedor de las imágenes
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
