const {Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');
const logger = require('../logger');
const { error } = require('winston');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'sequelize/db.sqlite'
});

const modelDefiners = [
    require('./models/articulos_comunidad.model'),
];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

async function resetArticulos(){
    const count = await sequelize.models.articulos_comunidad.count();
    const articulos_comunidad = [
        {
            titulo_articulo: "Esta es una prueba",
            usuario_escritor: "Carlos Ramos",
            descripcion: "Esta es una prueba de base de datos",
            categoria: "prueba",
            numero_like: 0,
            numero_dislike: 0
        },
        {
            titulo_articulo: "Esta es una prueba 2",
            usuario_escritor: "Carlos Ramos",
            descripcion: "Esta es una prueba de base de datos",
            categoria: "prueba",
            numero_like: 0,
            numero_dislike: 0
        },
        {
            titulo_articulo: "Esta es una prueba 3",
            usuario_escritor: "Carlos Ramos",
            descripcion: "Esta es una prueba de base de datos",
            categoria: "prueba",
            numero_like: 0,
            numero_dislike: 0
        },
        {
            titulo_articulo: "Esta es una prueba 4",
            usuario_escritor: "Carlos Ramos",
            descripcion: "Esta es una prueba de base de datos",
            categoria: "prueba",
            numero_like: 0,
            numero_dislike: 0
        },
        {
            titulo_articulo: "Esta es una prueba 5",
            usuario_escritor: "Carlos Ramos",
            descripcion: "Esta es una prueba de base de datos",
            categoria: "prueba",
            numero_like: 0,
            numero_dislike: 0
        },
        {
            titulo_articulo: "Esta es una prueba 6",
            usuario_escritor: "Carlos Ramos",
            descripcion: "Esta es una prueba de base de datos",
            categoria: "prueba",
            numero_like: 0,
            numero_dislike: 0
        }
    ];

    if (count == 0){
        try{
            await sequelize.models.articulos_comunidad.bulkCreate(articulos_comunidad);
            logger.info('Creados articulos iniciales');
        }catch{
            logger.error('Error al crear los artículos:', error);
        }
        
    } else {
        logger.info('La DB articulos de la comunindad ya estaba inicializada');
    }
}

async function reset(){
    try{
        await sequelize.sync({force: true}); // false para que no se reinice la DB
        await resetArticulos();
    }catch{
        console.error('Error al sincronizar la base de datos:', error);
        console.error(error.stack);
    }

}

reset();

module.exports = sequelize;