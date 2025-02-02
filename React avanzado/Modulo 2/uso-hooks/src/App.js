import './App.css';
import CriptoDatos from './componentes/CriptoDatos';
import DiaDespues from './componentes/DiaDespues';
import IncrementaUno from './componentes/IncrementaUno';
import TarjetaRegalo from './componentes/TarjetaRegalo';
import UsuarioRandom from './componentes/UsuarioRandom';

function App() {
  return (
    <div className="App">
      <TarjetaRegalo/>
      <hr/>
      <CriptoDatos/>
      <hr/>
      <UsuarioRandom/>
      <hr/>
      <IncrementaUno/>
      <hr/>
      <DiaDespues/>
    </div>
  );
}

export default App;
