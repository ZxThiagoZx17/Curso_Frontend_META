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

  const { theme } = useTheme();

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
