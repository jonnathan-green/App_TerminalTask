const { v4:UnicoID} = require('uuid')


class Tarea {             // Todas las tareas siempre deben tener un ID unico y descripcion 

    id = '';
    desc = '';
    completadoEn = null

    constructor ( desc ) {       // Es lo que se ejecutara cuando tengamos una nueva instancia en la tarea

        this.id = UnicoID();
        this.desc  = desc;             // This = La instancia de la clase que se este usando 
        this.completadoEn = null;
    }
}



        module.exports = Tarea; 








































































