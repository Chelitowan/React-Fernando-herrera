import { getUser } from '../../base-pruebas/05-funciones';
import { getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

         expect( testUser ).toEqual( user );
    });


    test ('getUsuarioActivo debe de retornar un objeto', () => {
        
        const name = 'Chelitowan';

        const user = getUsuarioActivo( name );

        expect( user ).toEqual({
            
            uid: 'ABC567',
            username: name
        });

    });

});

