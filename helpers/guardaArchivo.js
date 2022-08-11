const fs = require('fs');
const path = require('path');

const archivo = ('./DB/data.json')

    const guardarDB = (data =>{
        fs.writeFileSync(archivo, JSON.stringify(data));
    })


const leerDB = () => {
    if( !fs.existsSync(archivo)){           // ocupar el path, que es ? la ruta del archivo, aca se revisa si existe la ruta de la db
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});     // enconding para que no regrese los bytes 
    const data = JSON.parse ( info )                               // Para obtener el arregloy no el string se debe hacer con el JSON Parse 

    /*console.log(data)*/
    return data;
}

    module.exports = {
        guardarDB,
        leerDB
    }