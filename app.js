require('colors');

const { guardarDB,leerDB } = require('./helpers/guardarArchivo');
const { inquireMenu, pausa, leerInput  } = require('./helpers/inquirer');

const Tareas  = require('./models/tareas');




const main = async()=> {
    
    console.log("Hola mundo");

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if (tareasDB){
        tareas.cargarTareasFromArr(tareasDB);
    }


    do{
         opt =  await inquireMenu();
        
         switch (opt) {
            case "1":
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);

                break;
            case "2":
                tareas.listadoCompleto();     
                break;
            case "3":
                tareas.listarPendientesCompletadas();
                break;
            case "4":
                tareas.listarPendientesNOCompletadas();
                break;
            case "5":
                
                break;
            case "6":
                
                break;
            case "0":
                
                break;
         }

         guardarDB(tareas.listadorarr);

        await pausa();

    }while(opt !=='0');

    

}



main();