// hooks o vinculos son funciones que se introdujeron en la version 16.8 de React

// Nos permiten conectarnos al estado de React y a varias caracteristicas de los componentes, inicialmente se examinara una de las instancias de enlace mas utilizadas, useState

// useState se utiliza para gestionar el estado dentro de un componente y hacer su seguimiento, este esta integrado en React:

import React, {useState} from 'react'; //Inicialmente importamos el modulo

const [state, setState] = useState(inicialEstado) //Declaramos una variable de estado DENTRO DEL COMPONENTE
// Esta linea basicamente nombre la variable de estado y el conjunto de funciones usando la destruccion de arreglos
// Cuando se declara una variable con useState, nos devolvera un arreglo con 2 elementos

// Sin usar la destruccion de arreglos, el codigo se veria asi:
// var inicialEstado = useState(false);
// var state = inicialEstado[0];
// var setState = inicialEstado[1];

// Se mostrara un ejemplo del uso de Hooks o enlaces:

import React, {useState} from "react"

export default function Contador() {
    const [contador, setContador] = useState(10); 
    // Contador almacena el valor que ponemos en el parentesis de useState
    // setContador es la expresion donde definimos una funcion que se ejecute en un evento
    // useState(10) define el valor inicial de contador en 10

    const incrementarContador = () => setContador(contador+5);

    return(
        <div>
            <button onClick={incrementarContador}>
                Haz click para incrementar!!!    
            </button>
            <h1>
                Contador: {contador}
            </h1>
        </div>
    );
};
// Este ejemplo se podra encontrar en la ruta Modulo 2\intro-eventos\src\compenentes\Contador\Contador.js

// Aca otro ejemplo interesante utilizacon el evento onChange()
import { useState } from 'react';

export default function InputComponent() { 
  const [inputTexto, setTexto] = useState('Hola'); 

  function manejarCambio(elementoEvento) { 
    console.log(elementoEvento)
    setTexto(elementoEvento.target.value); 
  } 

  return ( 
    <> 
      <input value={inputTexto} onChange={manejarCambio} /> 
      <p>Tu ingresaste: {inputTexto}</p> 
      <button onClick={() => setTexto('Hola')}> 
        Resetear texto 
      </button> 
    </> 
  ); 
} 