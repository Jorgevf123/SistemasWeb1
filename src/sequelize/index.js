const {Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');
const logger = require('../logger');
const { error } = require('winston');
const fs = require('fs');
const path = require('path');
const validator = require('validator');  // Para la validación de correos electrónicos
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'sequelize/db.sqlite'
});
//AÑADIMOS modelos
const modelDefiners = [
    require('./models/articulos_comunidad.model'),
    require('./models/usuarios.js'),
    require('./models/ejercicios.js')

];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

const images= [
    path.join(__dirname, '../public/images/img2.jpg'),
    path.join(__dirname, '../public/images/img3.jpg'),
    path.join(__dirname, '../public/images/img4.jpg'),
    path.join(__dirname, '../public/images/img5.jpg'),
    path.join(__dirname, '../public/images/img6.jpg'),
    path.join(__dirname, '../public/images/img7.jpg'),
    path.join(__dirname, '../public/images/img8.jpg'),
    path.join(__dirname, '../public/images/img9.jpg'),
    path.join(__dirname, '../public/images/img10.jpg'),
    path.join(__dirname, '../public/images/img1.jpg'),
]
const defaultImageBuffers = images.map(imagePath => fs.readFileSync(imagePath));

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
            numero_dislike: 12,
            imagen_articulo: defaultImageBuffers[0]
        },
        {
            titulo_articulo: "Cómo Crear una Rutina de Entrenamiento Personalizada",
            usuario_escritor: "Marta López",
            descripcion: "No todos los cuerpos son iguales, y por eso un plan de entrenamiento debe adaptarse a tus objetivos y condiciones físicas. En este artículo, aprenderás cómo definir metas realistas, elegir ejercicios adecuados y distribuir tus entrenamientos a lo largo de la semana para maximizar resultados. Además, se incluye una sección especial sobre cómo evitar el estancamiento y mantener la motivación a largo plazo.",
            categoria: "Ejercicio y Entrenamiento",
            numero_like: 178,
            numero_dislike: 9,
            imagen_articulo: defaultImageBuffers[1]
        },
        {
            titulo_articulo: "La Importancia del Descanso en el Rendimiento Deportivo",
            usuario_escritor: "David Hernández",
            descripcion: "¿Sabías que el descanso es tan importante como el entrenamiento? Durante el sueño, el cuerpo repara tejidos, consolida la memoria muscular y regula hormonas como la testosterona y el cortisol. En este artículo, exploramos la relación entre el descanso y la prevención de lesiones, y compartimos consejos prácticos para mejorar la calidad de tu sueño. También discutimos cómo incorporar días de descanso activo en tu rutina para recuperarte sin perder el ritmo.",
            categoria: "Recuperación y Lesiones",
            numero_like: 210,
            numero_dislike: 8,
            imagen_articulo: defaultImageBuffers[2]
        },
        {
            titulo_articulo: "10 Deportes Ideales para Mantenerte Activo a Cualquier Edad",
            usuario_escritor: "Sofía Martínez",
            descripcion: "Desde el yoga hasta el ciclismo, existen múltiples deportes que pueden adaptarse a diferentes niveles de condición física y edades. Este artículo presenta una lista de actividades que mejoran la salud cardiovascular, fortalecen los músculos y promueven el bienestar mental. También se incluyen consejos para comenzar sin riesgo de lesiones y recomendaciones para encontrar grupos locales con los que practicar.",
            categoria: "Deportes y Actividad Física",
            numero_like: 300,
            numero_dislike: 15,
            imagen_articulo: defaultImageBuffers[3]
        },
        {
            titulo_articulo: "Entrenamiento Funcional: ¿Qué es y Cómo Puede Ayudarte?",
            usuario_escritor: "Juan Pérez",
            descripcion: "El entrenamiento funcional se centra en movimientos que imitan actividades cotidianas, como levantar objetos o subir escaleras, y está diseñado para fortalecer el núcleo y mejorar la estabilidad. Este artículo analiza cómo este tipo de entrenamiento puede beneficiar tanto a deportistas como a personas mayores que buscan mejorar su calidad de vida. Además, incluye ejercicios básicos que puedes hacer en casa con poco equipo.",
            categoria: "Fitness y Tendencias",
            numero_like: 245,
            numero_dislike: 10,
            imagen_articulo: defaultImageBuffers[4]
        },
        {
            titulo_articulo: "La Hidratación Perfecta para Deportistas",
            usuario_escritor: "María Fernández",
            descripcion: "Mantenerse hidratado es crucial durante cualquier actividad física. En este artículo, exploramos la importancia de la hidratación antes, durante y después del ejercicio. Descubre cuánta agua debes consumir según tu peso y el nivel de intensidad de tu entrenamiento, y aprende a identificar signos de deshidratación. También analizamos el papel de las bebidas isotónicas y cuándo usarlas.",
            categoria: "Nutrición Deportiva",
            numero_like: 150,
            numero_dislike: 70,
            imagen_articulo: defaultImageBuffers[5]
        },
        {
            titulo_articulo: "Los Mejores Estiramientos para Evitar Lesiones",
            usuario_escritor: "Juan López",
            descripcion: "Los estiramientos no solo mejoran la flexibilidad, sino que también ayudan a prevenir lesiones y mejorar el rendimiento deportivo. Este artículo te guía a través de una rutina de estiramientos dinámicos y estáticos que puedes realizar antes y después de tu entrenamiento. Incluye consejos sobre la duración ideal y cómo adaptarlos según tu nivel de actividad.",
            categoria: "Prevención de Lesiones",
            numero_like: 220,
            numero_dislike: 5,
            imagen_articulo: defaultImageBuffers[6]
        },
        {
            titulo_articulo: "Correr: Beneficios y Técnicas para Evitar el Desgaste",
            usuario_escritor: "Pedro Martínez",
            descripcion: "Correr es una de las actividades físicas más populares, pero hacerlo correctamente es fundamental para evitar problemas como lesiones en las rodillas. En este artículo, exploramos técnicas de carrera adecuadas, la importancia de un buen calzado y cómo elegir la superficie ideal para correr. También abordamos estrategias para aumentar gradualmente la distancia sin riesgos.",
            categoria: "Ejercicio y Entrenamiento",
            numero_like: 300,
            numero_dislike: 12,
            imagen_articulo: defaultImageBuffers[7]
        },
        {
            titulo_articulo: "La Clave del Éxito: Planificación de Comidas para Deportistas",
            usuario_escritor: "Carolina García",
            descripcion: "Una nutrición adecuada es esencial para alcanzar tus metas deportivas. Este artículo ofrece una guía paso a paso para planificar comidas balanceadas que proporcionen la energía y los nutrientes necesarios. Aprende a calcular tus necesidades calóricas, elegir fuentes saludables de carbohidratos y proteínas, y planificar snacks pre y post-entrenamiento.",
            categoria: " Nutrición Deportiva",
            numero_like:  185,
            numero_dislike: 10,
            imagen_articulo: defaultImageBuffers[8]
        }, {
            titulo_articulo: "Deportes en Equipo: Cómo Mejoran tu Salud Mental y Física",
            usuario_escritor: "Sofía Ramírez",
            descripcion: "Practicar deportes en equipo no solo fortalece tu cuerpo, sino también tu mente. Este artículo explora los beneficios psicológicos de las actividades grupales, como reducir el estrés, mejorar la autoestima y fomentar habilidades sociales. También te ayudamos a elegir el deporte en equipo más adecuado según tus intereses y condición física.",
            categoria: "Salud Mental y Deporte",
            numero_like: 270,
            numero_dislike: 8,
            imagen_articulo: defaultImageBuffers[9]
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
async function resetUsuarios() {
    const count = await sequelize.models.Usuario.count();
    const usuarios = [
        {
            correo_electronico: "usuario1@example.com",
            nombre: "Juan Perez",
            contrasena: bcrypt.hashSync("contraseñaSegura123!", 10), // Hasheando la contraseña
            es_admin: false,
            favoritos : "[1, 2, 7, 5, 9 ]",
            imagen_perfil: "images/opcion1.png" 
        },
        {
            correo_electronico: "admin@example.com",
            nombre: "Admin",
            contrasena: bcrypt.hashSync("adminPassword#2024", 10), // Hasheando la contraseña
            es_admin: true,
            imagen_perfil: "images/fotoadmin.png",
        },
    ];

    if (count === 0) {
        try {
            await sequelize.models.Usuario.bulkCreate(usuarios);
            logger.info('Usuarios iniciales creados');
        } catch (error) {
            logger.error('Error al crear los usuarios:', error);
        }
    } else {
        logger.info('La DB de usuarios ya estaba inicializada');
    }
}

async function resetEjercicios() { 
    const ejercicios= [
        {
            titulo:"Piernas",
            descripcion: "Piernas",
            video:"images/1733828574722.jpg",
            autor:"Jorge Vázquez"
        },{
            titulo:"Piernas",
            descripcion: "Prueba Piernas",
            video:"images/1733828574722.jpg",
            autor:"Jorge Vázquez"
         },{
            titulo:"Piernas",
            descripcion: "Piernas",
            video:"images/1733828574722.jpg",
            autor:"Pepe"
        },{
            titulo:"Pecho",
            descripcion: "Pecho",
            video:"images/Jalon_al_pecho.mp4",
            autor:"Juan"
        }
    ];
    await sequelize.models.Ejercicios.bulkCreate(ejercicios);
}

async function reset(){
    try{
        await sequelize.sync({force: true}); // false para que no se reinice la DB
        await resetArticulos();
        await resetUsuarios();
        await resetEjercicios();
        console.log('Base de datos sincronizada correctamente.');
        
    }catch{
        console.error('Error al sincronizar la base de datos:', error);
        console.error(error.stack);
    }

}

reset();

module.exports = sequelize;