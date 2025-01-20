import './App.css';
import MostrarImagenes from './component/MostrarImagenes';
import { MostrarVideo } from './component/AudioVideo';

function App() {
  return (
    <div className="App">
      <MostrarImagenes/>
      <hr/>
      <MostrarVideo/>
    </div>
  );
}

export default App;
