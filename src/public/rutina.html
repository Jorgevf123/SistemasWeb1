<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rutinas</title>
  <link rel="stylesheet" href="estilos.css">
  <link rel="stylesheet" href="estilorutina.css">
  <link rel="stylesheet" href="atencion.css"> <!-- Asegúrate de tener estos estilos -->
</head>
<body>
<<<<<<< HEAD

  <!-- Barra de navegación -->
  <header>
    <nav>
      <ul>
        <li><a href="index.html">Gymanual</a></li>
        <li><a href="ejercicios.html">Ejercicios</a></li>
        <li><a href="conocenos.html">Conócenos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
      <div class="header-right">
        <div class="search-bar">
          <input type="text" placeholder="Buscar...">
          <button type="submit">Buscar</button>
        </div>
        <div class="user-profile" id="profile-icon" onclick="toggleProfileMenu()">
          <img src="avatar.webp" alt="Foto de perfil" class="profile-pic">
        </div>
        <div class="profile-menu" id="profile-menu">
          <p class="username">admin</p>
          <button onclick="window.location.href='editar_perfil.html'">Cambiar Credenciales</button>
          <button onclick="window.location.href='ejercicios_supervisar.html'">Ejercicios a supervisar</button>
          <button onclick="window.location.href='atclient.html'">Atención al cliente</button> <!-- Redirección añadida -->
          <button>Cerrar cuenta</button>
          <button onclick="window.location.href='gestion_usuarios.html'">Gestión de usuarios</button>
          <button>Términos y condiciones</button>
        </div>
      </div>
    </nav>
  </header>
=======
  <body>
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Gymanual</a></li>
                    <li><a href="ejercicios.html">Ejercicios</a></li>
                    <li><a href="conocenos.html">Conócenos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
                <div class="header-right">
                    <div class="search-bar">
                        <input type="text" placeholder="Buscar...">
                        <button type="submit">Buscar</button>
                    </div>
                    <div class="user-profile" id="profile-icon" onclick="toggleProfileMenu()">
                        <img src="avatar.webp" alt="Foto de perfil" class="profile-pic">
                    </div>
                    <div class="profile-menu" id="profile-menu">
                        <p class="username">admin</p> 
                        <button onclick="window.location.href='editar_perfil.html'">Cambiar Credenciales</button>
                        <button onclick="window.location.href='ejercicios_supervisar.html'">Ejercicios a supervisar</button>
                        <button>Atención al cliente</button>
                        <button>Cerrar cuenta</button>
                        <button onclick="window.location.href='gestion_usuarios.html'">Gestión de usuarios</button>
                        <button>Términos y condiciones</button>
                    </div>
                </div>
            </nav>
        </header>
        <script src="script.js"></script>
>>>>>>> f7466218ae0ca85c472776f632126bff85898df4

  <div class="calendario-container">
    <h1>Rutinas</h1>
    <div class="calendario-header">
      <button id="prev-mes" onclick="cambiarMes(-1)">&#9664;</button>
      <span id="mes-actual">Enero 2024</span>
      <button id="next-mes" onclick="cambiarMes(1)">&#9654;</button>
    </div>
    <div class="dias-semana">
      <span>Dom</span>
      <span>Lun</span>
      <span>Mar</span>
      <span>Mié</span>
      <span>Jue</span>
      <span>Vie</span>
      <span>Sáb</span>
    </div>
    <div class="dias-mes" id="dias-mes"></div>
  </div>

  <!-- Modal -->
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="cerrarModal()">&times;</span>
      <div id="modal-body">
        <!-- Aquí aparecerá la lista de ejercicios -->
      </div>
      <button onclick="modificar()">Modificar</button>
    </div>
  </div>

  <script>
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    let mesActual = 0;
    let añoActual = 2024;

    // Lista de ejercicios de brazo (Curl de bíceps)
    const ejercicios = [
      "Curl de bíceps con barra",
      "Curl de bíceps con mancuernas",
      "Curl de bíceps en banco inclinado",
      "Curl de bíceps concentrado",
      "Curl de bíceps alterno"
    ];

    function obtenerDiasDelMes(mes, año) {
      return new Date(año, mes + 1, 0).getDate();
    }

    function generarCalendario() {
      const diasMesContainer = document.getElementById("dias-mes");
      diasMesContainer.innerHTML = "";

      const primerDia = new Date(añoActual, mesActual, 1).getDay();
      const diasEnMes = obtenerDiasDelMes(mesActual, añoActual);

      for (let i = 0; i < primerDia; i++) {
        const espacio = document.createElement("div");
        espacio.classList.add("dia");
        diasMesContainer.appendChild(espacio);
      }

      for (let dia = 1; dia <= diasEnMes; dia++) {
        const diaElement = document.createElement("div");
        diaElement.classList.add("dia");
        diaElement.innerHTML = `<span class="numero-dia">${dia}</span>`;
        diaElement.onclick = () => abrirModal(dia); // Llamar a la función abrirModal
        diasMesContainer.appendChild(diaElement);
      }

      document.getElementById("mes-actual").textContent = `${meses[mesActual]} ${añoActual}`;
    }

    function cambiarMes(direccion) {
      mesActual += direccion;

      if (mesActual < 0) {
        mesActual = 11;
        añoActual--;
      } else if (mesActual > 11) {
        mesActual = 0;
        añoActual++;
      }

      generarCalendario();
    }

    function abrirModal(dia) {
      const listaEjercicios = ejercicios.map(ejercicio => `<li>${ejercicio}</li>`).join('');
      document.getElementById("modal-body").innerHTML = ` 
        <h2>Día ${dia} de ${meses[mesActual]} ${añoActual}</h2>
        <p>Ejercicios de brazo (Curl de bíceps):</p>
        <ul>${listaEjercicios}</ul>
      `;
      document.getElementById("modal").style.display = "block";
    }

    function cerrarModal() {
      document.getElementById("modal").style.display = "none";
    }

    function modificar() {
      alert("Función de modificar en desarrollo.");
    }

    // Cerrar el modal al hacer clic fuera de él
    window.onclick = function(event) {
      const modal = document.getElementById("modal");
      if (event.target === modal) {
        cerrarModal();
      }
    }

    generarCalendario();

    // Toggle del menú de perfil
    function toggleProfileMenu() {
      const profileMenu = document.getElementById("profile-menu");
      profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
    }
  </script>

</body>
</html>



