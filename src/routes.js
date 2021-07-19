const Router = require('express');
const UserController = require('./app/controllers/UserController');
const AddressController = require('./app/controllers/AddressController');
const PersonalityController = require('./app/controllers/PersonalityController');
const PetController = require('./app/controllers/PetController');
const TutorController = require('./app/controllers/TutorController');

const routes = new Router();

routes.get('/users/:user_id', UserController.getById);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressController.store);

routes.post('/personality', PersonalityController.store);

routes.get('/pets/:pet_id', PetController.getById);
routes.post('/pets', PetController.store);

routes.post('/tutors', TutorController.store);

routes.get('/', (req, res) => {
    res.json({message: 'Hello Baby'});
});


module.exports =  routes;