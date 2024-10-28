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

