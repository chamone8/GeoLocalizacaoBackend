const { Router } = require("express");
const DevController = require('./controller/DevController');
const searchController = require('./controller/SearchController');



const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/search', searchController.index);
routes.delete('/delete/:id', DevController.delete);

//routes.put('/update/:id', DevController.update);

module.exports = routes;

