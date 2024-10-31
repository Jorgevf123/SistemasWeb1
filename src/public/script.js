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

// Función para resaltar el músculo y redirigir
function highlightMuscle(muscle, redirectUrl) {
    // Quitar la clase activa de todos los elementos
    document.querySelectorAll('.bodymap').forEach(part => {
        part.classList.remove('active');
    });

    // Añadir la clase activa al área seleccionada
    const selectedPart = document.querySelector(`.bodymap#${muscle}`);
    if (selectedPart) {
        selectedPart.classList.add('active');

        // Esperar un momento para que se vea el cambio de color y luego redirigir
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 300); // 300 ms de retraso para que se note el cambio de color
    } else {
        console.error("Error: La parte seleccionada no existe.");
    }
}

// Espera a que el documento esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Asegúrate de esperar a que el SVG cargue
    const svgObject = document.getElementById("muscleMap");

    // Selecciona todas las partes que deseas colorear
    const muscleParts = svgObject.querySelectorAll(".bodymap");

    muscleParts.forEach(part => {
        part.addEventListener("click", () => {
            const muscle = part.id; // Obtiene el ID del músculo
            const redirectUrl = `ejercicios.html#${muscle}`; // Forma la URL de redireccionamiento
            highlightMuscle(muscle, redirectUrl); // Llama a la función de resaltar y redirigir
        });

        // Opcional: cambia de color al pasar el cursor
        part.addEventListener("mouseover", () => {
            part.style.fill = "red"; // Color al pasar el cursor
        });

        part.addEventListener("mouseout", () => {
            part.style.fill = "black"; // Color original al salir del cursor
        });
    });
});



