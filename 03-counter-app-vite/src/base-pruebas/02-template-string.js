


export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Chelitowan';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );