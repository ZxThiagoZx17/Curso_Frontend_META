import logo from './logo.svg';
import './App.css';
import Bolsa from './components/Bolsa'
import { Peras, Manzanas } from './components/Frutas';
import MercedesBenz from './components/Amg63';

function Heading() {
  let titulo = 'Ejemplo de creacion de un componente!!'
  return(
    <h1>{titulo}</h1> //ES NECESARIO METER VARIABLES ENTRE CORCHETES {} PARA QUE FUNCIONE
  );
}

function App(){
  return(
    <div>
      <Bolsa> 
          <Manzanas color="Rojas" number="5"/>
      </Bolsa>

      <Bolsa>
        <Peras friend={<h3>Santiago</h3>}/>
      </Bolsa>

      <MercedesBenz/>
    </div>
  );
} 
export default App;
