const { Model, DataTypes } = require('sequelize');

class Photo extends Model {
    static init(sequelize) {
        super.init({
            path: DataTypes.STRING,
            main: DataTypes.BOOLEAN

        }, {
            sequelize, //conexão
            paranoid: true
        });
    }

    static associate(models) {
        //this.belongsTo(models.Pet, { foreignKey: 'photo_id', as: 'pet'});
    }
}

module.exports = Photo;