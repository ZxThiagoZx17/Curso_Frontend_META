import React from 'react'

// children puede ser un solo elemento o múltiples.
// React.Children.map() lo recorre y lo envuelve en <li>.
export function Lista({ children }) {
    return (
      <ul>
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    );
  };

// Solo recorre los children y los imprime en consola.
export function RevisarHijos({ children }) {
    React.Children.forEach(children, (child) => {
        console.log("Hijo encontrado:", child);
    });

    return <div>{children}</div>;
};

// Cuenta cuántos elementos secundarios (children) hay.
export function ContadorHijos({ children }) {
    return <p>Este componente tiene {React.Children.count(children)} hijos.</p>;
  };

// Si se pasa más de un hijo, dará un error.
export function UnicoHijo({ children }) {
    return <div>{React.Children.only(children)}</div>;
};

// Podemos ver en que aspectos y casos podemos trabajar con componentes hijos ya sea con funciones o bucles para iterar varios elementos hijo