const socket = require('socket.io');
const parseStringAsArray = require('./utils/ParseStringArray');
const calculadoraDistance = require('./utils/CalculateDistace');

const connection = [];

exports.setupWebSocket = (server) => {
    const io = socket(server); // o socket vem do const socket = require('socket.io');

    io.on('connection', socket =>{
        const {latitude, longitude, techs} = socket.handshake.query;

        connection.push({
            id: socket.id,
            coordinates:{
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs)
        });


    });

};

exports.findConnectios = (coordinates,techs) => {
    return connection.filter(connection => {
        return calculadoraDistance(coordinates, connection.coordinates) < 10
        && connection.techs.some(item => techs.includes(item))
    })
}