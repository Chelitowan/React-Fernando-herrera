
import { usContext } from '../../base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {

    test('debe de retornar un string y un numero', () => {

        const usContext = {
        
            nombreClave: 'America',
            anios: 30,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const context = usContext();

        expect( usContext ).toEqual( user );
        expect( edad ).toEqual( 30 );

    });



});
