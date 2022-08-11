const Tarea = require('./tarea');

class Tareas {
    _listado = {};

    get listarArreglo (){                           // get para retornar un nuevo arreglo que es listado
        const listado = []                         //Este arreglo se llena medienate la funcion object

 
        Object.keys(this._listado).forEach( key => {       // Metodo Object el cual extrae las llaves de un objeto osea _listado
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        
        return listado;
    }


    constructor(){
        this._listado = {}
    }

    borrarTarea(id = '' ) {
        if (this._listado[id]){
            delete this._listado[id];
        }
    }

    if

    cargarTareasFromArray ( tareas = [] ){ 

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea; 
        })
        
    }

    crearTarea ( desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }



    listadoCompleto()
    {
        
        this.listarArreglo.forEach( (tarea, i) => {
            const index = `${i + 1 }`.cyan;
            const {desc, completadoEn } = tarea;
            const estado = (completadoEn)
                         ? 'completada'.cyan
                         : 'Pendiente'.red;
            console.log(`${index} ${desc} :: ${estado}`)
                         
        })
    }

    listarPendientesyCompletadas (completadas = true)
    {
        let contador = 0;
        this.listarArreglo.forEach(tarea =>{
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                        ? 'Completadas'.cyan
                        : 'Pendiente'.red
            if(completadas){
                if(completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').cyan} ${desc} :: ${completadoEn.cyan}`)
                }
            }else {
                if(!completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').cyan} ${desc} :: ${estado}`)
                }

            }
        }
        )
    }

    toggleCompletadas (ids = []){

        ids.forEach(id => {
            const tarea =  this._listado[id];
            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()  // Genera la fecha 
            }
        });

        this.listarArreglo.forEach(tarea =>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        
        

        })
    }

}
module.exports = Tareas;


