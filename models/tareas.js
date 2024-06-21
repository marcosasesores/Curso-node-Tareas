// archivo de tareas.js
const Tarea = require("./tarea")

class Tareas {

    _listado = {};

    get listadorarr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor() {
        this._listado = {};
    }
   
    borrarTarea(id =''){
        if(this._listado[id]){
            delete this._listado[id]
        }
    }
    
    cargarTareasFromArr(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        });
    }

    listadoCompleto() {

        for (var i = 0; i < this.listadorarr.length; i++) {
            if (this.listadorarr[i].CompletadoEn) {
                console.log((i+1 + ". ").toString().green + this.listadorarr[i].desc+" :: "+"Completada".green);
            }else if (this.listadorarr[i].CompletadoEn == null){
                console.log((i+1 + ". ").toString().green + this.listadorarr[i].desc +" :: "+"Pendiente".red);
            }
        }

    }

    listarPendientesCompletadas(){
        // Obtener la fecha actual
        const today = new Date();

        // Formatear la fecha como un string legible
        const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
        for (var i = 0; i < this.listadorarr.length; i++) {
            if (this.listadorarr[i].CompletadoEn ) {
                console.log((i+1 + ". ").toString().green + this.listadorarr[i].desc+" :: "+"Completada".green+" :: "+formattedDate);
            }
        }
    }


    listarPendientesNOCompletadas(){
        for (var i = 0; i < this.listadorarr.length; i++) {
            if (this.listadorarr[i].CompletadoEn == null) {
                console.log((i+1 + ". ").toString().green + this.listadorarr[i].desc+" :: "+"Pendiente".red);
            }
        }
    }



    crearTarea(desc = "") {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    toggleCompletadas (ids=[]){
        ids.forEach(id =>{
            const tarea = this._listado[id];
            if(!tarea.CompletadoEn){
                tarea.CompletadoEn= new Date().toISOString()
            }
        });

        this.listadorarr.forEach(tarea => {
            if (!ids.includes(tarea.id)){
                  this._listado[tarea.id].CompletadoEn= null;
                
            }
        })

    }

}



module.exports = Tareas;