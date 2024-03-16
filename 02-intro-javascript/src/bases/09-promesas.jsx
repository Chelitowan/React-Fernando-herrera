import { getHeroeById } from './bases/08-import-export';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {  
//         // Tarea
//         const heroe = getHeroeById(2);
//         // resolve: se ejecuta cuando la promesa es exitosa
//         resolve(heroe);
//         // reject: se ejecuta cuando la promesa falla
//         // reject('No se pudo encontrar el heroe');

//     }, 2000)	
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
             setTimeout(() => {  
                // Tarea
                const heroe = getHeroeById(id);
                // resolve: se ejecuta cuando la promesa es exitosa
                // resolve(heroe);
                // reject: se ejecuta cuando la promesa falla
                // reject('No se pudo encontrar el heroe');
                if (heroe) {
                    resolve(heroe);
                } else {
                    reject('No se pudo encontrar el heroe');
                }
            }, 2000)	
        });

        
}

getHeroeByIdAsync(1)
    .then( heroe => console.log('heroe', heroe))//.then(console.log) es lo mismo
    .catch( err => console.warn(err));// .catch(console.warn) es lo mismo
    