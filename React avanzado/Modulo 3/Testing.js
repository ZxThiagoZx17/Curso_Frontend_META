// Para garantizar que la aplicacion funcione segun lo previsto, tenemos varias maneras de hacerlo:

// Test manuales: Podemos interacturar con las diferentes partes de la aplicacion nosotros mismos
// Test automaticos: Estos son diseñados para permitir encontrar defectos o errores antes de la entrega al cliente

// Las pruebas garantizan la calidad del software que se desarrolla, asi mismo hay detalles a tener en cuenta al implementarlas:
// - Evitar incluir detalles de la implementacion de los componentes (React es solo una herramienta, los usuarios no deben saberlo)
// - Sus pruebas funcionan con nodos DOM reales
// - Que se mantengan a largo plazo 

// Para esto tenemos JEST Y React testing library que vienen ya instalado cuando creamos un proyecto
// JEST es un ejecutador de pruebas que permite acceder a un DOM artificial llamado JSDOM Ideal para simulaciones y test de funciones, logica de negocio, mocks, etc...

// React testing library nos permite probar componentes simulando las iteracciones del usuario sin necesidad de dar detalles de la implementacion del componente (Este usa JEST internamente)

// Jest → Para testear lógica de negocio y funciones puras.
// React Testing Library → Para testear UI, renderizado y eventos del usuario.

// Hacemos una prueba con React testing library en nuestro proyecto el ComponenteTest'/>

// Dejamos varios conceptos claves alla y aca:
// 1️. test() → Función de Jest donde definimos la prueba.
// 2️. render() → Renderiza el componente en un entorno de prueba.
// 3️. jest.fn() → Crea una función simulada para eventos.
// 4️. screen.getByText() / getByRole() / getByTestId() → Buscan elementos en el DOM.
// 5️. fireEvent / userEvent → Simulan eventos como clics o cambios.
// 6️. expect() → Define lo que esperamos que pase.
// 7️. npm test → Ejecuta todos los tests.