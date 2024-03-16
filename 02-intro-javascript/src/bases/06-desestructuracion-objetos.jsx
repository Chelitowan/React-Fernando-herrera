// desestructuracion

const persona = {
    nombre:'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre} = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const retornaPersona = ({nombre, edad, clave, rango = 'Capitan'}) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad
    }
}

const avenger = retornaPersona( persona );

console.log(avenger);

// tarea
// 1.desestructurar

const useContext = ({nombre, edad, clave, rango = 'Capitan'}) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng} = useContext( persona );

console.log(nombreClave, anios);
console.log(latlng);