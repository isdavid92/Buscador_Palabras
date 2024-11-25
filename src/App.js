import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPalabras from './Components/Lista_Palabras/ListaPalabras';
import Matriz from './Components/Matriz/Matriz';
import Resultado from './Components/Resultado/Resultado';

function App() {

  return (
    <div className="App">
      <div className="titulo">
        <h1 className="h1Titulo">Buscador de palabras</h1>
      </div>
      <Routes>
        <Route path='/' element={<ListaPalabras/>}/>
        <Route path='/matriz' element={<Matriz/>}/>
        <Route path='/resultado' element={<Resultado/>}/>
      </Routes>
    </div>
  );
}

export default App;
