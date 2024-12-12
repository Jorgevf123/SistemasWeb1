const { DataTypes } = require('sequelize');
const validator = require('validator'); // Para la validación de correos electrónicos

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
        baneado: { // Nueva columna
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        favoritos: {
            allowNull: true,
            type: DataTypes.JSON,
            defaultValue: [],
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        imagen_perfil: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "images/Fotoperfilpordefecto.png"
        }
    });

    return Usuario;
};
