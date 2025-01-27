import { useContext } from "react";
import { ContadorContext } from "../contexts/ContadorContext";
import { useTheme } from "./ThemeContext";

export const Hijo = () => {
    const {contador, incrementar, decrementar} = useContext(ContadorContext)
    const {theme} = useTheme();

    return(
        <div>
            <h1 style={{color: theme === "light" ? "black" : "white",}}>
                El contador esta en {contador}
            </h1>
            <button onClick={incrementar}>Aumentar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
};