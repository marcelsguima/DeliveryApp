import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ELEMENTS from '../utils/Html.elements';
import { requestLogin } from '../services/requests';
import axios from 'axios';

function Login() {
  const history = useHistory();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const minimumPassword = 6;

  const validateEmail = (param) => {
    const EMAIL_FORMAT = /^[^\s@]+@[^\s@]+\.(com)$/;
    return EMAIL_FORMAT.test(param);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsButtonDisabled(!validateEmail(e.target.value) || password
      .length < minimumPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsButtonDisabled(!validateEmail(email) || event.target.value
      .length < minimumPassword);
  };

  const handleClick = () => {
    axios.post('http://localhost:3001/login', {
      email,
      password,
    })
    .then((response) => {
        console.log(response.data, 'Número 3-');
        const { email, role, name } = response.data;
        const user = { email, role, name };
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((error) => {
        if (error.response) {
          // Erro de servidor
          console.log(error.response.data, 'Número 1-');
          console.log(error.response.status, 'Número 2-');
        } else if (error.request) {
          // Erro de rede
          console.log(error.request);
        } else {
          // Erro desconhecido
          console.log('Erro', error.message);
        }
      });
    history.push('/customer/products');
  }
//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await requestLogin(
//         '/login',
//         { email, password },
//       );
//       console.log(response);
//       localStorage.setItem('user', JSON.stringify(response));
//       history.push('/customer/products');
//     } catch (error) {
//       console.log(error);
//     }
// >>>>>>> 123451f8c3b97147ab90af3ff6951844cafe63f2
//   };
  // useEffect(() => {
  //   const user = localStorage.getItem('user');
  //   console.log(user);
  //   if (user) {
  //     history.push('/customer/products');
  //   }
  // }, []);

  return (
    <div>
      <form>
        <label htmlFor="input-email">
          Login
          <input
            type="email"
            data-testid={ `${ELEMENTS.ROUTE}__${ELEMENTS.INPUT_EMAIL}` }
            placeholder="email@email.com"
            id="input-email"
            value={ email }
            onChange={ handleChangeEmail }
          />
        </label>

        <label htmlFor="input-password">
          Senha
          <input
            type="password"
            data-testid={ `${ELEMENTS.ROUTE}__${ELEMENTS.INPUT_PASSWORD}` }
            placeholder="Digite sua senha"
            id="input-password"
            value={ password }
            onChange={ handlePasswordChange }
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ isButtonDisabled }
          onClick={ handleClick }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid={ `${ELEMENTS.ROUTE}__${ELEMENTS.BUTTON_REGISTER}` }
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
        <h6
          data-testid={ `${ELEMENTS.ROUTE}__${ELEMENTS.INVALID_EMAIL}` }
        >
          Elemento oculto
          (Mensagens de erro)
        </h6>
      </form>
    </div>
  );
}

export default Login;
