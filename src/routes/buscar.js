const express = require('express');
const router = express.Router();

// Ejemplo de contenidos para buscar (puedes obtener esto de tu base de datos)
const paginas = [
    { titulo: "Gymanual", contenido: "Bienvenido a Gymanual, tu guía de ejercicios.", url: "/" },
    { titulo: "Ejercicios", contenido: "Explora diferentes ejercicios para tu rutina.", url: "/ejercicios" },
    { titulo: "Conócenos", contenido: "Descubre más sobre nuestro equipo y objetivos.", url: "/conocenos" },
    { titulo: "Contacto", contenido: "Envíanos un mensaje con tus dudas o comentarios.", url: "/contacto" },
];

router.get('/buscar', (req, res) => {
    const query = req.query.q?.toLowerCase(); // Obtiene la consulta de búsqueda
    if (!query) {
        return res.render('buscar', { resultados: [], query: '' });
    }

    try {
        // Filtrar las páginas que coincidan con el término de búsqueda
        const resultados = paginas.filter((pagina) =>
            pagina.titulo.toLowerCase().includes(query) ||
            pagina.contenido.toLowerCase().includes(query)
        );

        // Renderizar la vista de resultados
        res.render('buscar', { resultados, query });
    } catch (error) {
        console.error('Error al procesar la búsqueda:', error);
        res.status(500).render('error', { error: 'Algo salió mal. Por favor, intenta nuevamente más tarde.' });
    }
});

module.exports = router;