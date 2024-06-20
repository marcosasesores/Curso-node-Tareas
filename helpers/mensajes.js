require('colors');

const mostrarmenu = ( ) => {
    return new Promise(resolve => {
        console.clear();
        console.log("=============".green);
        console.log("Seleccione una opción".green);
        console.log("============= \n".green);

        console.log(`${'1.'.green} Crear una tarea`);
        console.log(`${'2.'.green} listar tareas`);
        console.log(`${'3.'.green} listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} completar tarea(s)`);
        console.log(`${'6.'.green} borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opcion: ', (entrada) => {
            console.log(entrada);
            readLine.close();
            resolve(entrada);
        })
    })
    

}

const pausa = () => {
    return new Promise (resolve => {
        const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (entrada) => {
                readLine.close();
                resolve();
            })
    }) 
    
}

module.exports={
    mostrarmenu,
    pausa
}