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

// Función para alternar la visibilidad del menú de perfil
function toggleProfileMenu() {
  const profileMenu = document.getElementById('profile-menu');
  profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}

// Cerrar el menú de perfil al hacer clic fuera de él
window.addEventListener('click', function(event) {
  const profileMenu = document.getElementById('profile-menu');
  const profileIcon = document.getElementById('profile-icon');

  if (event.target !== profileMenu && event.target !== profileIcon && !profileMenu.contains(event.target)) {
    profileMenu.style.display = 'none';
  }
});

