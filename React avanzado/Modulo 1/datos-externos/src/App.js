import './App.css';
import EjemploFormularioControlado from './componentes/FormularioControlado';
import { FormularioNoControlado } from './componentes/FormularioNoControlado';
import ListaPostres from './componentes/ListaPostres';
import TareasPorHacer from './componentes/TareasPorHacer';
import TransformacionListas from './componentes/TrasnformacionListas';
import { ContadorProvider } from './componentes/Contador';
import { Hijo } from './componentes/Hijo';

function App() {
  return (
    <div  className="App">
      <div>
        <TransformacionListas/>
        <hr/>
        <ListaPostres/>
        <hr/>
        <TareasPorHacer/>
        <hr/>
        <EjemploFormularioControlado/>
        <hr/>
        <FormularioNoControlado/>
        <hr/>
      </div>
      <div>
          <ContadorProvider>
              <Hijo/>
          </ContadorProvider>
      </div>
    </div>
  );
}

export default App;