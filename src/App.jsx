import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Login';
import Alerta from './components/Alert'
import Titulo from './components/Header'

function App() {

  const [result, setResult] = useState({isShown : false, msg : '', variant : ''});

  return (
    <div>
       <Titulo titulo="Formulario de Autentificación"/>
       <Formulario setResult={setResult}/>
       <Alerta result={result}/>
    </div>
  )
}

export default App;

// Las credenciales de ejemplo son:
// email: roberto@desafiolatam.com
// password: desafiolatam