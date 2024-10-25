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
