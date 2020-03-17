module.exports = function parseStringArray(arrayIsString){
    return  arrayIsString.split(',').map(tech => tech.trim()); 
}