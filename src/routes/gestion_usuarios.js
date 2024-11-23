<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Usuarios</title>
    <link rel="stylesheet" href="estilos.css"> 
</head>
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
                    <a  href="iniciosesion.html"  class="username">usuario</a> 
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
    <h1 class="user-management-title">gestión de usuarios</h1>
    <p>¿Qué usuario buscas?</p>
    <div class="search-bar">
        <input type="text" placeholder="Buscar...">
        <button type="submit">🔍</button>
    </div>

    <table class="user-management-table">
        <thead>
            <tr>
                <th>Correo</th>
                <th>Permisos</th>
                <th>Ejs publicados</th>
                <th>Usuarios baneados</th>
                <th>Vídeos rechazados</th>
                <th>Actividad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>jorge@gmail.com</td>
                <td>Administrador</td>
                <td>2</td>
                <td>1</td>
                <td>0</td>
                <td>En línea</td>
            </tr>
        </tbody>
    </table>
    <div class="back-button-container">
        <button onclick="window.location.href='index.html'" class="back-button">Volver</button>
    </div>
</body>
</html>
