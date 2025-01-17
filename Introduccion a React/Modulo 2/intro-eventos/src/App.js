import './App.css';
import Boton, {Mouse} from './compenentes/Boton';
import Controladordarkmode from './compenentes/Modo oscuro/Controladordarkmode';
import NumAleatorio from './compenentes/Numero Aleatorio/NumAleatorio';

function App() {
  return (
    <div>
      <Boton/>
      <hr/>
      <Mouse/>
      <hr/>
      <Controladordarkmode/>
      <hr/>
      <NumAleatorio/>
    </div>
  );
}

export default App;
