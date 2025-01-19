import './App.css';
import Boton, {Mouse} from './compenentes/Boton';
import EntradaTextoConBotonEnfoque from './compenentes/Contador/BotonEnfoque';
import Contador from './compenentes/Contador/Contador';
import InputComponent from './compenentes/Contador/SeguimientoStrings';
import Controladordarkmode from './compenentes/Modo oscuro/Controladordarkmode';
import NumAleatorio from './compenentes/Numero Aleatorio/NumAleatorio';
import Promo from './compenentes/Promocion/Promo';
import Wallet from './compenentes/Wallet/Wallet';

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
      <hr/>
      <Promo  />
      <hr/>
      <Contador/>
      <hr/>
      <InputComponent/>
      <hr/>
      <EntradaTextoConBotonEnfoque/>
      <hr/>
      <Wallet/>
    </div>
  );
}

export default App;
