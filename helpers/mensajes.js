const { rejects } = require('assert');
const { readlink } = require('fs');

require ('colors');

const mostrarMenu = () => {

    return new Promise (resolve => {

        console.clear();
        console.log('======================='.cyan);
        console.log('Seleccione una opcion'.brightMagenta);
        console.log('========================\n'.cyan)  

        console.log(`${'1.'.cyan} Crear tarea`);
        console.log(`${'2.'.cyan} Lista tareas`);
        console.log(`${'3.'.cyan} Listar tareas completas`);
        console.log(`${'4.'.cyan} Listar tareas pedientes`);
        console.log(`${'5.'.cyan} Completar tareas`);
        console.log(`${'6.'.cyan} Borrar tareas`);
        console.log(`${'7.'.cyan} Salir \n`);

        const readLine = require('readline').createInterface ({
                input : process.stdin,
                output: process.stdout
            })

        readLine.question('Seleccione una opcion: ', (opt) => {  // lo que es escriba en el argumento OPT se devolvera en el resolve
                readLine.close();
                resolve(opt);

            })
    });
}


const pausa = () => {

    return new Promise(resolve =>{

        const readLine = require('readline').createInterface ({
            input : process.stdin,
            output: process.stdout
        })
        
        readLine.question(`Por favor presiones ${'ENTER'.cyan}, para continuar`, (opt) =>{
            readLine.close();
            resolve();
        })

    })



}

module.exports = {
    mostrarMenu,
    pausa
}



