import { createContext, useContext, useState } from "react";
// Este componente esta diseñado para almacenar la logica necesaria para cambiar el tema y luego proveer a componentes hijos de estas propiedades/estados mediante contexto

// Se especifica que no se defina un valor inicial para dar claridad
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  // Theme y setTheme son los estados los cuales se compartiran a practicamente todos los componentes de la aplicacion, en base a theme se cambiaran propiedades de color tanto del background o el color de las etiquetas <h1>, <p>, <ul>, etc...
  const [theme, setTheme] = useState("light");

  // Se define setTheme que se encargada de cambiar Theme de claro a oscuro o viceversa segun de ejecute un evento, en este caso, un interrutor, adicionalmente, imprimira un log del tema actual por la consola de JS
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    console.log(theme)};   

  // Se crea el provider con los valores de theme y toggleTheme necesarios para todos los componentes hijos
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Desde este archivo de crea la variable useTheme que ya da via libre para usarlo varias veces sin volver a usar useContext, unicamente se define el set o conjunto de valores en el contexto que queremos traer con useContext() 
export const useTheme = () => useContext(ThemeContext);