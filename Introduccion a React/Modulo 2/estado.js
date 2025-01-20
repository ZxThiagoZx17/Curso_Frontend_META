// Se puede decir que el estado son datos internos del componente que determinan el comportamiento del mismo

// Almacena los datos que hacen que afecte el comportamiento del componente, gracias a los estados los componentes se sincronizan entre si y funcionan segun lo esperado

// Esto funciona como una reaccion en cadena si un componente cambia su estado, sus componentes hijos lo haran tambien, un componente padre envia su estado a los hijos mediante props

// Cuando se crea un componente se obtiene un estado inicial, hay componente de aplicacion que NO TIENEN ESTADO, por el otro lado estan los componenetes que codifican y trabajan con variables de estado

// Para definir si se debe no usar estado simplemente tiene que funcionar bien sin tener su estado propio
// Cuando es indispensable el estado en el componente se debe incluir

// Hay casos en los que es mejor pasar el estado de padre a hijo mediante accesorios

// Aqui viene el tema de hooks que ya lo explicamos dando un ejemplo con useState y useRef

// A medida de que la complejidad de la aplicacion aumenta, tambien se aumenta la complejidad del estado que se administra a traves de componentes

// Tenemos el metodo de taladrado de props:
// Es el proceso de pasar datos (props) de un componente padre a un componente hijo y luego a los hijos de este, incluso si algunos componentes intermedios no necesitan esa información; un ejemplo seria este:

function App() {
    const data = "Hola desde App";

    return <Nivel1 data={data} />;
}

function Nivel1({ data }) {
    return <Nivel2 data={data} />;
}

function Nivel2({ data }) {
    return <Nivel3 data={data} />;
}

function Nivel3({ data }) {
    return <h1>{data}</h1>;
}

// Este metodo es bueno pero cuando se tienen muchos componentes anidados puede llegar a ser complejo y dificil de mantener
// Se produce una elevacion de estados que es basicamente subir de nivel un componente

// Cuando tenemos muchos estados globales y nuestra app es compleja lo mejor que podemos hacer es usar contextAPI o librerias de administracion de estados con redux o Zustand

// En contextAPI se pueden pasar los datos de un componente padre a un componente hijo y consumirlos sin importar cuan añadido este, se usa creando un contexto con createContext() y consumiendolo en el componente hijo asi con useContext:
import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

function App() {
    const data = "Hola desde Context";

    return (
        <DataContext.Provider value={data}>
            <Nivel1 />
        </DataContext.Provider>
    );
}

function Nivel1() {
    return <Nivel2 />;
}

function Nivel2() {
    return <Nivel3 />;
}

function Nivel3() {
    const data = useContext(DataContext);
    return <h1>{data}</h1>;
}

// Tenemos otro hook interesante llamado useReducer, lo que hace es que en vez de actualizar el estado directamente, se declara una funcion llamada reducer que describe como cambia el estado segun la accion recibida, su sintaxis seria asi:

// const [state, dispatch] = useReducer(reducer, initialState);

// reducer: esta funcion toma 2 argumentos:
//          state: El estado actual.
//          action: Define el cambio que hara state
//      Reducer devolvera un nuevo estado

// initialState: Estado inicial de state

// state: Estado actual 

// dispatch: Funcion que envia acciones a reducer

// Se dara un ejemplo basico de como funciona use Reducer:

const reducer = (accion, state) => {
    if (accion.type === "incrementar"){
        return {dinero:state.dinero + 10};
    }

    if (accion.type === "decrementar"){
        return {dinero:state.dinero - 10};
    }

    if (accion.type === "resetear"){
        return {dinero: 100};
    }
};

export default function Wallet() {
    const initialState = {dinero: 100};
    const [state, dispatch] = useReducer(reducer, initialState); 

    return(
        <>
            <h1>Billetera virtual</h1>
            <h2>Saldo: {state.dinero}</h2>
            <>
                <button onClick={() => dispatch({type:'incrementar'})}>Ingresar dinero</button>
                <button onClick={() => dispatch({type:'decrementar'})}>Retirar dinero</button>
                <button onClick={() => dispatch({type:'resetear'})}>Resetear dinero</button>
            </>
        </>
    );
};

// En casos demasiado complejos lo mejor es hacerlo mediante librerias dedicadas a la administracion de componentes

