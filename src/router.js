const { Router } = require("express");
const axios = require("axios");
const DevController = require('./controller/DevController');
const searchController = require('./controller/SearchController');

const Dev = require('./models/Dev')

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/search', searchController.index);
routes.delete('/delete/:id', DevController.delete);


module.exports = routes;

