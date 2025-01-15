import logo from './logo.svg';
import './App.css';

function Heading() {
  let titulo = 'Ejemplo de creacion de un componente!!'
  return(
    <h1>{titulo}</h1> //ES NECESARIO METER VARIABLES ENTRE CORCHETES {} PARA QUE FUNCIONE
  );
}

function App(){
  return(
    <Heading/>
  );
} 
export default App;
