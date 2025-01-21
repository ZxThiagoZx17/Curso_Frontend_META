export default function SelectorCanciones() {
    const cancion1 = new Audio('https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3');    
    const cancion2 = new Audio('https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3');    

    function manejarCancion1() {
        if(cancion1.paused){
            cancion1.play();
        } else {
            cancion1.pause();
        };
    };

    function manejarCancion2() {
        if(cancion2.paused){
            cancion2.play();
        } else {
            cancion2.pause();
        };
    };

    return(
        <>
            <button onClick={manejarCancion1}>Play/Pause Cancion1</button>
            <button onClick={manejarCancion2}>Play/Pause Cancion2</button>
        </>
    );
}