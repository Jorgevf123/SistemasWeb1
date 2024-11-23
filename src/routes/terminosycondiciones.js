<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Términos y Condiciones</title>
    <link rel="stylesheet" href="estiloTyC.css">
</head>
<body>
  
    <div class="popup-background">
        <!-- Ventana emergente de Términos y Condiciones -->
        <div class="popup">
            <h1 class="popup-title">Términos y Condiciones</h1>
            <div class="terms-content">
               <p>política de Privacidad</p>
               <p> Condiciones y terminos de uso</p>
               <p> Ley Orgánica de protección de datos</p>
               <p>Tu privacidad es importante para nosotros
                En CEU utilizamos cookies propias y de terceros para mejorar nuestros 
                servicios mediante el análisis de tus hábitos de navegación, para personalizar
                 los anuncios y el contenido según tus intereses, medir el rendimiento y obtener 
                 información sobre las audiencias que vieron los anuncios y el contenido. Puedes 
                 aceptar todas las cookies y seguir navegando haciendo clic en el botón “ACEPTO”;
                  de forma alternativa, puedes acceder a información más detallada y cambiar tus preferencias 
                  antes de otorgar o negar tu consentimiento haciendo clic en el botón "Personalizar". Para más información 
                  puedes visitar nuestra Política de Cookies</p> 
                <!-- Ejemplo Política del CEU -->
            </div>
            <button class="close-button" onclick="closePopup()">Cerrar</button>
        </div>
    </div>

    <!-- Script para cerrar la ventana emergente -->
    <script>
       function closePopup() {
            // Verifica si hay una página previa en el historial
            if (window.history.length > 1) {
                window.history.back();  // Redirige a la página anterior
            } else {
                window.location.href = "/"; // Redirige a la página de inicio si no hay historial
            }
        }
    </script>
</body>
</html>
