const Dev = require("../models/Dev");
const parseStringArray = require('../utils/ParseStringArray');

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs} = req.query
        
        const techsArray = parseStringArray(techs);
        
        const dev = await Dev.find({
            //buscas as tecnologias conforme a query digitada
            techs: {
                $in: techsArray
            },
            //Faz a busca por localização
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },

        });

        return res.json({ dev})
    }
}