const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize, //conexão
            paranoid: true
        });
    }

    static associate(models) { 
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
    }
}

module.exports = User;