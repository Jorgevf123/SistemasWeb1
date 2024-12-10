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
    }, {
        timestamps: true, // Para createdAt y updatedAt
    });
    return Ejercicios;
};


