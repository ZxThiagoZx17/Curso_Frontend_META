// React nos proporciona objetos utilitarios como React.Children y React.cloneElement Que nos sirven para manipular de manera dinamica los elementos secundarios envueltos en alguna etiqueta:

// React.Children
// Nos permite manipular props.children el cual nos permite trabajar con los hijos de un componente mediante props, varios de los metodos principales serian:

// 1. React.Children.map(children, callback)
    //  Funciona como .map(), pero con children, incluso si hay un solo hijo.

// 2. React.Children.forEach(children, callback)
    // Igual que .map(), pero sin devolver un nuevo array.

// 3. React.Children.count(children)
    // Devuelve la cantidad de hijos que tiene un componente.

// 4. React.Children.only(children)
    // Devuelve el único hijo si solo hay uno, si hay más, lanza un error.

// Los ejemplos se explican en el proyecto del modulo

// React.cloneElement
// Esta funcion nos permite clonar un elemento JSX y modificar sus props antes de renderizarlo, su sintaxis es asi:

    React.cloneElement(elemento, [propsNuevos], [...children])

// Se daran 3 ejemplos en el proyecto, se mostraran funciones como: 
// 1. Clonar y modificar props
// 2. Clonar y añadir props sin sobreescribir los existentes
// 3. Clonar y agregar un nuevo hijo
