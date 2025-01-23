import './App.css';
import ListaPostres from './componentes/ListaPostres';
import TransformacionListas from './componentes/TrasnformacionListas';

function App() {
  return (
    <div className="App">
      <TransformacionListas/>
      <hr/>
      <ListaPostres/>
    </div>
  );
}

export default App;
