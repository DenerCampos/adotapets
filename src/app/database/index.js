const Sequelize = require('sequelize');
const databaseConfig = require('../../config/database');

//todos os models
const User = require('../models/User');
const Address = require('../models/Address');
const Tutor = require('../models/Tutor');
const Personality = require('../models/Personality');
const Pet = require('../models/Pet');
const Photo = require('../models/Photo');

const models = [User, Address, Tutor, Personality, Pet, Photo];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
        models.map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database();