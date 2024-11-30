// Simulación del tipo de usuario (admin o cliente)
// En un caso real, podrías obtener esta información de un servidor o una base de datos.
const userType = 'admin'; // Cambia a 'cliente' para simular un usuario no admin

/*window.onload = function() {
	const adminContent = document.getElementById('admin-content');
	const userContent = document.getElementById('user-content');

	if (userType === 'admin') {
		adminContent.classList.remove('hidden');
	} else {
		userContent.classList.remove('hidden');
	}
};
*/
// Función para alternar el menú de usuario
function toggleProfileMenu() {
	const menu = document.getElementById("profile-menu");
	menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
/*
	// Cerrar el menú cuando se haga clic fuera de él
window.addEventListener('click', function(event) {
	const menu = document.getElementById("profile-menu");
	const profileIcon = document.getElementById("profile-icon");
	if (!profileIcon.contains(event.target) && !menu.contains(event.target)) {
		menu.style.display = "none";
	}
});
*/
// Función para resaltar el músculo y redirigir
function highlightMuscle(muscleId) {
    const redirectUrl = `/ejercicios#${muscleId}`;

    document.querySelectorAll('.bodymap path').forEach(part => {
        part.classList.remove('active');
    });

    const selectedPart = document.getElementById(muscleId);
    if (selectedPart) {
        selectedPart.classList.add('active');

        setTimeout(() => {
            window.location.href = redirectUrl;
            setTimeout(() => {
                document.getElementById(muscleId)?.scrollIntoView({ behavior: 'smooth' });
            }, 300); // Ajusta el tiempo si es necesario
        }, 300);
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
	chest: 1,
	quads: 1,
	lats: 1,
	triceps: 1,
	hamstrings: 1,
	calves: 1
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
	userCounter[section] = 1; // Reinicia el contador de usuario para esa sección
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
document.addEventListener('DOMContentLoaded', () => {
	const deleteButton = document.getElementById("delete-exercise-button");
	if (deleteButton) {
		deleteButton.addEventListener("click", deleteExercise);
	}
});

// Para editar perfil
document.addEventListener('DOMContentLoaded', () => {
	// Redirecciona al hacer clic en "Correo electrónico" en el menú de perfil
	const emailButton = document.querySelector('.profile-menu button:nth-child(1)');
	if (emailButton) {
		emailButton.addEventListener('click', function() {
			window.location.href = 'editar_perfil.html';
		});
	}
});


document.addEventListener('DOMContentLoaded', () => {

	const carouselItems = document.querySelectorAll('.carousel-item');
	carouselItems.forEach(item => {
		const likeButton = item.querySelector('.likeButton');
		const dislikeButton = item.querySelector('.dislikeButton');
		const likeCount = item.querySelector('.likeCount');
		const dislikeCount = item.querySelector('.dislikeCount');// Inicializamos los contadores en el DOM
		likeCount.textContent = "0";
		dislikeCount.textContent = "0";
		// Añadimos el evento para incrementar el contador de 'like'
		likeButton.addEventListener('click', () => {
			let likes = parseInt(likeCount.textContent) || 0;
			likes++;
			likeCount.textContent = likes;
			likeButton.classList.add('liked');
		});
		// Añadimos el evento para incrementar el contador de 'dislike'
		dislikeButton.addEventListener('click', () => {
			let dislikes = parseInt(dislikeCount.textContent) || 0;
			dislikes++;
			dislikeCount.textContent = dislikes;
			dislikeButton.classList.add('disliked');
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const starIcons = document.querySelectorAll('.star-icon');

	starIcons.forEach(starIcon => {
		starIcon.addEventListener('click', () => {
			starIcon.classList.toggle('active');
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const itemsPerPage = 4; // Cuatro elementos por página
	const carouselGrid = document.querySelector('.container-carousel');
	const carouselItems = document.querySelectorAll('.recomendacion')
	const paginationButtonsContainer = document.querySelector('.pagination-buttons');
	let currentIndex = 0;

	// Crear botones de paginación
	const totalPages = Math.ceil(carouselItems.length / itemsPerPage);
	for (let i = 0; i < totalPages; i++) {
		const button = document.createElement('button');
		button.textContent = i + 1;
		button.addEventListener('click', () => goToPage(i));
		paginationButtonsContainer.appendChild(button);
	}

	// Función para ir a la página seleccionada
	function goToPage(pageIndex) {
		currentIndex = pageIndex * itemsPerPage;
		updateCarousel();
		updateActiveButton(pageIndex);
	}

	// Actualizar la posición del carrusel
	function updateCarousel() {
		const offset = -(currentIndex * 25);
		carouselGrid.style.transform = `translateX(${offset}%)`;
	}

	// Actualizar botón activo
	function updateActiveButton(activeIndex) {
		const buttons = paginationButtonsContainer.querySelectorAll('button');
		buttons.forEach((button, index) => {
			button.classList.toggle('active', index === activeIndex);
		});
	}

	// Inicializar el carrusel
	goToPage(0);
});
// Función para abrir el modal
function openModal() {
	document.getElementById('modal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
	document.getElementById('modal').style.display = 'none';
}

// Cerrar el modal cuando se haga clic fuera de la ventana modal
window.onclick = function(event) {
	var modal = document.getElementById('modal');
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

/*document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('comment-form').addEventListener('submit', function(e) {
		e.preventDefault();

		const commentInput = document.getElementById('comment-input');
		const commentText = commentInput.value.trim();

		if (commentText) {
			const commentElement = document.createElement('div');
			commentElement.classList.add('comment');
			commentElement.innerHTML = `<p>${commentText}</p>`;

			document.getElementById('comments-container').appendChild(commentElement);

			commentInput.value = '';
		}
	});

});
*/
/* document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('imagen_articulo').addEventListener('change', function(event) {
    	const file = event.target.files[0];
		const preview = document.getElementById('image-preview');

    	 if (file) {
        	const reader = new FileReader(); // Instanciamos el FileReader
        // Cuando la imagen se cargue, mostrarla
      	  	reader.onload = function(e) {
        	    preview.src = ""; // Asigna el Data URL generado al src de la imagen
            	preview.style.display = 'block'; // Muestra la imagen en el contenedor
  	      };

        // Lee el archivo como un Data URL (esto convierte la imagen en una cadena que se puede mostrar en el navegador)
    	    reader.readAsDataURL(file);
	    } else {
        // Si no se selecciona archivo, ocultar la previsualización
    	    preview.src = '';
        	preview.style.display = 'none';
    	}
	});
});
*/
