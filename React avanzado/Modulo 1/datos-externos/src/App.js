import './App.css';
import EjemploFormularioControlado from './componentes/FormularioControlado';
import { FormularioNoControlado } from './componentes/FormularioNoControlado';
import ListaPostres from './componentes/ListaPostres';
import TareasPorHacer from './componentes/TareasPorHacer';
import TransformacionListas from './componentes/TrasnformacionListas';

function App() {
  return (
    <div className="App">
      <TransformacionListas/>
      <hr/>
      <ListaPostres/>
      <hr/>
      <TareasPorHacer/>
      <hr/>
      <EjemploFormularioControlado/>
      <hr/>
      <FormularioNoControlado/>
    </div>
  );
}

export default App;
