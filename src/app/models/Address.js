const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            district: DataTypes.STRING,
            city: DataTypes.STRING,
            zipcode: DataTypes.STRING,

        }, {
            sequelize, //conexão
            paranoid: true
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
        //caso seja n para n
        //this.belongsToMany(models.User, { foreignKey: 'id_da_chave_secundaria', through: 'nome_da_tabela_que_liga_n_para_n', as: 'aplido'});
    }
}

module.exports = Address;