// import {useReducer} from 'react'

// const reducer = (state, action) => {
//     if (action.type === "sumar"){
//         return({resultadoOperacion: state.resultadoOperacion+state.ingresoUsuario});
//     };
//     if (action.type === "restar"){
//         return({resultadoOperacion: state.resultadoOperacion-state.ingresoUsuario});
//     };
//     if (action.type === "multiplicar"){
//         return({resultadoOperacion: state.resultadoOperacion*state.ingresoUsuario});
//     };
//     if (action.type === "dividir"){
//         return({resultadoOperacion: state.resultadoOperacion/state.ingresoUsuario});
//     };
//     if (action.type === "resetearResultado"){
//         return({resultadoOperacion:0});
//     };
//     if (action.type === "resetearCampoEntrada"){
//         return({ingresoUsuario:0});
//     };
//     if (action.type === 'manejarCampoEntrada'){
//         return((e) => {e.target.value});
//     };
//     return new Error();
// };

// export default function Calculadora() {
//     const initialState = {resultadoOperacion:0,
//                           ingresoUsuario:0,
//                             };
                            
//     const [state, dispatch] = useReducer(reducer, initialState); 

//     return(
//         <div>
//             <div>
//                 <h1>Calculadora simple</h1>
//             </div>
//             <div>
//                 <p>{state.resultadoOperacion}</p>
//                 <input onChange={() => dispatch({type:'manejarCampoEntrada'})} placeholder='Ingresa un numero' type='number'pattern='[0-9]'/>

//                 <button onClick={() => dispatch({type:'sumar'})}>Sumar</button>
//                 <button onClick={() => dispatch({type:'restar'})}>Restar</button>
//                 <button onClick={() => dispatch({type:'multiplicar'})}>Multiplicar</button>
//                 <button onClick={() => dispatch({type:'dividir'})}>Dividir</button>
//                 <button onClick={() => dispatch({type:'resetearResultado'})}>Resetear resultado</button>
//                 <button onClick={() => dispatch({type:'resetearCampoEntrada'})}>Resetear campo de entrada</button>
//             </div>
//         </div>
//     );
// };

import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "sumar":
            return { ...state, resultadoOperacion: state.resultadoOperacion + state.ingresoUsuario };
        case "restar":
            return { ...state, resultadoOperacion: state.resultadoOperacion - state.ingresoUsuario };
        case "multiplicar":
            return { ...state, resultadoOperacion: state.resultadoOperacion * state.ingresoUsuario };
        case "dividir":
            return { ...state, resultadoOperacion: state.resultadoOperacion / state.ingresoUsuario };
        case "resetearResultado":
            return { ...state, resultadoOperacion: 0 };
        case "resetearCampoEntrada":
            return { ...state, ingresoUsuario: 0 };
        case "manejarCampoEntrada":
            return { ...state, ingresoUsuario: Number(action.payload) || 0 }; // Asegura que sea un número
        default:
            throw new Error("Acción no soportada");
    }
};

export default function Calculadora() {
    const initialState = { resultadoOperacion: 0, ingresoUsuario: 0 };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <h1>Calculadora simple</h1>
            </div>
            <div>
                <p>Resultado: {state.resultadoOperacion}</p>
                <input
                    value={state.ingresoUsuario}
                    onChange={(e) =>
                        dispatch({ type: "manejarCampoEntrada", payload: e.target.value })
                    }
                    placeholder="Ingresa un número"
                    type="number"
                />
                <div>
                    <button onClick={() => dispatch({ type: "sumar" })}>Sumar</button>
                    <button onClick={() => dispatch({ type: "restar" })}>Restar</button>
                    <button onClick={() => dispatch({ type: "multiplicar" })}>Multiplicar</button>
                    <button onClick={() => dispatch({ type: "dividir" })}>Dividir</button>
                    <button onClick={() => dispatch({ type: "resetearResultado" })}>
                        Resetear resultado
                    </button>
                    <button onClick={() => dispatch({ type: "resetearCampoEntrada" })}>
                        Resetear campo de entrada
                    </button>
                </div>
            </div>
        </div>
    );
}
