// archivo de tarea.ja
const {v4: uuid4} =  require("uuid");

class Tarea{

    id = "";
    desc= "";
    CompletadoEn = null;

    constructor(desc){
        this.id = uuid4();
        this.desc = desc;
        this.CompletadoEn = null;

    }


}



module.exports= Tarea;