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

// Hay sitios que probablemente se podrian hacer sin webpack ya que la estructura puede ser algo sencillo como: una biblioteca de css como Boostrap cargada desde una CDN (Red de entrega de contenido), un archivo JS y un HTML

// Sin embargo esto puede crear un grafico de dependencia, el orden en que se cargan los archivos es escencial, este grafico puede llegar a ser muy complejo, por eso es que se recomienda el uso de webpack, este tambien hace tareas como:

// - Convierte codigo JS moderno en versiones anteriores de JS, transpilacion (ES6 ----> ES5)
// - Optimiza el codigo para que cargue lo mas rapido posible
// - Puede crear mapas de origen de los bloques de construcción del paquete  
// - Puede producir varios tipos de archivos basados en reglas y plantillas. Esto incluye archivos HTML, entre otros. 

// Tambien incluye modos de desarrollo y produccion
// En el modo desarrollo Webpack agrupa todos los archivos y optimiza sus paquetes para actualizaciones de manera que una vez se actualice el archivo local, este se agrupe rapidamente y crea mapas de origen para que se pueda ver el archivo original
// En produccion se agrupan todos estos archivos y se optimizan para velocidad y que ocupen el menor espacio posible y se envia un solo paquete al usuario con todo el contenido, esto hace que el usuario descargue rapidamente el contenido de la pagina

// Esto funciona en aplicaciones pequeñas pero en enfoques mas grandes puede que esto afecte el rendimiento debido a que el paquete sera mucho mas grande, hay varias maneras de abordar este problema: 

// - Division de codigos: El paquete de modulos como Webpack divide el archivo grande en varios paquetes mas pequeños y se van cargando segun sea necesario, asi se hara una carga diferida donde solamente se cargan las partes que el usuario esta viendo, asi se reduce los tiempos de carga

// - SSR (Server-side rendering): Con SSR los componentes React se muestran en HTML desde el serrvido, con eso el usuario al ingresar a la web descargara el HTML terminado 

// - Representacion de lado del cliente: Se descarga el archivo index.html y per permite a React inyectar su propio código en un elemento HTML dedicado (el elemento raíz en create-react-app).

// A veces se combina el uso de la representación del lado del cliente y la codificación del lado del servidor, a esto se le conoce como aplicaciones isomórficas.


