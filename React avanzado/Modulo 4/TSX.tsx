// Ya de ahora en adelante se usara TypeScript + JSX ya nos trare varias mejoras y previene de mejor manera errores sin sentido, los editores de Vs Code ayudan a detectar errores antes de ejecutarlo, todo se valida en el desarrollo evitando posibles errores en produccion

// En sintaxis hay una breve diferencia con JSX, se mostraran aqui
// 1. Se deben tipar las props en componentes:
    // JSX:
    const Boton = ({ texto }) => {
        return <button>{texto}</button>;
      };
      
    // TSX:
    type BotonProps = { texto: string };

    const BotonTSX = ({ texto }: BotonProps) => {
        return <button>{texto}</button>;
    };

// 2. Se deben tipar los eventos:
    // JSX:
    const MiBoton = () => {
        return <button onClick={(e) => console.log(e.target)}>Click</button>;
      };
      
    // TSX:
    const MiBotonJSX = () => {
        return (
          <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target)}>
            Click
          </button>
        );
      };
      
// 3. Estados y useState debe estar tipados:
    // JSX:
    const [contador, setContador] = useState(0);

    // TSX:
    const [contadorJSX, setContadorJSX] = useState<number>(0);

// 4. Las funciones que retornen valores deben especificar el tipo de retorno:
    // JSX:
    const sumar = (a, b) => {
        return a + b;
      };
      
    // TSX:
    const sumarJSX = (a: number, b: number): number => {
        return a + b;
      };
      
// 5. Las referencias de useRef tambien deben ser tipadas:
    // JSX:
    const inputRef = useRef();

    // TSX:
    const inputRef = useRef<HTMLInputElement>(null);


// Codigo completo TSX:
import { useState } from "react";

type BotonProps2 = { texto: string };

const Boton2 = ({ texto }: BotonProps2) => {
  const [contador, setContador] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setContador(contador + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{texto}</button>
      <p>Clicks: {contador}</p>
    </div>
  );
};

export default Boton2;
// Se hace ver que la diferencia mas grande es que hay tipado estatico en todo, pero por lo demas es igual a JSX
// Cabe aclarar que al crear el proyecto de React con Vite tenemos varios enfoques y compiladores para nuestro proyecto, tenemos el compilador oficial de TypeScript (tsc), esbuild o SWC y cada uno tiene sus fuertes:

// esbuild/SWC = Transpilan TypeScript a JavaScript, pero ignoran errores de tipos.
// tsc (TypeScript Compiler) = Revisa los errores de tipos y previene errores en tiempo de desarrollo.

// El comando tsc --noEmit nos permite desde el desarrollo asegurarnos de que no hayan errores de tipos