import { useState } from 'react';
import './App.css';
import { GrupoRadio, RadioGrupo } from './ManipulacionDinamica/ComoNosConoces';
import {ContadorHijos, Lista, RevisarHijos, UnicoHijo} from './ManipulacionDinamica/objetoChildren'
import { BotonGrande, Contenedor, Tarjeta } from './ManipulacionDinamica/objetoCloneElement';

function App() {

  const [selected, setSelected] = useState("");

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
        
        <h2>Como conociste nuestro restaurante??</h2>
        <GrupoRadio onChange={setSelected} selected={selected}>
          <RadioGrupo value="social_media">Social Media</RadioGrupo>
          <RadioGrupo value="friends">Friends</RadioGrupo>
          <RadioGrupo value="advertising">Advertising</RadioGrupo>
          <RadioGrupo value="other">Other</RadioGrupo>
        </GrupoRadio>
        <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
