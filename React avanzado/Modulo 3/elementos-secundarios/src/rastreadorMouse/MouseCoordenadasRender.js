import { useEffect, useState } from "react";
// Render esta entre corchetes {} porque { render } → Es destructuración de props, simplemente extraemos render de props, es algo parecido a esto: 
// const { nombre, edad } = persona;
// console.log(nombre); // "Ana"
// console.log(edad);   // 30

const RastreadorMouse = ({render}) => {
    // Creamos variables de estado
    const [posicion, setPosicion] = useState({
        x:0,
        y:0,
    });

    useEffect(() => {
        // Funcion encargada de actualizar la posicion del mouse en el estado
        const manejarPosicionMouse = (evento) => {
            setPosicion({
                x:evento.clientX,
                y:evento.clientY,
            });
        };
        // Linea encargada de escuchar constantemente al evento, en este caso mousemove (cada vez que el mouse se mueva)
        // Cada vez que esto ocurra, ejecutara manejarPosicionMouse(elementoEvento) el cual se encarga de actualizar constantemente la posicion en el estado
        window.addEventListener('mousemove', manejarPosicionMouse)
        // Cuando el elemento se desmonta (Se elimina del DOM), El useEffect lo ultimo que hara sera eliminar el listener para evitar problemas de memoria ya que si no ponemos esta linea aunque el componente desaparezca, seguira activo el evento 
        return(() => {
            window.removeEventListener('mousemove', manejarPosicionMouse);
            });
        },[]);

    // Si tenemos mas variables de estado, se tienen que poner adicionalmente como objeto en render entre corchetes render({})
    // El componente que use RastreadorMouse unicamente tomara las que necesita en los argumento de la funcion anonima
    return render(posicion);
};


// COMPONENTES QUE HARAN USO DE LAS VARIABLES DE ESTADO DE RastreadorMouse mediante la prop render
export const PanelCoordenadas = () =>{
    return(
        <div style={{ border: "1px solid black", padding: "16px", marginBottom: "128px" }}>
            <h2>Metodo render</h2>
            <p>Coordenadas: </p>
            <RastreadorMouse
                render= {({x, y}) => (
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "200px",
                        height: "64px"
                      }}>
                        <span>Posición X: {x}</span>
                        <span>Posición Y: {y}</span>
                    </div>
                 )}
            /> 
        </div>
    );
}

export function PuntoCoordenadas() {
  
    return (
      <RastreadorMouse
        render= {({x, y}) => (
        <div>
            <p>{`(${x}, ${y})`}</p>
       </div>
       )}
      />
    );
  }

