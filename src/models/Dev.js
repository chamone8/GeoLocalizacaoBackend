const mongoose = require("mongoose");

const DevSchema = new mongoose.Schema({


    nome: {
        type: String
        
    },
    github_username: {
        type: String
    },
    bio: {
        type: String
    },
    avatar_url: {
        type: String
    },
    techs: {
        type: [String]
    },


});


module.exports = mongoose.model("Dev", DevSchema);
