const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Define las rutas de las páginas y sus plantillas correspondientes
const paginas = [
    { titulo: "Gymanual", archivo: path.join(__dirname, '../views/index.ejs'), url: "/" },
    { titulo: "Ejercicios", archivo: path.join(__dirname, '../views/ejercicios.ejs'), url: "/ejercicios" },
    { titulo: "Conócenos", archivo: path.join(__dirname, '../views/conocenos.ejs'), url: "/conocenos" },
    { titulo: "Contacto", archivo: path.join(__dirname, '../views/contacto.ejs'), url: "/contacto" },
];

// Ruta para manejar búsquedas
router.get('/', async (req, res) => {
    const query = req.query.q?.toLowerCase().trim() || ''; // Obtén y procesa la consulta

    if (!query) {
        return res.json([]); // Devuelve un arreglo vacío si no hay consulta
    }

    try {
        const resultados = [];

        // Leer cada archivo y buscar coincidencias
        for (const pagina of paginas) {
            const contenido = fs.readFileSync(pagina.archivo, 'utf-8').toLowerCase();

            // Si encuentra coincidencias en el archivo, agrega la página a los resultados
            if (contenido.includes(query) || pagina.titulo.toLowerCase().includes(query)) {
                resultados.push({
                    titulo: pagina.titulo,
                    contenido: `Se encontró "${query}" en la página ${pagina.titulo}`,
                    url: pagina.url,
                });
            }
        }

        res.json(resultados); // Devuelve los resultados como JSON
    } catch (error) {
        console.error('Error al realizar la búsqueda:', error);
        res.status(500).json({ error: 'Hubo un error al realizar la búsqueda.' });
    }
});

module.exports = router;

   
    