// Se importan algunos estilos y useTheme que es useContext(contextTheme) desde donde definimos el componente Provider
import "./Styles.css";
import { useTheme } from "../componentes/ThemeContext";

// El componente Switch se encargara de crear el interruptor que segun cambie su posicion, cambiara theme que es una variable de esta mediante la cual muchos componentes cambian el color de sus letras y en toda la app el Background, se usaran las variables de estado theme y toggleTheme desde el Provider
const Switch = () => {
 const { theme, toggleTheme } = useTheme();
 return (
   <label className="switch">
     <input
       type="checkbox"
       checked={theme === "light"}
       onChange={toggleTheme}
     />
     <span className="slider round" />
   </label>
 );
};

export default Switch;
