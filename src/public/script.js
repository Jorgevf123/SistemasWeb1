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

// Función para alternar el menú de usuario
function toggleProfileMenu() {
    const menu = document.getElementById("profile-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Cerrar el menú cuando se haga clic fuera de él
window.addEventListener('click', function(event) {
    const menu = document.getElementById("profile-menu");
    const profileIcon = document.getElementById("profile-icon");
    if (!profileIcon.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
    });
    function highlightMuscle(muscle, redirectUrl) {
        // Quitar la clase activa de todos los elementos
        document.querySelectorAll('.muscle-part').forEach(part => {
            part.classList.remove('active');
        });
        
        // Añadir la clase activa al área seleccionada
        const selectedPart = document.querySelector(`.muscle-part.${muscle}`);
        selectedPart.classList.add('active');
        
        // Esperar un momento para que se vea el cambio de color y luego redirigir
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 300); // 300 ms de retraso para que se note el cambio de color
    }
    

// Selecciona todos los elementos de músculo y articulación en ambos SVGs
document.querySelectorAll('.muscle-map path, .joint-map path').forEach(element => {
    element.addEventListener('click', (event) => {
        const id = event.target.id;

        if (id) {
            window.location.href = `${id}.html`; // Redirige a la página de ejercicios
        }
    });
});