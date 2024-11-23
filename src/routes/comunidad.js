<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>Comunidad</title>
		<meta content="width=device-width, initial-scale=1.0" name="viewport">

		<!-- Customized Bootstrap Stylesheet -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="estilos.css">
		<link rel="stylesheet" href="estilos2.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="https://use.fontawesome.com/fe459689b4.js"></script>
	</head>
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
				<div class="user-profile">
					<img src="avatar.webp" alt="Foto de perfil" class="profile-pic">
				</div>
			</div>
		</nav>
	</header>
	<body>
		<div class= "background-comunidad">
			<div class="columnas">
				<div class="principal">
					<div class= "centered-title">
						<h1>Comunidad</h1>
					</div>
				</div>
				<div class="secundario">
					<div class= "caja"> 
						<a href= "ejercicios.html">
							<h3>Publicar <br> ejercicio</h3>
						</a>
					</div>
				</div>
			</div>
			<div class= "centered-title">
				<h3>Mas Gustados</h3>
			</div>
			<br>
			<div class="container">
				<div id="theCarousel" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#theCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#theCarousel" data-slide-to="1"></li>
						<li data-target="#theCarousel" data-slide-to="2"></li>
						<li data-target="#theCarousel" data-slide-to="3"></li>
					</ol>
					<div class="carousel-inner" role="listbox">
						<div class="item active">
							<a href= "ejercicios.html">
								<img src="img1.jpg" alt="Imagen 1" > 
								<div class="carousel-caption d-none d-md-block">
									<h3> Título del artículo</h3>
									<p>Usuario 1 </p>
								</div>
							</a>
						</div>
						<div class="item">	
							<a href= "ejercicios.html">
								<img src="img2.jpg" alt="Imagen 2" > 
								<div class="carousel-caption d-none d-md-block">
									<h3> Título del artículo</h3>
									<p>Usuario 2</p>
								</div>
							</a>
						</div>
						<div class="item">	
							<a href= "ejercicios.html">
								<img src="img3.jpg" alt="Imagen 3" >
								<div class="carousel-caption d-none d-md-block">
									<h3> Título del artículo</h3>
									<p>Usuario 3</p>
								</div>
							</a>
						</div>
						<div class="item">	
							<a href= "ejercicios.html">
								<img src="img4.jpg" alt="Imagen 4" > 
								<div class="carousel-caption d-none d-md-block">
									<h3> Título del artículo</h3>
									<p> Usuario 4</p>
								</div>
							</a>
						</div>
						<a class="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span class="sr-only">anterior</span>
						</a>
						<a class="right carousel-control" href="#theCarousel" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span class="sr-only">siguiente</span>
						</a>
					</div>
				</div>
			</div>
			<br>
			<br>
			<div class="container-recomendaciones">
				<div class= "lefted-title">
					<h1>Recomendaciones de ejercicios</h1>
				</div>
				<div class="container-carousel">
					<div class="columna">
						<div class="row">
							<div class="recomendacion">	
								<div class="imagen-comunidad">
									<img src="img5.jpg" alt="Imagen de ejercicio">
									<div class="star-icon">★</div>
									<div class="author-name">
										<p>Usuario 1</p>
									</div>
								</div>
								<div class="titulo-ejercicio">
									<a href= "ejercicios.html">
										<p>Título 1</p>
										<div class="descripcion">
											<p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
										</div>
									</a>
									<div class="reaction-buttons carousel-item">
										<button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
										<button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>	
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="recomendacion">
								<div class="imagen-comunidad">
									<img src="img6.jpg" alt="Imagen de ejercicio">
									<div class="star-icon">★</div>
									<p class="author-name">Usuario 2</p>
								</div>
								<div class="titulo-ejercicio">
									<a href= "ejercicios.html">
										<p>Título 2</p>
										<div class="descripcion">
											<p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
										</div>
									</a>
									<div class="reaction-buttons carousel-item">
										<button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
										<button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="columna">
						<div class="row">
							<div class="recomendacion">
								<div class="imagen-comunidad">
									<img src="img7.jpg" alt="Imagen de ejercicio">
									<div class="star-icon">★</div>
									<p class="author-name">Usuario 3</p>
								</div>
								<div class="titulo-ejercicio">
									<a href= "ejercicios.html">
										<p>Título 3</p>
										<div class="descripcion">
											<p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
										</div>
									</a>
									<div class="reaction-buttons carousel-item">
										<button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
										<button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="recomendacion">
								<div class="imagen-comunidad">
									<img src="img8.jpg" alt="Imagen de ejercicio">
									<div class="star-icon">★</div>
									<p class="author-name">Usuario 4</p>
								</div>
								<div class="titulo-ejercicio">
									<a href= "ejercicios.html">
										<p>Título 4</p>
										<div class="descripcion">
											<p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
										</div>
									</a>
									<div class="reaction-buttons carousel-item">
										<button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
										<button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="columna">
						<div class="row">
							<div class="recomendacion">
								<div class="imagen-comunidad">
									<img src="img8.jpg" alt="Imagen de ejercicio">
									<div class="star-icon">★</div>
									<p class="author-name">Usuario 5</p>
								</div>
								<div class="titulo-ejercicio">
									<a href= "ejercicios.html">
										<p>Título 5</p>
										<div class="descripcion">
											<p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
										</div>
									</a>
									<div class="reaction-buttons carousel-item">
										<button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
										<button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="recomendacion">
								<div class="imagen-comunidad">
									<img src="img8.jpg" alt="Imagen de ejercicio">
									<div class="star-icon">★</div>
									<p class="author-name">Usuario 6</p>
								</div>
								<div class="titulo-ejercicio">
									<a href= "ejercicios.html">
										<p>Título 6</p>
										<div class="descripcion">
											<p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
										</div>
									</a>
									<div class="reaction-buttons carousel-item">
										<button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
										<button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>
									</div>
								</div>
							</div>	
						</div>
					</div>
					<div class="columna">
						<div class="row">
							<div class="recomendacion">
								<div class="imagen-comunidad">
									<img src="img8.jpg" alt="Imagen de ejercicio">
									<div class="star-icon">★</div>
									<p class="author-name">Usuario 7</p>
								</div>
								<div class="titulo-ejercicio">
									<a href= "ejercicios.html">
										<p>Título 7</p>
										<div class="descripcion">
											<p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
										</div>
									</a>
									<div class="reaction-buttons carousel-item">
										<button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
										<button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="recomendacion">
								<div class="imagen-comunidad">
									<img src="img8.jpg" alt="Imagen de ejercicio">
									<div class="star-icon">★</div>
									<p class="author-name">Usuario 8</p>
								</div>
								<div class="titulo-ejercicio">
									<a href= "ejercicios.html">
										<p>Título 8</p>
										<div class="descripcion">
											<p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
										</div>
									</a>
									<div class="reaction-buttons carousel-item">
										<button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
										<button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="columna">
                                                <div class="row">
                                                        <div class="recomendacion">
                                                                <div class="imagen-comunidad">
                                                                        <img src="img7.jpg" alt="Imagen de ejercicio">
                                                                        <div class="star-icon">★</div>
                                                                        <p class="author-name">Usuario 3</p>
                                                                </div>
                                                                <div class="titulo-ejercicio">
                                                                        <a href= "ejercicios.html">
                                                                                <p>Título 3</p>
                                                                                <div class="descripcion">
                                                                                        <p>Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativo Texto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativoTexto explicativo</p>
                                                                                </div>
                                                                        </a>
                                                                        <div class="reaction-buttons carousel-item">
                                                                                <button class="likeButton reaction-btn">👍 <span class="likeCount">0</span></button>
                                                                                <button class="dislikeButton reaction-btn">👎 <span class="dislikeCount">0</span></button>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
					</div>
				</div>
			</div>
			<div class="pagination-buttons">
			</div>
			<footer>
				<p>&copy; 2024 Gymanual. Todos los derechos reservados.</p>
			</footer>
			<script src="script.js" defer></script>
		</div>
	</body>
</html>
