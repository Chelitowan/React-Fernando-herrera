describe('Pruebas en el archivo demo.test.jsx', () => {
    
    test('deben ser iguales los strings', () => {
        // 1. inicialización
        const message1 = 'hola mundo';

        // 2. estimulo
        const message2 = 'hola mundo';

        // 3.observar el comportamiento esperado
        expect ( message1 ).toBe( message2 )
    })
})



test('Esta prueba no debe fallar', () => {
    // 1. inicialización
    const message1 = 'hola mundo';

    // 2. estimulo
    const message2 = message1.trim();

    // 3.observar el comportamiento esperado
    expect ( message1 ).toBe( message2 )
})