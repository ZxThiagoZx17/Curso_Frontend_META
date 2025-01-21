import Reactplayer from "react-player/youtube";

// En react para trabajar con videos, si es el caso de un video que tenemos almacenado localmente, podriamos sar facilmente la etiqueta <video src{video}/> de HTML, Sin embargo esto podria no funcionar si deseamos poner un video de Youtube, facebook, etc... 

// Podemos usar paquetes NPM dedicados a la adicion de video a proyectos de react, en npmjs.org buscamos react-player, lo descargamos y luego lo implementamos en este componente: 

export const MostrarVideo = () => {
    return(
        <>
            <Reactplayer
             url={'https://www.youtube.com/watch?v=v90yAgFsZBY'}
             playing={true}
             volume={0.5}
             />
        </>
    );
};