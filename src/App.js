import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ListaPalabras from './Components/Lista_Palabras/ListaPalabras';
import Matriz from './Components/Matriz/Matriz';
import Resultado from './Components/Resultado/Resultado';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <div className="titulo">
        <h1 className="h1Titulo">Buscador de palabras</h1>
        {pathname == "/resultado" && <h1 className="h1TituloResultado">Resultado</h1>}
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
