<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Atención al Cliente</title>
  <link rel="stylesheet" href="atencion.css">
</head>
<body>

  <!-- Navigation Bar -->
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
                  <button onclick="window.location.href='atclient.html'">Atención al cliente</button>
                  <button>Cerrar cuenta</button>
                  <button onclick="window.location.href='gestion_usuarios.html'">Gestión de usuarios</button>
                  <button>Términos y condiciones</button>
              </div>
          </div>
      </nav>
  </header>

  <h1 class="titulo">Atención al cliente</h1>
  
  <table class="tabla-clientes">
    <tr>
      <td>jorge@gmail.com</td>
      <td class="mensaje">Mensaje acotado</td>
      <td><button class="ver-todo" onclick="openModal()">ver todo</button></td>
    </tr>
    <tr>
      <td>maria@example.com</td>
      <td class="mensaje">Mensaje acotado</td>
      <td><button class="ver-todo" onclick="openModal()">ver todo</button></td>
    </tr>
    <tr>
      <td>pedro@example.com</td>
      <td class="mensaje">Mensaje acotado</td>
      <td><button class="ver-todo" onclick="openModal()">ver todo</button></td>
    </tr>
    <tr>
      <td>ana@example.com</td>
      <td class="mensaje">Mensaje acotado</td>
      <td><button class="ver-todo" onclick="openModal()">ver todo</button></td>
    </tr>
  </table>

  <!-- Modal -->
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>Ivan Martinez Floro</h2>
      <p>Estás haciendo muy bien el ejercicio</p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>







