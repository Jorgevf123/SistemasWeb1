<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="estilosRegistro.css">
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
                    <a href="iniciosesion.html" class="username">usuario</a> 
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

    <div class="main-container">
        <div class="form-container">
            <h1>Registro</h1>
            <p>Para crearse una cuenta rellene los siguientes campos:</p>
            <form action="#" method="POST">
                <input type="email" name="email" placeholder="Correo electrónico" required><br>
                <input type="password" name="password" placeholder="Contraseña" required><br>
                <input type="password" name="confirm_password" placeholder="Repita la contraseña" required><br>
                <p><a href="terminosycondiciones.html">Términos y condiciones</a></p>
                <button type="submit">Finalizar</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
