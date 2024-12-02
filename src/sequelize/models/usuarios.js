const { DataTypes } = require('sequelize');
const validator = require('validator');  // Para la validación de correos electrónicos

module.exports = (sequelize) => {
    const Usuario = sequelize.define('Usuario', {
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        correo_electronico: { 
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true,
            validate: {
                isEmail: { // Usando el validador incorporado
                    msg: "El correo electrónico no es válido"
                },
            }
        },
        nombre: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        contrasena: { 
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                minLength(value) {
                    if (value.length < 8) {
                        throw new Error('La contraseña debe tener al menos 8 caracteres');
                    }
                },
                hasSpecialChar(value) {
                    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])/;
                    if (!passwordRegex.test(value)) {
                        throw new Error('La contraseña debe contener al menos un carácter especial');
                    }
                }
            }
        },
        es_admin: { 
            type: DataTypes.BOOLEAN, 
            defaultValue: false 
        },
        favoritos: { 
            type: DataTypes.BOOLEAN, 
            defaultValue: false 
        },
        fecha_creacion: { 
            type: DataTypes.DATE, 
            defaultValue: DataTypes.NOW 
        }
    });

    return Usuario;
};


/*const fs = require('fs');
const path = require('path');
const { DataTypes } = require('sequelize');

const defaultImagePath = path.join('public', 'images', 'img1.jpg');
const defaultImageBuffer = fs.readFileSync(defaultImagePath);

module.exports = (sequelize) => {
    sequelize.define('articulos_comunidad', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        titulo_articulo: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        imagen_articulo: {
            allowNull: true,
            type: DataTypes.BLOB('long'),
            defaultValue: defaultImageBuffer, 
        },
        usuario_escritor: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        descripcion: {
            allowNull: false,
            type: DataTypes.STRING(1000),
        },
        categoria: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        numero_like: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        numero_dislike: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    });
};
*/