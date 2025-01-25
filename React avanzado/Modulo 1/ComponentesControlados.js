// Un componente controlado es el que es controlado por cualquier Hook como useState en lugar de un elemento HTML como <input/> o <textarea/> que gestionan su propio valor interno


// Los formularios HTML funcionan diferente al otros elementos del DOM, en HTML normalmente se usa el atributo 'action' que apunta a donde se procesara la solicitud

// En este caso React hara ese trabajo mediante el estado de la mano de propiedades como value por ejemplo, que es una propiedad especial que determina el contenido de entrada en cualquier punto de la aplicacion

// Para crear un componente controlado se debe hacer una combianacion en el uso de estado local, value y eventos como onChange (junto con los datos que nos devuelve el elementoEvento):

const manejarCambio = (elementoEvento) => {elementoEvento.target.value};
const enSubida = (elementoEvento) => {
    validate(elementoEvento);
    elementoEvento.preventDefault();
};         

<form onChange={manejarCambio} onSubmit={enSubida}>
    ...
</form>

// En este pequeño ejemplo se muestran 2 funciones que se usaran en eventos como cambiar el formulario (onChange) o subirlo (onSubmit)

// En este ejemplo, una funcion devuelve el valor que se escribe en el formulario y en el de subida hace una validacion antes de subirlo, React aconseja que se usen los componentes controlados para implementacion de formularios, sin embargo siguen habiendo elementos no controlados

import { useState } from "react";

function ejemploFormularioControlado() {
    const [nombre, setNombre] = useState("");

    const manejarCambio = (elementoEvento) =>{
        setNombre(elementoEvento.target.value)
    }

    return(
        <>  
            <input value={nombre} onChange={manejarCambio} placeholder="Escribe tu nombre"/>
            <h1>
                Mi nombre es {nombre} 
            </h1>
        </>
    );
}

