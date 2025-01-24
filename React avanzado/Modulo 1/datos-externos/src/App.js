import './App.css';
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
    </div>
  );
}

export default App;
