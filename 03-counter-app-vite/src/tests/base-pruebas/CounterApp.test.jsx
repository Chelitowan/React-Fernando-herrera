import { CounterApp } from "../../CounterApp";
import { render, screen, fireEvent } from "@testing-library/react";




describe('Prueba en el <CounterApp/>', () => {

    test('debe de hacer match con el snapshot', () => {

        const initialValue = 10;

        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();



    });

    test('debe de mostrar el valor inicial el valor de 100 <CounterApp value={100}>', () => {

        render( <CounterApp value={ 100 } />);
        expect( screen.getByText(100) ).toBeTruthy();

    });

    test('debe de incrementar con el botón +1', () => {
        const initialValue = 10;
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('debe de decrementar con el botón -1', () => {
        const initialValue = 10;
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('debe de funcionar el botón de reset', () => {
        const initialValue = 10;
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('Reset') );
        expect( screen.getByText(initialValue) ).toBeTruthy();
    });

});
