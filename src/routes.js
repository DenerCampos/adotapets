const Router = require('express');
const UserController = require('./app/controllers/UserController');
const AddressController = require('./app/controllers/AddressController copy');

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users/:user_id', UserController.getById);

routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/', (req, res) => {
    res.json({message: 'Hello Baby'});
});


module.exports =  routes;