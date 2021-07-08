const Router = require('express');
const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.post('/users', UserController.store);

routes.get('/', (req, res) => {
    res.json({message: 'Hello Baby'});
});

module.exports =  routes;