import './App.css';
import ListaPalabras from './Components/Lista_Palabras/ListaPalabras';
import Matriz from './Components/Matriz/Matriz';

function App() {
  return (
    <div className="App">
      <div className="titulo">
        <h1 className="h1Titulo">Buscador de palabras</h1>
      </div>
      <ListaPalabras />
      <Matriz />
    </div>
  );
}

export default App;
