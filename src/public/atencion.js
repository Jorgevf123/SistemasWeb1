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

