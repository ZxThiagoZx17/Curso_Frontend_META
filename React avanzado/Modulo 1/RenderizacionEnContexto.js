// El contexto nos trae grandes ayudas y beneficios a la hora de usar un estado/propiedad en varios componentes, sin embargo, puede causar renderizaciones innesesarias en componentes donde los valores que toma del contexto no se modifican

// Esto nos puede pasar factura en terminos de rendimiento debido a los procesos innesesarios, estos serian notorios en contextos que sirven a demasiados componentes debido a que cuando un solo valor del contexto cambia, todos los componentes que se sirven de el se volveran a renderizar

// Hay una funcion de optimizacion llamada React.memo, lo que hace es dejar de renderizar un componente si sus props no cambian, (son Props, NO ESTADO NI PROPIEDADES), eso significa que unicamente serviria en componentes que devuelven los mismo asi los valores del contexto cambien, asi seria la sintaxis si nuestro componentes reciben valores de estado mediante props:
const Header = React.memo(({ theme }) => {
    console.log("Renderizando Header");
    return <h1 style={{ color: theme === "light" ? "black" : "white" }}>Header</h1>;
  });

// React.memo vendria a ser una tecnica de memorizacion, lo que hace es almacenar en cache los valores de retorno de algunas funciones, asi no se tiene que volver a llamar nuevamente dicha funcion, en este caso, se mostrara el ultimo resultado almacenado CON ESE MISMO PROP

// Como React.memo no nos soluciona el problema de la rerenderizacion, hay varias maneras de tratarlo:
// 1. Hacer varios contextos con partes mas especificas, de esa manera  no abarcaremos tantos componentes
// 2. Usar React.memo junto con props, en ese caso se tendrian que pasar los estados/propiedades como props a componentes hijos
// 3. Uso de librerias como Zustand o Jotai para el manejo del estado global y evitar rerendirizaciones

// UseMemo()
// UseMemo es un Hook que memoriza el resultado de una funcion costosa (Calculo o computacion pesada), recibe 2 parametros, la funcion costosa y un array de dependencias, en base a estas se decide si hay necesidad de recalcular o no:
const App = () => {
    const [contador, setContador] = React.useState(0);
    const [numero, setNumero] = React.useState(5);
  
    const factorial = React.useMemo(() => {
      return calcularFactorial(numero);
    }, [numero]); // Solo recalcula si 'numero' cambia
  
    return (
      <div>
        <h1>Factorial: {factorial}</h1>
        <button onClick={() => setContador(contador + 1)}>Incrementar contador ({contador})</button>
        <button onClick={() => setNumero(numero + 1)}>Cambiar número ({numero})</button>
      </div>
    );
  };

// En este ejemplo se ve el uso de useMemo, la funcion se recalculara si 'numero' cambia, sino estuviera useMemo cada vez que se cambie el estado contador, se renderizara de nuevo todo el componente y se hara de nuevo el calculo del factorial asi no haya cambiado su valor, cabe aclarar que es bueno usarlo en calculos o funciones realmente complejas, en casos simples puede resultar mas costoso en terminos de rendimiento usarlo que volver a recalcular la funcion.

// React en su DOM Virtual renderiza de nuevo todo el componente pero en la comparacion con el DOM real el ya sabe que tiene que renderizar y que tiene que dejar como estaba

// React.memo es para todo el componente, useMemo() para las funciones dentro del componente

// LA COMPARACION DE OBJETOS EN JS ES POR REFERENCIA, por lo tanto, asi tengan los mismos valores en su contenido, estos no son iguales

const obj_1 = {nombre: 'daniel'}
const obj_2 = {nombre: 'daniel'}

console.log(obj_1 === obj_2) //false

// Esto puede ocasionar que en varias ocasiones asi no se cambie textualmente el valor en un objeto, React.memo no pueda evitar que no renderize de nuevo el componente