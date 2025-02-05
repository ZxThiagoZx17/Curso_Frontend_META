import React from 'react';
// Sintaxis:
  // React.cloneElement(elemento, [propsAmodificar]
  // elemento: Elemento a clonar
  // propsAmodificar: Indicaciones que se agregaran y se fusionaran con el elemento clonado 
  
// 1. Clonar y modificar props: Clona el <h2> dentro de Tarjeta y le cambia el color a rojo.
export function Tarjeta({ children }) {
    return React.cloneElement(children, { style: { color: "red" } });
  }

// 2. Clonar y añadir props sin sobreescribir los existentes: Mantiene la clase btn-primary y le agrega btn-lg.
export function BotonGrande({ children }) {
    return React.cloneElement(children, { className: "btn-lg" });
  }

// 3. Clonar y agregar un nuevo hijo: Clona el <div> y le añade un <p> como hijo extra.
export function Contenedor({ children }) {
    return React.cloneElement(children, {}, <p>Texto adicional</p>);
  }

// Podemos las posibilidades que nos da react.clone para trabajar con las propiedades de la etiqueta de HTML/JSX al clonar el elemento