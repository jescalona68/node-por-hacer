// const opts = {
//     descripcion: {
//         alias: 'd'
//     }
// };
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea x hacer'

}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como compleatdo o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}