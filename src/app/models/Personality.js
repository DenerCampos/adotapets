const { Model, DataTypes } = require('sequelize');

class Personality extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize, //conexão
            paranoid: true
        });
    }

    static associate(models) { 
        this.belongsToMany(models.Pet, { foreignKey:  'personality_id', through: 'pets_personalities', as: 'pets'});
    }
}

module.exports = Personality;