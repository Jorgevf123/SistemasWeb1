function loadImage(event) {
    const image = document.getElementById('profile-image');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = () => {
        URL.revokeObjectURL(image.src); // Liberar memoria una vez cargada la imagen
    };
}
