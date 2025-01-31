import './App.css';
import CriptoDatos from './componentes/CriptoDatos';
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
    </div>
  );
}

export default App;
