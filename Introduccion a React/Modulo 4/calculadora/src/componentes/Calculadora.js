import {useReducer} from 'react'

const reducer = (state, action) => {
    // El operador Spread State(...state) es necesario su uso en caso donde state tenga mas de una propiedad, al no ponerlos modificamos de manera indebida el state elminando las propiedades que no pongamos ahi
    if (action.type === "sumar"){
        return({...state, resultadoOperacion: state.resultadoOperacion+state.ingresoUsuario});
    };
    if (action.type === "restar"){
        return({...state, resultadoOperacion: state.resultadoOperacion-state.ingresoUsuario});
    };
    if (action.type === "multiplicar"){
        return({...state, resultadoOperacion: state.resultadoOperacion*state.ingresoUsuario});
    };
    if (action.type === "dividir"){
        return({...state, resultadoOperacion: state.resultadoOperacion/state.ingresoUsuario});
    };
    if (action.type === "resetearResultado"){
        return({...state, resultadoOperacion:0});
    };
    if (action.type === "resetearCampoEntrada"){
        return({...state, ingresoUsuario:0});
    };
    if (action.type === 'manejarCampoEntrada'){
        return({...state, ingresoUsuario: Number(action.valorEvento) || 0});
    };
    return new Error("Error desconocido");
};

export default function Calculadora() {
    const initialState = {resultadoOperacion:0,
                          ingresoUsuario:0,
                            };
                            
    const [state, dispatch] = useReducer(reducer, initialState); 

    return(
        <div>
            <div>
                <h1>Calculadora simple</h1>
            </div>
            <div>
                <p>{state.resultadoOperacion}</p>
                <input 
                onChange={(elementoEvento) => dispatch({type:'manejarCampoEntrada', valorEvento:elementoEvento.target.value})}
                placeholder='Ingresa un numero' 
                type='number' 
                value={state.ingresoUsuario}/>

                <button onClick={() => dispatch({type:'sumar'})}>Sumar</button>
                <button onClick={() => dispatch({type:'restar'})}>Restar</button>
                <button onClick={() => dispatch({type:'multiplicar'})}>Multiplicar</button>
                <button onClick={() => dispatch({type:'dividir'})}>Dividir</button>
                <button onClick={() => dispatch({type:'resetearResultado'})}>Resetear resultado</button>
                <button onClick={() => dispatch({type:'resetearCampoEntrada'})}>Resetear campo de entrada</button>
            </div>
        </div>
    );
};
