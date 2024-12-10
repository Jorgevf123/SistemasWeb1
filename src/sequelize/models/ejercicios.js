const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Ejercicios', {
        id: {
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        video: {
            type: DataTypes.STRING,
            allowNull: true
        },
        autor:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};
