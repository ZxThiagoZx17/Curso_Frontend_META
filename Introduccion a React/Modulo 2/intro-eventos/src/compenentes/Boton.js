export default function Boton() {
    const hacerClick = () => console.log("Se ha hecho click");

    return(
        <button onClick={hacerClick}>
            Haz Click!
        </button>
    );
}

export function Mouse(){
    const pasarMouse = () => console.log("Se paso el Mouse por encima");
    return(
        <button onMouseOver={pasarMouse}>
            Pasa el Mouse!!
        </button>
    );
} 