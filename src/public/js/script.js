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

// Función para borrar todos los comentarios del chat en ejercicios predefinidos
function deleteComments(section) {
	const chat = document.getElementById(`chat-${section}`);
	if (chat) {
		chat.innerHTML = ""; // Limpia todos los comentarios
		alert("Todos los comentarios han sido borrados.");
		userCounter[section] = 1; // Reinicia el contador de usuario para esa sección
	}
}

// Función para borrar todos los comentarios de un ejercicio publicado
function deleteCommentsForPublished(ejercicioId) {
	if (confirm("¿Estás seguro de borrar todos los comentarios?")) {
		const form = document.createElement("form");
		form.method = "POST";
		form.action = "/ejercicios/borrar-comentarios";

		const input = document.createElement("input");
		input.type = "hidden";
		input.name = "ejercicioId";
		input.value = ejercicioId;

		form.appendChild(input);
		document.body.appendChild(form);
		form.submit();
	}
}

// Función para borrar el ejercicio completo en ejercicios predefinidos
function deleteExercise() {
	const exerciseContainer = document.getElementById("exercise-container");
	if (exerciseContainer) {
		exerciseContainer.remove(); // Elimina el contenedor del ejercicio
		alert("El ejercicio ha sido eliminado.");
	}
}

// Función para borrar un ejercicio publicado
function deletePublishedExercise(ejercicioId) {
	if (confirm("¿Estás seguro de borrar este ejercicio?")) {
		const form = document.createElement("form");
		form.method = "POST";
		form.action = "/ejercicios/borrar-ejercicio";

		const input = document.createElement("input");
		input.type = "hidden";
		input.name = "ejercicioId";
		input.value = ejercicioId;

		form.appendChild(input);
		document.body.appendChild(form);
		form.submit();
	}
}

// Conectar los botones con las funciones
document.addEventListener("DOMContentLoaded", () => {
	// Borrado para ejercicios predefinidos
	const deleteButton = document.getElementById("delete-exercise-button");
	if (deleteButton) {
		deleteButton.addEventListener("click", deleteExercise);
	}

	// Borrado dinámico para ejercicios publicados
	const publishedDeleteButtons = document.querySelectorAll(".delete-published-exercise");
	publishedDeleteButtons.forEach((button) => {
		button.addEventListener("click", () => {
			deletePublishedExercise(button.dataset.ejercicioId);
		});
	});

	const publishedCommentDeleteButtons = document.querySelectorAll(".delete-published-comments");
	publishedCommentDeleteButtons.forEach((button) => {
		button.addEventListener("click", () => {
			deleteCommentsForPublished(button.dataset.ejercicioId);
		});
	});
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
		const dislikeCount = item.querySelector('.dislikeCount');
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
		starIcon.addEventListener('click', async () => {
			const userId = document.getElementById('userId').value;
			const articleId = starIcon.dataset.id;
			const isActive = starIcon.classList.toggle('active');

			const url = isActive ? '/api/favoritos/add' : '/api/favoritos/remove';

			try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        articleId: articleId,
                        userId
                    })
				});
				const result = await response.json();
                if (!response.ok) {
                    throw new Error(result.error || 'Error al actualizar favoritos');
                }
				console.log(result.message);
            } catch (error) {
                console.error(error.message);
            }
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

const imagenArticuloInput = document.getElementById('imagen_articulo');
    const imagePreview = document.getElementById('image-preview');
    
    imagenArticuloInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block'; // Mostrar la imagen
            }
            
            reader.readAsDataURL(file);
        }
	}); 
