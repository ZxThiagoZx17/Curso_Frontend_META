// las 3 reglas fundamentales de los hooks son las siguientes:

// 1.Solo se pueden invocar los hooks desde un componente de React:
    // No se deberian llamar hooks desde funciones regulares de JS

// 2.Solo se debe llamar a los hooks en el nivel superior del componente:
    // Se debe llamar al hook antes de un return, bucle, condiconales o funciones anidadas

// 3.Puede llamar varios hooks de estado o hooks de efecto en un componente
    // Todos los hooks que se llaman en un componente deben estar en el mismo orden, se puede omitir la invocacion de este 

// 4.Deben hacersen siempre en la misma secuencia
    // En useEffect se pueden declaran condicionales, pero este no se puede meter a un condicional

// La funcion fetch
// Esta funcion nos ayuda a recuperar datos de la web. realiza solicitudes al servidor y recibe un JSON de el, fetch API es un conjunto de funcionalidades que nos brinda JS para realizar la solicitud

// Hay casos en donde no podemos empezar a hacer una tarea sin no haber hecho la tarea anterior a ella, se le conoce como ejecucion de un solo hilo de discusion, JS no esta capacitado para realizar multiples tareas a la vez, el problema se solucionaria paso a paso asi, por ejemplo:

// 1. JS obtiene los detalles
// 2. Al mismo tiempo llama a un empleado para pesar el paquete y este a su vez llama a otro para pegar las etiquetas, llama a otro para cobrar por el servicio y por ultimo a otro para llevar el paquete a la bodega permitiendo que JS se encargue del siguiente cliente

// Esta delegacion se le conoce como JS asincrono

// Para acceder a datos externos de un API por ejemplo (De un JSON), un ejemplo de uso seria este:
fetch('https://randomuser.me/api//?results=1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
    // Si la peticion es exitosa, se guarda la data en setData(data).

// then() es un metodo de promesas que es basicamente lo que se ejecuta al momento de procesarse el fetch
// catch() es un metodo que captura los errores y nos ayuda a depurar

// Es util saber sobre que es sincrono y asincrono:
// Sincrono: Se ejecuta paso a paso en orden. Cada línea de código espera a que la anterior termine antes de ejecutarse, ejemplos:
// 1. Cambiar de tema con setTheme().
// 2. Filtrar datos en una lista localmente.
// 3. Actualizar el estado de un botón al hacer clic.
// Usamos codigo sincrono cuando las tareas/cambios son de inmediato

// Asincrono: Se ejecuta en paralelo sin esperar. Algunas tareas pueden tardar más, pero el código sigue corriendo mientras espera la respuesta, ejemplos:
// 1. Obtener los precios de las motos desde el backend en Django.
// 2. Filtrar motos en el backend con una API (fetch()).
// 3. Implementar gráficos en React con datos cargados desde el backend.
// Usamos codigo sincrono cuando las tareas tomen tiempo o cuando necesitamos trabajar con datos externos como una API

// Ya con esto nos viene el uso de async/await, es una forma mas moderna y legible de manejar promesas en JS, esto nos permite escribir contenido asincrono como si fuera sincrono, ejemplo:
async function miFuncion() {
    await operacionAsincrona();
}
// async → Convierte una función en asíncrona, lo que significa que devolverá una promesa automáticamente.
// await → Pausa la ejecución de la función hasta que la promesa se resuelva, esto se hace porque a veces las peticiones no se responden de inmediato

// Se puede usarlas promesas de fetch con ambos enfoques, then o await/async con try y except, ejemplo en ambos enfoques:

// - Then:
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log("Datos:", data))
  .catch(error => console.error("Error:", error));

// async/await:
async function obtenerDatos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log("Datos:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerDatos();
