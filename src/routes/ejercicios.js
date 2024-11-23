<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicios</title>
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

    <!-- Añadir los IDs correspondientes a cada sección de ejercicios -->
    <main class="exercise-container">
        <h2>Ejercicios para Hombros</h2>
        <section id="shoulders" class="exercise-content">
            <h3>Press militar</h3>
            <div class="video-container">
                <video controls>
                    <source src="Ejercicio_Espalda.mp4" type="video/mp4">
                    Tu navegador no soporta el video.
                </video>
            </div>
            <div class="description-box">
                <h3>Descripción del ejercicio</h3>
                <p>El Press militar en máquina Smith es un ejercicio efectivo para desarrollar los músculos de los hombros. 
                    Este ejercicio permite mantener un control más estricto sobre el peso, lo que minimiza el riesgo de lesión y 
                    enfoca la carga en los deltoides.</p>
                <span>Publicado por: Juan Antonio</span>
                <h3>Pasos para realizar el ejercicio:</h3>
                <ul>
                    <li><strong>Paso 1:</strong> Ajusta la máquina Smith a la altura adecuada para que puedas empezar con la barra a nivel de los hombros.</li>
                    <li><strong>Paso 2:</strong> Siéntate en el banco con la espalda recta y los pies firmemente plantados en el suelo.</li>
                    <li><strong>Paso 3:</strong> Agarra la barra con las manos a una distancia un poco mayor que el ancho de los hombros.</li>
                    <li><strong>Paso 4:</strong> Levanta la barra de los soportes y bájala lentamente hasta justo debajo de la barbilla.</li>
                    <li><strong>Paso 5:</strong> Empuja la barra hacia arriba hasta que tus brazos estén completamente extendidos, pero sin bloquear los codos.</li>
                    <li><strong>Paso 6:</strong> Baja la barra de manera controlada hasta la posición inicial y repite el movimiento.</li>
                </ul>
            </div>
            
            <div class="comment-section">
                <h3>Comentarios</h3>
                <div id="chat-shoulders" class="chat">
                    <!-- Comentarios existentes -->
                </div>
                <textarea id="comment-input-shoulders" placeholder="Escribe tu comentario aquí..."></textarea>
                <button onclick="addComment('shoulders')">Enviar</button>
            </div>
        </div>

        <div id="exercise-container" class="exercise-container">
            <div class="actions">
                <button onclick="deleteComments('shoulders')">Borrar Comentarios</button>
                <button id="delete-exercise-button" onclick="deleteExercise('shoulders')">Borrar Ejercicio</button>
            </div>    
        </div>
        </section>
    
    <section id="body" class="exercise-container">
        <h2>Ejercicios para Pecho</h2>
        <div class="exercise-content">
            <h3>Press de banca</h3>
            <div class="video-container">
                <video controls>
                    <source src="Press_de_banca.mp4" type="video/mp4">
                    Tu navegador no soporta el video.
                </video>
            </div>
            <div class="description-box">
                <h3>Descripción del ejercicio</h3>
                <p>Es un excelente ejercicio para trabajar los músculos del pecho, particularmente el pectoral mayor. Al utilizar la máquina Smith, se proporciona estabilidad adicional, permitiendo enfocarse en el movimiento y la contracción muscular sin preocuparse por el equilibrio del peso. Este ejercicio también involucra los tríceps y los deltoides frontales como músculos secundarios.</p>
                <span>Publicado por: Juan Antonio</span>
                <h3>Pasos para realizar el ejercicio:</h3>
                <ul>
                    <li><strong>Paso 1:</strong> Ajusta la máquina Smith a una altura adecuada para que la barra esté justo por encima de tu pecho cuando te acuestes en el banco.</li>
                    <li><strong>Paso 2:</strong> Siéntate en el banco con los pies firmemente plantados en el suelo y recuéstate, asegurándote de que tu espalda baja esté en contacto con el banco.</li>
                    <li><strong>Paso 3:</strong> Agarra la barra con las manos un poco más anchas que el ancho de los hombros, asegurándote de que las muñecas estén alineadas con los codos.</li>
                    <li><strong>Paso 4:</strong> Desbloquea la barra y bájala lentamente hacia tu pecho, controlando el movimiento, hasta que esté justo por encima de tu esternón. Luego, empuja la barra hacia arriba de nuevo hasta que tus brazos estén completamente extendidos, sin bloquear los codos.</li>
                </ul>
            </div>
            
            <div class="comment-section">
                <h3>Comentarios</h3>
                <div id="chat-chest" class="chat">
                    <!-- Comentarios existentes -->
                </div>
                <textarea id="comment-input-chest" placeholder="Escribe tu comentario aquí..."></textarea>
                <button onclick="addComment('chest')">Enviar</button>
            </div>
        </div>

        <div id="exercise-container" class="exercise-container">
            <div class="actions">
                <button onclick="deleteComments('chest')">Borrar Comentarios</button>
                <button id="delete-exercise-button" onclick="deleteExercise('chest')">Borrar Ejercicio</button>
            </div>    
        </div>
        </section>

        <section id="biceps" class="exercise-container">
            <h2>Ejercicios para Biceps</h2>
            <div class="exercise-content">
                <h3>Bíceps con mancuernas</h3>
                <div class="video-container">
                    <video controls>
                        <source src="Ejercicio_Espalda.mp4" type="video/mp4">
                        Tu navegador no soporta el video.
                    </video>
                </div>
                <div class="description-box">
                    <h3>Descripción del ejercicio</h3>
                    <p>Es un ejercicio efectivo para aislar y fortalecer los músculos bíceps. Al realizar este movimiento en un banco inclinado, se reduce la posibilidad de usar el impulso, lo que permite una contracción más controlada y efectiva del bíceps.</p>
                    <span>Publicado por: Juan Antonio</span>
                    <h3>Pasos para realizar el ejercicio:</h3>
                    <ul>
                        <li><strong>Paso 1:</strong> Ajusta un banco a un ángulo de 45 grados y siéntate con la espalda completamente apoyada en el respaldo.</li>
                        <li><strong>Paso 2:</strong> Sostén una mancuerna en cada mano con los brazos completamente extendidos y las palmas mirando hacia adelante.</li>
                        <li><strong>Paso 3:</strong> Sin mover la parte superior de los brazos, flexiona los codos para levantar las mancuernas hacia los hombros, contrayendo los bíceps.</li>
                        <li><strong>Paso 4:</strong> Baja las mancuernas lentamente a la posición inicial, controlando el movimiento en todo momento.</li>
                        </ul>
                </div>
                
                <div class="comment-section">
                    <h3>Comentarios</h3>
                    <div id="chat-biceps" class="chat">
                        <!-- Comentarios existentes -->
                    </div>
                    <textarea id="comment-input-biceps" placeholder="Escribe tu comentario aquí..."></textarea>
                    <button onclick="addComment('biceps')">Enviar</button>
                </div>
            </div>
    
            <div id="exercise-container" class="exercise-container">
                <div class="actions">
                    <button onclick="deleteComments('biceps')">Borrar Comentarios</button>
                    <button id="delete-exercise-button" onclick="deleteExercise('biceps')">Borrar Ejercicio</button>
                </div>    
            </div>
            </section>

            <section id="quads" class="exercise-container">
                <h2>Ejercicios para Cuádriceps</h2>
                <div class="exercise-content">
                    <h3>Prensa</h3>
                    <div class="video-container">
                        <video controls>
                            <source src="Ejercicio_Espalda.mp4" type="video/mp4">
                            Tu navegador no soporta el video.
                        </video>
                    </div>
                    <div class="description-box">
                        <h3>Descripción del ejercicio</h3>
                        <p>Es un ejercicio fundamental para trabajar los músculos del tren inferior, especialmente los cuádriceps, glúteos e isquiotibiales. Este ejercicio permite levantar grandes pesos de manera segura, reduciendo el riesgo de lesiones en la espalda.</p>
                        <span>Publicado por: Juan Antonio</span>
                        <h3>Pasos para realizar el ejercicio:</h3>
                        <ul>
                            <li><strong>Paso 1:</strong> Siéntate en la máquina de prensa de piernas con la espalda y los glúteos completamente apoyados contra el respaldo.</li>
                            <li><strong>Paso 2:</strong> Coloca los pies en la plataforma a una anchura similar a la de los hombros, con las puntas ligeramente hacia afuera.</li>
                            <li><strong>Paso 3:</strong> Desbloquea los seguros de la máquina y extiende las piernas sin bloquear completamente las rodillas.</li>
                            <li><strong>Paso 4:</strong> Baja lentamente la plataforma doblando las rodillas, asegurándote de que éstas se mantengan alineadas con los pies.</li>
                            <li><strong>Paso 5:</strong> Desciende hasta que las rodillas formen un ángulo de aproximadamente 90 grados o hasta donde te sientas cómodo.</li>
                            <li><strong>Paso 6:</strong> Empuja la plataforma hacia arriba regresando a la posición inicial, manteniendo el control del movimiento en todo momento.</li>
                        </ul>
                    </div>
                    
                    <div class="comment-section">
                        <h3>Comentarios</h3>
                        <div id="chat-quads" class="chat">
                            <!-- Comentarios existentes -->
                        </div>
                        <textarea id="comment-input-quads" placeholder="Escribe tu comentario aquí..."></textarea>
                        <button onclick="addComment('quads')">Enviar</button>
                    </div>
                </div>
        
                <div id="exercise-container" class="exercise-container">
                    <div class="actions">
                        <button onclick="deleteComments('quads')">Borrar Comentarios</button>
                        <button id="delete-exercise-button" onclick="deleteExercise('quads')">Borrar Ejercicio</button>
                    </div>    
                </div>
                </section>

                <section id="lats" class="exercise-container">
                    <h2>Ejercicios para Dorsales</h2>
                    <div class="exercise-content">
                        <h3>Jalón al pecho</h3>
                        <div class="video-container">
                            <video controls>
                                <source src="Jalon_al_pecho.mp4" type="video/mp4">
                                Tu navegador no soporta el video.
                            </video>
                        </div>
                        <div class="description-box">
                            <h3>Descripción del ejercicio</h3>
                            <p>Ejercicio excelente para trabajar los músculos dorsales, especialmente el dorsal ancho, además de involucrar los bíceps y otros músculos del tren superior. Este ejercicio ayuda a mejorar la fuerza y el tamaño de la espalda.</p>
                            <span>Publicado por: Juan Antonio</span>
                            <h3>Pasos para realizar el ejercicio:</h3>
                            <ul>
                                <li><strong>Paso 1:</strong> Siéntate en la máquina de jalón con la espalda recta y ajusta el soporte para que tus muslos queden firmemente apoyados.</li>
                                <li><strong>Paso 2:</strong> Agarra la barra con las manos un poco más anchas que el ancho de los hombros, con las palmas mirando hacia adelante.</li>
                                <li><strong>Paso 3:</strong> Tira de la barra hacia abajo lentamente hasta que toque o esté cerca de tu pecho, asegurándote de mantener los omóplatos juntos durante el movimiento.</li>
                                <li><strong>Paso 4:</strong> Mantén la posición brevemente y luego devuelve la barra a la posición inicial de manera controlada, extendiendo completamente los brazos.</li>
                            </ul>
                        </div>
                        
                        <div class="comment-section">
                            <h3>Comentarios</h3>
                            <div id="chat-lats" class="chat">
                                <!-- Comentarios existentes -->
                            </div>
                            <textarea id="comment-input-lats" placeholder="Escribe tu comentario aquí..."></textarea>
                            <button onclick="addComment('lats')">Enviar</button>
                        </div>
                    </div>
            
                    <div id="exercise-container" class="exercise-container">
                        <div class="actions">
                            <button onclick="deleteComments('lats')">Borrar Comentarios</button>
                            <button id="delete-exercise-button" onclick="deleteExercise('lats')">Borrar Ejercicio</button>
                        </div>    
                    </div>
                    </section>

                    <section id="triceps" class="exercise-container">
                        <h2>Ejercicios para Triceps</h2>
                        <div class="exercise-content">
                            <h3>Cuerda en polea</h3>
                            <div class="video-container">
                                <video controls>
                                    <source src="Ejercicio_Espalda.mp4" type="video/mp4">
                                    Tu navegador no soporta el video.
                                </video>
                            </div>
                            <div class="description-box">
                                <h3>Descripción del ejercicio</h3>
                                <p>El ejercicio de tríceps con cuerda en polea es excelente para aislar los tríceps y trabajar su definición. Este movimiento permite un rango de movimiento completo y un buen control del peso.</p>
                                <span>Publicado por: Juan Antonio</span>
                                <h3>Pasos para realizar el ejercicio:</h3>
                                <ul>
                                    <li><strong>Paso 1:</strong> Coloca la cuerda en una polea alta y ajusta el peso adecuado.</li>
                                    <li><strong>Paso 2:</strong> Toma la cuerda con ambas manos, manteniendo las palmas hacia adentro, y da un paso atrás para tensar la cuerda.</li>
                                    <li><strong>Paso 3:</strong> Mantén la espalda recta, el pecho hacia afuera, y los codos cerca del cuerpo.</li>
                                    <li><strong>Paso 4:</strong> Empuja la cuerda hacia abajo extendiendo completamente los brazos hasta que las manos queden cerca de los muslos.</li>
                                    <li><strong>Paso 5:</strong> Deténte un segundo en la posición final y siente la contracción en los tríceps.</li>
                                    <li><strong>Paso 6:</strong> Regresa lentamente a la posición inicial, doblando los codos y controlando el movimiento.</li>
                                </ul>
                            </div>
                            
                            <div class="comment-section">
                                <h3>Comentarios</h3>
                                <div id="chat-triceps" class="chat">
                                    <!-- Comentarios existentes -->
                                </div>
                                <textarea id="comment-input-triceps" placeholder="Escribe tu comentario aquí..."></textarea>
                                <button onclick="addComment('triceps')">Enviar</button>
                            </div>
                        </div>
                
                        <div id="exercise-container" class="exercise-container">
                            <div class="actions">
                                <button onclick="deleteComments('triceps')">Borrar Comentarios</button>
                                <button id="delete-exercise-button" onclick="deleteExercise('triceps')">Borrar Ejercicio</button>
                            </div>    
                        </div>
                        </section>

                        <section id="hamstrings" class="exercise-container">
                            <h2>Ejercicios para Femoral</h2>
                            <div class="exercise-content">
                                <h3>Femoral tumbado boca abajo</h3>
                                <div class="video-container">
                                    <video controls>
                                        <source src="Ejercicio_Espalda.mp4" type="video/mp4">
                                        Tu navegador no soporta el video.
                                    </video>
                                </div>
                                <div class="description-box">
                                    <h3>Descripción del ejercicio</h3>
                                    <p>El ejercicio de femoral tumbado boca abajo es ideal para fortalecer los isquiotibiales. Ayuda a mejorar la fuerza y la flexibilidad de los músculos posteriores de las piernas.</p>
                                    <span>Publicado por: Juan Antonio</span>
                                    <h3>Pasos para realizar el ejercicio:</h3>
                                    <ul>
                                        <li><strong>Paso 1:</strong> Acuéstate boca abajo en la máquina de curl femoral, ajustando el soporte para que quede justo por encima de los tobillos.</li>
                                        <li><strong>Paso 2:</strong> Agarra las asas de la máquina para estabilizar el cuerpo y mantén la espalda recta.</li>
                                        <li><strong>Paso 3:</strong> Flexiona las rodillas y levanta el peso, llevando los talones hacia los glúteos.</li>
                                        <li><strong>Paso 4:</strong> Mantén la contracción durante un segundo en la parte superior del movimiento.</li>
                                        <li><strong>Paso 5:</strong> Baja lentamente el peso de vuelta a la posición inicial, controlando el movimiento en todo momento.</li>
                                    </ul>
                                </div>
                                
                                <div class="comment-section">
                                    <h3>Comentarios</h3>
                                    <div id="chat-hamstrings" class="chat">
                                        <!-- Comentarios existentes -->
                                    </div>
                                    <textarea id="comment-input-hamstrings" placeholder="Escribe tu comentario aquí..."></textarea>
                                    <button onclick="addComment('hamstrings')">Enviar</button>
                                </div>
                            </div>
                    
                            <div id="exercise-container" class="exercise-container">
                                <div class="actions">
                                    <button onclick="deleteComments('hamstrings')">Borrar Comentarios</button>
                                    <button id="delete-exercise-button" onclick="deleteExercise('hamstrings')">Borrar Ejercicio</button>
                                </div>    
                            </div>
                            </section>

                            <section id="calves" class="exercise-container">
                                <h2>Ejercicios para Gemelos</h2>
                                <div class="exercise-content">
                                    <h3>Gemelos con apoyo</h3>
                                    <div class="video-container">
                                        <video controls>
                                            <source src="Ejercicio_Espalda.mp4" type="video/mp4">
                                            Tu navegador no soporta el video.
                                        </video>
                                    </div>
                                    <div class="description-box">
                                        <h3>Descripción del ejercicio</h3>
                                        <p>El ejercicio de gemelos con apoyo es ideal para fortalecer los músculos de las pantorrillas. Ayuda a mejorar la estabilidad y fuerza en la parte inferior de las piernas.</p>
                                        <span>Publicado por: Juan Antonio</span>
                                        <h3>Pasos para realizar el ejercicio:</h3>
                                        <ul>
                                            <li><strong>Paso 1:</strong> Colócate en la máquina de gemelos, apoyando los hombros en el soporte acolchado.</li>
                                            <li><strong>Paso 2:</strong> Posiciona la punta de los pies en el borde de la plataforma con los talones colgando.</li>
                                            <li><strong>Paso 3:</strong> Empuja hacia arriba con los pies, elevando los talones lo más alto posible.</li>
                                            <li><strong>Paso 4:</strong> Mantén la posición en la parte superior durante un segundo para maximizar la contracción.</li>
                                            <li><strong>Paso 5:</strong> Baja lentamente los talones hacia abajo, controlando el movimiento, hasta sentir un ligero estiramiento en los gemelos.</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="comment-section">
                                        <h3>Comentarios</h3>
                                        <div id="chat-calves" class="chat">
                                            <!-- Comentarios existentes -->
                                        </div>
                                        <textarea id="comment-input-calves" placeholder="Escribe tu comentario aquí..."></textarea>
                                        <button onclick="addComment('calves')">Enviar</button>
                                    </div>
                                </div>
                        
                                <div id="exercise-container" class="exercise-container">
                                    <div class="actions">
                                        <button onclick="deleteComments('calves')">Borrar Comentarios</button>
                                        <button id="delete-exercise-button" onclick="deleteExercise('calves')">Borrar Ejercicio</button>
                                    </div>    
                                </div>
                                </section>
    </main>
    
    <!-- Repite bloques similares para otros músculos, con IDs específicos como "quads", "chest", etc. -->
    <footer>
        <p>&copy; 2024 Gymanual. Todos los derechos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
