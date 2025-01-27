import "./App.css";
import EjemploFormularioControlado from "./componentes/FormularioControlado";
import { FormularioNoControlado } from "./componentes/FormularioNoControlado";
import ListaPostres from "./componentes/ListaPostres";
import TareasPorHacer from "./componentes/TareasPorHacer";
import TransformacionListas from "./componentes/TrasnformacionListas";
import { ContadorProvider } from "./componentes/Contador";
import { Hijo } from "./componentes/Hijo";
import { useTheme } from "./componentes/ThemeContext";
import { Header, Page } from "./Switch/Textos"

function App() {
  // Creamos el conjunto/set que nos traera el valor theme del contexto para manejar tema oscuro/claro, se agrega para manejar el cambio de color en el background desde el <div> que abarca toda la aplicacion
  const { theme } = useTheme();

  // Header y Page estan encargados de renderizar el interruptor para cambiar de tema y un breve contenido textual
  return (
    <div className="App" style={{backgroundColor: theme === 'light'? 'white' : 'black'}}>
      <Header />
      <Page />
      <div>
        <TransformacionListas />
        <hr />
        <ListaPostres />
        <hr />
        <TareasPorHacer />
        <hr />
        <EjemploFormularioControlado />
        <hr />
        <FormularioNoControlado />
        <hr />
      </div>
      <div>
        <ContadorProvider>
          <Hijo />
        </ContadorProvider>
        <hr />
      </div>
    </div>
  );
}

export default App;
