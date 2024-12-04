# Gymanual
LOGO(opcional)

## Miembros del proyecto
- Juan Antonio
- Jorge Ángel
- Antonio Carrasco
- Iván Martínez
- Carlos Ramos

## Información breve del proyecto
Gymanual es una plataforma diseñada para aficionados y profesionales del gimnasio. Ofrecemos una base de datos rica en ejercicios, rutinas personalizadas y guías visuales que facilitan alcanzar tus objetivos físicos. Los usuarios pueden guardar ejercicios favoritos, crear rutinas personalizadas, y compartir su conocimiento al proponer nuevos ejercicios. Además, Gymanual está diseñada para fomentar la interacción comunitaria, permitiendo que tanto administradores como usuarios registrados contribuyan activamente.


## Requisitos
1. **Sistema operativo**:
   - Windows 10 o superior.

2. **Herramientas necesarias**:
   - **Node.js**: Instalado con `nvm` (Node Version Manager).
   - **Git**: Para clonar el repositorio.
   - **Navegador web moderno**: Google Chrome, Microsoft Edge o Firefox.

3. **Dependencias del proyecto**:
   - `http-errors`: Manejo de errores HTTP en Node.js.
   - Otras dependencias definidas en el archivo `package.json`.

### Pasos de despliegue y ejecución
Para desplegar y ejecutar el proyecto Gymanual, sigue los pasos detallados a continuación:

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>

## Verificar la versión de nvm
2. **Comprueba si `nvm` está instalado correctamente y su versión**:
```bash
   nvm version

## Comandos para configurar Node.js con nvm
3. **Si `nvm` no está instalado, lo instalamos**:

Accediendo al repositorio oficial: https://github.com/coreybutler/nvm-windows/releases.

Tras ello, en las variables entorno, seleccionamos el Path y añadimos:

C:\nvm
C:\nvm\nodejs

Posteriormente, procedemos a la terminal de vscode y ejecutamos:
```bash
   nvm install latest


4. ** Para activar una versión específica de Node.js instalada con nvm (en este caso, 23.3.0**:
 ```bash  
   nvm use 23.3.0

5. ** Instalamos el paquete en el directorio de tu proyecto y lo agrega como una dependencia en el archivo package.json.
 ```bash 
   npm install http-errors

6. **Accedemos al directorio src:**:
```bash  
   cd src
7. **Ejecutamos el servidor**:
```bash  
   npm start
8. **Accedemos al navegador e introducimos**:
```http
   localhost:3000

## Requisitos de funcionamiento

Usuarios invitados: Visualización de ejercicios sin necesidad de iniciar sesión.
Usuarios registrados: Posibilidad de guardar ejercicios favoritos, crear rutinas personalizadas y sugerir nuevos ejercicios.
Administradores: Gestión de usuarios, aceptación/rechazo de ejercicios sugeridos y supervisión del sistema.