
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
// import { getHeroeById } from "../../base-pruebas/08-imp-exp";

describe(' Pruebas en 09-promesas', () => {

    test('getHeroByIdAsync debe de retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect( hero ).toEqual({ 
                    id: 1, 
                    name: 'Batman', 
                    owner: 'DC' 
                });

                done();

            });

    });

    test('getHeroByIdAsync debe de obtener un error si el heroe no existe', (done) => {
    
        const id = 100;
        getHeroeByIdAsync( id )
            // .then( hero  => {

            //     expect( hero ).toBeFalsy();
            //     done(); 
            // })

            .catch( error => {
    
                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)

                done();
    
            });
    
    });


})




