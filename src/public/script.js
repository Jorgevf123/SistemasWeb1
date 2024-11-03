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
function highlightMuscle(muscleId) {
    const redirectUrl = `ejercicios.html#${muscleId}`;

    // Quitar la clase activa de todos los elementos
    document.querySelectorAll('.bodymap').forEach(part => {
        part.classList.remove('active');
    });

    // Añadir la clase activa al área seleccionada
    const selectedPart = document.getElementById(muscleId);
    if (selectedPart) {
        selectedPart.classList.add('active');

        // Redirigir a la URL después de un breve retraso
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 300); // 300 ms de retraso para que se note el cambio de color
    } else {
        console.error("Error: La parte seleccionada no existe.");
    }
}

// Espera a que el documento esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todas las partes del SVG que deseas hacer clic
    const muscleParts = document.querySelectorAll(".bodymap g");

    muscleParts.forEach(part => {
        part.addEventListener("click", () => {
            const muscleId = part.id; // Obtiene el ID del músculo (debe coincidir con el ID en el HTML)
            highlightMuscle(muscleId); // Llama a la función de redirección
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



// Objeto para manejar contadores de usuario por sección
let userCounter = {
    shoulders: 1,
    chest: 1
};
// Función para añadir un comentario al chat
function addComment(section) {
    const input = document.getElementById(`comment-input-${section}`);
    const chat = document.getElementById(`chat-${section}`);
    const commentText = input.value.trim();

    if (commentText) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>Usuario  ${userCounter[section]}:</strong> ${commentText}`;
        chat.appendChild(p);
        input.value = ""; // Limpia el campo de texto
        chat.scrollTop = chat.scrollHeight; // Desplaza el chat al último comentario
        userCounter[section]++; // Incrementa el contador de usuario para esa sección
    } else {
        alert("Por favor, escribe un comentario.");
    }
}

// Función para borrar todos los comentarios del chat
function deleteComments(section) {
    const chat = document.getElementById(`chat-${section}`);
    chat.innerHTML = ""; // Limpia todos los comentarios
    alert("Todos los comentarios han sido borrados.");
    userCounters[section] = 1; // Reinicia el contador de usuario para esa sección
}

// Función para borrar el ejercicio completo
function deleteExercise() {
    const exerciseContainer = document.getElementById("exercise-container");
    if (exerciseContainer) {
        exerciseContainer.remove(); // Elimina el contenedor del ejercicio
        alert("El ejercicio ha sido eliminado.");
    }
}

// Conectar los botones con las funciones
document.getElementById("delete-exercise-button").addEventListener("click", deleteExercise);