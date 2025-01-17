export default function Controladordarkmode() {
    let darkModeOn = true;

    function controlMode(){
        if (darkModeOn==true){
            return(
            <h1>El modo oscuro esta activo!!</h1>
            );

        } else {
            return(
            <h1>El modo oscuro esta desactivado!!</h1>
            );
        };
    };


    function manejoClicks() {
        darkModeOn = !darkModeOn;

        if (darkModeOn==true){
            console.log("Modo oscuro: ON")

        } else {
            console.log("Modo oscuro: OFF")
        };
    };

    return(
        <div>
            <button onClick ={manejoClicks}>
                Haz click para cambiar de ambiente!!
            </button>

            {controlMode()}
        </div>
    );
};