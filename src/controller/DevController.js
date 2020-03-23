const axios = require("axios");
const Dev = require('../models/Dev');
const parseStringArray = require('../utils/ParseStringArray');
const { findConnectios } = require('../websocket');


module.exports = {

    async index(req, res) {
        let dev = await Dev.find();

        console.log("index");
        return res.json(dev);
        
    },


    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;// pega a requisição enviada pelo front 

        let dev = await Dev.findOne({ github_username });//Verifica se existe um usuario ja cadastrado

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = apiResponse.data; // desistrutura o response da api e pega somente as variaveis necessarias
            const techsArray = parseStringArray(techs); // trata de string pra array
            //Serve pra prgar as cordenadas 
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            //criar o documento no banco de dados 
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
            console.log("DEV", dev)


            // const sendSocketMessageTo = findConnectios(
            //     {latitude, longitude},
            //     techsArray,
            // )
            // console.log(sendSocketMessageTo);
        }



        return response.json(dev);
    },

    async delete(req, res) {

        await Dev.findByIdAndDelete(req.paramas._id).then("Deletado");

        return res.json({ message: "deletado" })

    }

}