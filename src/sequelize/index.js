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
            titulo_articulo: "Los Beneficios del Yoga para el Cuerpo y la Mente",
            usuario_escritor: "Laura Sánchez",
            descripcion: "El yoga es una práctica ancestral que combina posturas físicas, técnicas de respiración y meditación. Además de mejorar la flexibilidad y el equilibrio, el yoga ayuda a reducir los niveles de cortisol, la hormona del estrés, promoviendo una sensación de calma y bienestar. Estudios recientes demuestran que el yoga también puede mejorar la salud cardiovascular y reducir los síntomas de la depresión. Este artículo ofrece una introducción al yoga y consejos para comenzar desde casa.",
            categoria: "Salud y Bienestar",
            numero_like: 125,
            numero_dislike: 5
        },
        {
            titulo_articulo: "Alimentos Clave para Mejorar tu Rendimiento Deportivo",
            usuario_escritor: "Carlos Ramos",
            descripcion: "Una buena alimentación es esencial para cualquier atleta. Este artículo detalla alimentos ricos en nutrientes que potencian el rendimiento, como el plátano, una excelente fuente de carbohidratos rápidos, y el salmón, que aporta proteínas y omega-3 para la recuperación muscular. También se incluyen recetas prácticas para smoothies energéticos y snacks saludables que puedes consumir antes y después del entrenamiento.",
            categoria: "Nutrición Deportiva",
            numero_like: 200,
            numero_dislike: 12
        },
        {
            titulo_articulo: "Cómo Crear una Rutina de Entrenamiento Personalizada",
            usuario_escritor: "Marta López",
            descripcion: "No todos los cuerpos son iguales, y por eso un plan de entrenamiento debe adaptarse a tus objetivos y condiciones físicas. En este artículo, aprenderás cómo definir metas realistas, elegir ejercicios adecuados y distribuir tus entrenamientos a lo largo de la semana para maximizar resultados. Además, se incluye una sección especial sobre cómo evitar el estancamiento y mantener la motivación a largo plazo.",
            categoria: "Ejercicio y Entrenamiento",
            numero_like: 178,
            numero_dislike: 9
        },
        {
            titulo_articulo: "La Importancia del Descanso en el Rendimiento Deportivo",
            usuario_escritor: "David Hernández",
            descripcion: "¿Sabías que el descanso es tan importante como el entrenamiento? Durante el sueño, el cuerpo repara tejidos, consolida la memoria muscular y regula hormonas como la testosterona y el cortisol. En este artículo, exploramos la relación entre el descanso y la prevención de lesiones, y compartimos consejos prácticos para mejorar la calidad de tu sueño. También discutimos cómo incorporar días de descanso activo en tu rutina para recuperarte sin perder el ritmo.",
            categoria: "Recuperación y Lesiones",
            numero_like: 210,
            numero_dislike: 8
        },
        {
            titulo_articulo: "10 Deportes Ideales para Mantenerte Activo a Cualquier Edad",
            usuario_escritor: "Sofía Martínez",
            descripcion: "Desde el yoga hasta el ciclismo, existen múltiples deportes que pueden adaptarse a diferentes niveles de condición física y edades. Este artículo presenta una lista de actividades que mejoran la salud cardiovascular, fortalecen los músculos y promueven el bienestar mental. También se incluyen consejos para comenzar sin riesgo de lesiones y recomendaciones para encontrar grupos locales con los que practicar.",
            categoria: "Deportes y Actividad Física",
            numero_like: 300,
            numero_dislike: 15
        },
        {
            titulo_articulo: "Entrenamiento Funcional: ¿Qué es y Cómo Puede Ayudarte?",
            usuario_escritor: "Juan Pérez",
            descripcion: "El entrenamiento funcional se centra en movimientos que imitan actividades cotidianas, como levantar objetos o subir escaleras, y está diseñado para fortalecer el núcleo y mejorar la estabilidad. Este artículo analiza cómo este tipo de entrenamiento puede beneficiar tanto a deportistas como a personas mayores que buscan mejorar su calidad de vida. Además, incluye ejercicios básicos que puedes hacer en casa con poco equipo.",
            categoria: "Fitness y Tendencias",
            numero_like: 245,
            numero_dislike: 10
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