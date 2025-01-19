import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === "incrementar"){
        return {dinero: state.dinero + 10};
    }

    if (action.type === "decrementar"){
        return {dinero: state.dinero - 10};
    }

    if (action.type === "resetear"){
        return {dinero: 100};
    }
    return new Error();
    
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
