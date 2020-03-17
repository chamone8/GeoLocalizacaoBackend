const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const router = require('./router')


//conexão com o banco
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://admin:root@node-v001-nwj0m.mongodb.net/GeoLocalizacaoCadstroCliente?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());//pra entender quando o corpo for json
app.use(router);//definindo a rota




app.listen(31, function(){
    console.log("conectado");
});