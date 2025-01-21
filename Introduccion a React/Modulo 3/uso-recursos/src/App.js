import './App.css';
import MostrarImagenes from './component/MostrarImagenes';
import { MostrarVideo } from './component/AudioVideo';
import SelectorCanciones from './component/SelectorCanciones';

function App() {
  return (
    <div className="App">
      <MostrarImagenes/>
      <hr/>
      <MostrarVideo/>
      <hr/>
      <SelectorCanciones/>
    </div>
  );
}

export default App;
