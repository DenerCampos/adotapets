const { Model, DataTypes } = require('sequelize');

class Pet extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
            gender: DataTypes.STRING,
            description: DataTypes.STRING(2000),
            adopted: DataTypes.BOOLEAN,
            adopted_at: DataTypes.DATE
        }, {
            sequelize,
            paranoid: true
        });
    }

    static associate(models) { 
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.Tutor, { foreignKey: 'tutor_id', as: 'tutor' });
        this.hasMany(models.Photo, { foreignKey: 'pet_id', as: 'photos' });
        this.belongsToMany(models.Personality, { foreignKey:  'pet_id', through: 'pets_personalities', as: 'personalities'});
    }
}

module.exports = Pet;