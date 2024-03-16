// template string

const nombre = 'Marcelo';
const apellido = 'Ferreyra';

// const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;


console.log(nombreCompleto);


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `este es un texto: ${ getSaludo(nombre)}`)