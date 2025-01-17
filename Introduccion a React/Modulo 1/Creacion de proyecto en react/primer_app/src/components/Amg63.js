// En atributos de HTML se pueden agregar objetos JSX entre corchetes, tenemos que importar y quedaria asi:

// import MercedesG63 from './images/MercedesG63.jpeg';
// const imagen = <img src={MercedesG63} alt="Mercedes Benz G63" />

// En nuestro caso tenemos los archivos estaticos en public/images, de esta manera NO ES NECESARIO IMPORTAR LA IMAGEN todos los archivos que estan en la carpeta public no tienen que pasar por Webpack, significa que son servidos directamente por el servidor sin optimizar

// Es importante tener en cuenta que para imagenes pequeñas de poca resolucion y tamaño es recomendable almacenarlas en "public" ya que es un proyecto pequeño, ya en proyectos medianos o grandes es mejor guardar todo en "src" donde todo el contenido es procesado y optimizado por el webpack

// El bundle o paquete en español que es donde se empaquetan todos los archivos necesarios para que la aplicacion funcione puede aumentar su tamaño si se almacenan mas archivos en "src"

const MercedesBenz = (props) => {
    const imagen = <img src="images/MercedesG63.jpeg" alt="Mercedes Benz G63" />
    return imagen;
}

export default MercedesBenz;