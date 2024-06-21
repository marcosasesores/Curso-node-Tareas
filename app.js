require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquireMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');




const main = async () => {

    console.log("Hola mundo");

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if (tareasDB) {
        tareas.cargarTareasFromArr(tareasDB);
    }


    do {
        opt = await inquireMenu();

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
                const ids = await mostrarListadoCheckList(tareas.listadorarr);
                tareas.toggleCompletadas(ids);

                break;
            case "6":
                const id = await listadoTareasBorrar(tareas.listadorarr);
                if (id !== 0) {
                    const ok = await confirmar('Estas seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('¿Tarea borrada correctamente!')
                    }
                }
                break;
            case "0":

                break;
        }

        guardarDB(tareas.listadorarr);

        await pausa();

    } while (opt !== '0');



}



main();