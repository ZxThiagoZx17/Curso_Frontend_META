import './App.css';
import CriptoDatos from './componentes/CriptoDatos';
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
    </div>
  );
}

export default App;
