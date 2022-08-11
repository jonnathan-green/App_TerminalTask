require ('colors');
const { guardarDB, leerDB } = require('./helpers/guardaArchivo');
const Tareas = require('./models/tareas')
const {
    inquirerMenu,
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheklist
    } = require('./helpers/inquirer');

// const {mostrarMenu, pausa } = require('./helpers/mensajes');   Esta parte del codigo se hizo para mostrar como se hacia manualmente  
const main = async () =>{       // Funcion main, para poder utilizar el Async y Await

    let opt = '';
    const tareas = new Tareas(); // Nueva instancia 
    
        const tareasDB = leerDB();

        if(tareasDB){      // cargar tareas
            tareas.cargarTareasFromArray(tareasDB)
                
        }
       

        do{

        opt = await inquirerMenu();  // Imprime el Menu y retorna una opcion, MostrarMenu regresa una promesa, el AWAIT significa que se espere hasta que se tenga la resolucion de mostrarMenu y si no, no se continua, COMANDO ALT + CLIC Se dirije a la funcion

        switch (opt) {
            case '1':
                const desc = await  leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;
        
            case '2':
                tareas.listadoCompleto();
                break;

            case '3':
                tareas.listarPendientesyCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesyCompletadas(false)
            break;

            case '5':
                const ids = await mostrarListadoCheklist(tareas.listarArreglo)
                tareas.toggleCompletadas(ids)
            break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listarArreglo);
                if(id !=='0'){
                const ok = await confirmar('¿Estas seguro?');
                if (ok){
                    tareas.borrarTarea( id );
                    console.log('Terea borrada')
                }
            }
            break;
        }
    guardarDB(tareas.listarArreglo);
    // if( opt !== '0') await pausa() Esto era para hacerlo manualmente
       
        await pausa();

    } while ( opt !== '0') // Para que no sea un ciclo repetitivo se debe crear la promesa, lo cual lo renderiza 

   

   //pausa()
}


main();

// cd "C:\Users\WINDOWS10\Documents\Jonnathan Green\Cursos\N ode.js\Seccion5"


/*const tareas = new Tareas (); 
const tarea = new Tarea ('Comprar comida') //Requiere un argumento

tareas._listado[tarea.id] = tarea;
console.log(tareas)*/ // Prueba para que se muestre, que Tareas no es un arregla si no un objeto y se obtendra la llave y la descripcion de la tarea 


