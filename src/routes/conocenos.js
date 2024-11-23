<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conócenos - Gymanual</title>
    <link rel="stylesheet" href="estilos3.css">
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
                    <p class="username">admin</p> 
                    <button>Correo electrónico</button>
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

    <main>
        <section class="about-hero">
            <div class="hero-overlay">
                <h1>Conócenos</h1>
                <p>Un equipo apasionado por el fitness y la comunidad</p>
            </div>
        </section>

        <section class="about-us">
            <div class="about-content">
                <div class="about-item">
                    <img src="mision.png" alt="Misión" class="about-image">
                    <h2>Nuestra Misión</h2>
                    <p>Inspirar a cada persona a lograr su mejor versión mediante el ejercicio y el apoyo de una comunidad motivadora.</p>
                </div>
                <div class="about-item">
                    <img src="equipo.jpg" alt="Equipo" class="about-image">
                    <h2>Nuestro Equipo</h2>
                    <p>Somos entrenadores y expertos en fitness comprometidos a ofrecerte el mejor contenido y acompañarte en cada paso.</p>
                </div>
                <div class="about-item">
                    <img src="comunidad.jpg" alt="Comunidad" class="about-image">
                    <h2>Únete a la Comunidad</h2>
                    <p>Forma parte de Gymanual y descubre cómo juntos podemos superar cualquier desafío.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Gymanual. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
