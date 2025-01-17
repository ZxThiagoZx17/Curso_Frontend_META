import './App.css';
import Boton, {Mouse} from './compenentes/Boton';
import Controladordarkmode from './compenentes/Modo oscuro/Controladordarkmode';

function App() {
  return (
    <div>
      <Boton/>
      <hr/>
      <Mouse/>
      <hr/>
      <Controladordarkmode/>
    </div>
  );
}

export default App;
