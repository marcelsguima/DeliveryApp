import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ELEMENTS from '../utils/Html.elements';

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
        console.log(response);
        history.push('/coffee');
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

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
