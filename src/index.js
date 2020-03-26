const express = require("express");
const mongoose  = require("mongoose");
const router = require('./router');
// const http = require('http');
const cors = require('cors');


const app = express();
const server = require('http').Server(app); // const server = http.Server(app)  seriam a mesma coisa



//conexão com o banco
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://admin:root@node-v001-nwj0m.mongodb.net/GeoLocalizacaoCadstroCliente?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// o cors é pra api e pro frontend axios
app.use(cors());

app.use(express.json());//pra entender quando o corpo for json
app.use(router);//definindo a rota




server.listen(process.env.PORT || 31);