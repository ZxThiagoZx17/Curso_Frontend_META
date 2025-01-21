import {useReducer} from 'react'

const reducer = (state, action) => {
    if (action.type == "sumar"){
        return({resultadoOperacion: state.resultadoOperacion+state.ingresoUsuario});
    };
    if (action.type == "restar"){
        return({resultadoOperacion: state.resultadoOperacion-state.ingresoUsuario});
    };
    if (action.type == "multiplicar"){
        return({resultadoOperacion: state.resultadoOperacion*state.ingresoUsuario});
    };
    if (action.type == "dividir"){
        return({resultadoOperacion: state.resultadoOperacion/state.ingresoUsuario});
    };
    if (action.type == "resetearResultado"){
        return({resultadoOperacion:0});
    };
    if (action.type == "resetearCampoEntrada"){
        return({ingresoUsuario:0});
    };
    return new Error();
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
                <input placeholder='Ingresa un numero' type='number'pattern='[0-9]'/>

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