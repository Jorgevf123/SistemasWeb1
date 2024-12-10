module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Ejercicios', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Usuarios',
                key: 'id'
            }
        }
    });
};
