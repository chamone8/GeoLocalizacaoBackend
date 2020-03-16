const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema")

const DevSchema = new mongoose.Schema({


    name: {
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
     type: Array
    },
    location:{
        type: PointSchema,
        index: '2dsphere'
    }


});


module.exports = mongoose.model("Dev", DevSchema);
