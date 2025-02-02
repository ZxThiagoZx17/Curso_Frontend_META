// Como ya sabiamos, JSX (JavaScript XML) es una extension de sintaxis que usa React que combina marcado y logica de negocio en una entidad llamada componente

// Cuando React analiza todos los metodos de renderizado, toma todo el arbol de componentes desde la raiz y crea una presentacion intermedia llamada elemento que es un arbol tambien, pero cada nodo en vez de ser una etiqueta JSX, es un objeto simple que describe el componente junto con sus propiedades

// Ese objeto plano se denomina en React como elemento que es una forma de representar el HTML final como un objeto sin formato el cual tiene 2 propiedades unicamente: type y props, el primero como tipo de nodo(<div>, <button>, <h1>, <componenteCualquiera> etc... ) y el segundo las propiedades de la etiqueta (onClick, ClassName, etc...) 

// JSX:
const Salir = () => {
    <div>
        <p>Como estas?</p>
        <subirRespuesta color='Blue'>
            Bien
        </subirRespuesta>
    </div>
};

// Elemento arbol:
// {
//     type:"div",
//     props:{
//         children:[
//             {
//                 type:"p",
//                 props:{
//                     children: "Como estas?"
//                 },
//             },
//             {
//                 type:"subirRespuesta",
//                 props:{
//                     color: "Blue"
//                     children: "Bien"
//                 },
//             },
//         ],
//     },
// }


// Una vez que React termine de armar el arbol de elementos, los convertira en elementos DOM Virtual, el proceso es asi:
// 1. React toma los componentes JSX y arma el arbol de elementos
// 2. Se transforma en elementos del DOM vitual y se compara con el DOM anterior que guarda en memoria
// 3. Calcula y mira que objetos cambiaron entre DOM virtual y DOM real
// 4. Renderiza los objetos que cambiaron al DOM subyacente

// Ahora pasamos a la parte de rendimiento:
// Es algo muy importante en aplicaciones de React, es necesario que la aplicacion responda rapido para que sea buena, hay que revisar componente por componente y mirar cuales se demoran demasiado, en ese caso se tiene que depurar, algunos casos reescribir la pagina, en otros es mejor asignar esa tarea al Backend y traer la respuesta mediante una API

// Hay patrones de diseño y enfoques biene establecidos que se han desarrollado a lo largo del tiempo