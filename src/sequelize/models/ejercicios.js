const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Ejercicios = sequelize.define('Ejercicios', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        video: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aprobado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Inicialmente no aprobado
        },
        comentarios: {
            type: DataTypes.JSON, // Nueva columna para los comentarios
            allowNull: true,
            defaultValue: [], // Lista vacía al inicio
        },
    }, {
        timestamps: true, // Para createdAt y updatedAt
    });
    return Ejercicios;
};


