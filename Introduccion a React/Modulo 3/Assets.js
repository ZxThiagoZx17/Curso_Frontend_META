// En react los recursos, activos o Assets pueden ser archivos como imagenes, hojas de estilo(css), fuentes, archivos multimedia, etc...

// Para que todo funcione bien es importante situar en un lugar accesible los recursos, lo mejor es agregar una carpeta de recursos en la carpeta de origen (src) y mantener sus recursos de aplicacion alli 

// Algunos recursos se pueden poner dentro de public, los que no son procesados por Web pack, esto ya se explico en el modulo 1

// Un ejemplo de importacion de una imagen seria asi:
import gato from './assets/images/gato.jpg'

// podemos hacerlo de 2 maneras:
{/* <img src={gato} alt='Es un gato!!'/> */}

{/* <img src={require('./assets/images/gato.jpg')} alt='Es un gato!!'/> */}

// La segunda nos simplifica el proceso, evitamos la linea import

// Anteriormente se habia hablado de webpack, es basicamente un agrupador de modulos que crea un archivo bundle (paquete)
