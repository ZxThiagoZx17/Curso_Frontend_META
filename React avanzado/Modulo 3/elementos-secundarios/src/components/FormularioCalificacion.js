import { useState } from "react";

//en test siempre es necesario pasar los valores de simulacion mediante props, por lo tanto dejamos de valor predeterminado una funcion anonima que ni quita ni pone, asi evitamos que se formen errores por no pasar esta prop en app.js
export default function FormularioCalificacion({ onSubmit = () => {} }) {
    
    const [puntuacion, setPuntuacion] = useState(10);
    const [comentario, setComentario] = useState("");

    const condicionOpinion = Number(puntuacion) < 5 && comentario.length < 10;

    const placeholderOpinion = condicionOpinion 
    ? "Debido a la mala calificacion es indispensable que nos des unos comentarios al menos de 10 letras"
    : "Opinion/comentarios opcionales";

    const manejarSubida = (elementoEvento) => {
        elementoEvento.preventDefault();
        onSubmit({puntuacion, comentario});
    };

    return(
        <div>
            <form onSubmit={manejarSubida}>
                <fieldset>
                    <h2>Tu Opinion es importante!!</h2>
                    <div className="Field">
                        <label htmlFor="puntuacion">Puntuacion: {puntuacion}</label>
                        <input 
                        id="puntuacion"
                        name="puntuacion"
                        value={puntuacion}
                        onChange={(elementoEvento) => setPuntuacion(elementoEvento.target.value)}
                        type="range"
                        min={0}
                        max={10}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="comentarios">Comentarios</label>
                        <textarea 
                        id="comentarios"
                        placeholder={placeholderOpinion}
                        value={comentario}
                        onChange={(elementoEvento) => setComentario(elementoEvento.target.value)}
                        type="range"
                        />
                    </div>
                    <button type="submit" disabled={condicionOpinion}>
                        Subir
                    </button>
                </fieldset>
            </form>
        </div>
    );
};