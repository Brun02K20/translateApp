import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { type State, type Action } from './types.d';
import { useStore } from './hooks/useStore';

function App() {
  const {fromLanguage, setFromLanguage} = useStore()
  return (
      <div className='App'>
        <h1>Google translate</h1>
        <button onClick={() => {
          setFromLanguage("es")
        }}>Cambiar Idioma</button>
        {fromLanguage}
      </div>
  )
}

export default App
