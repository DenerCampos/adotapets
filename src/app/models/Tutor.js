const { Model, DataTypes } = require('sequelize');

class Tutor extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.INTEGER,
            telephone: DataTypes.STRING

        }, {
            sequelize, //conexão
            paranoid: true
        });
    }

    static associate(models) {
        this.hasMany(models.Pet, { foreignKey: 'tutor_id', as: 'pet'});
    }
}

module.exports = Tutor;