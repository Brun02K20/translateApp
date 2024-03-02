import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// en el traductor de google, nosotros emos que tenemos 5 elementos fundamentales: el lenguaje origen,
// el lenguaje destino, el texto que ingresa el usuario, el texto traducido, y el estado de traduciendo.....
const initialstate = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false
}

function App() {
  return (
      <div className='App'>
        <h1>Google translate</h1>
      </div>
  )
}

export default App
