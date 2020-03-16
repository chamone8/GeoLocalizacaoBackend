const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const router = require('./router')

mongoose.connect("mongodb+srv://admin:root@node-v001-nwj0m.mongodb.net/GeoLocalizacaoCadstroCliente?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(router);




app.listen(31, function(){
    console.log("conectado");
});