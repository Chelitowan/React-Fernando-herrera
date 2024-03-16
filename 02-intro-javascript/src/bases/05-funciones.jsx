// funciones en js

const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

// funcion flecha
const saludar3 = (nombre) => `Hola, ${nombre}`;
// funcion flecha sin parametros
const saludar4 = () => `Hola Mundo`;


console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

// objeto implicito lleva () por fuera de las llaves {}
const getUser = () => ({
    
        uid: 'ABC123',
        username: 'El_Papi1502'
    });


const user = getUser();
console.log(user);

// tarea 
// 1. transformar a funcion flecha
// 2. retornar un objeto implicito
// 3. probar
// function getUsuarioActivo(nombre) {
//     return {
//          uid: 'ABC567',
//          username: nombre
//     }
// };


// tarea funcion flecha resuelta
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Marcelo');
console.log(usuarioActivo);