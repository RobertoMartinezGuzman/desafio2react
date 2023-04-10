import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

const Formulario = ({setResult}) => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const validarCampos = (e) => {

      e.preventDefault();
      if (email === '' || password === '') {
          setResult({ isShown: true, msg: 'Debe completar todos los campos!', variant: 'info' });
          return;
      }

      if (email === 'roberto@desafiolatam.com' && password === 'desafiolatam') {
          setResult({ isShown: true, msg: 'Credenciales ingresadas correactamente!', variant: 'success' });
          return;

      } else {
          setResult({ isShown: true, msg: 'Credenciales incorrectas, favor volver a intentar nuevamente.', variant: 'danger' });
      }

        setError(false);
        setEmail('');
        setPassword('');
    }

    const handleOnChange = (e) => {
        
      switch (e.target.name) {
          case 'email':
              setEmail(e.target.value);
              break;
          case 'password':
              setPassword(e.target.value);
              break;
          default:
              console.log("Formulario -> handleOnChange : Switch don't have any case"); 
      }

  };

    return (
    <Form className='m-5' onSubmit={validarCampos}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e) => {handleOnChange(e)}} type="email" placeholder="Ingrese su Email" value={email} name='email' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => { handleOnChange(e)}} type="password" placeholder="Ingrese su Password" value={password} name='password' />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={email==='' && password=='' ? true : false}>
        Iniciar Sesión
      </Button>
    </Form>
  );
}

export default Formulario;