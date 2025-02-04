import './App.css';
import {ContadorHijos, Lista, RevisarHijos, UnicoHijo} from './ManipulacionDinamica/objetoChildren'
import { BotonGrande, Contenedor, Tarjeta } from './ManipulacionDinamica/objetoCloneElement';

function App() {
  return (
    <div className="App">

        <Lista>
          <span>Elemento 1</span>
          <span>Elemento 2</span>
          <span>Elemento 3</span>  
        </Lista>
        <hr/>

        <RevisarHijos>
          <p>Hola</p>
          <p>Mundo</p>
        </RevisarHijos>
        <hr/>

        <ContadorHijos>
          <p>Uno</p>
          <p>Dos</p>
        </ContadorHijos>
        <hr/>

        <UnicoHijo>
          <p>Solo un hijo</p>
        </UnicoHijo>
        <hr/>
        
        <Tarjeta>
          <h2>Texto modificado con cloneElement</h2>
        </Tarjeta>
        <hr/>
        
        <BotonGrande>
          <button className="btn-primary">Haz clic</button>
        </BotonGrande>
        <hr/>

        <Contenedor>
          <div>
            <h1>Componente Original</h1>
          </div>
        </Contenedor>
        <hr/>
    </div>
  );
}

export default App;
