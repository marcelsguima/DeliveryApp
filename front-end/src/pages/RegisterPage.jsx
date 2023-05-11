import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestRegister } from '../services/requests';

export default function RegisterPage() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const history = useHistory();

  function getRegister({ target }) {
    const { name, value } = target;
    setRegister({ ...register, [name]: value });
  }
  const emailRegex = /\S+@\S+\.\S+/;
  const minPasswordLength = 6;
  const minNameLength = 12;

  const isPasswordValid = register.password.length >= minPasswordLength;
  const isEmailValid = emailRegex.test(register.email);
  const isNameValid = register.name.trim().length > minNameLength;

  const credentValid = (isPasswordValid && isEmailValid && isNameValid);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await requestRegister(
        '/register',
        {
          email: register.email,
          password: register.password,
          name: register.name,
          role: 'customer' },
      );
      localStorage.setItem('user', JSON.stringify(response));
      history.push('/customer/products');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Cadastro</h1>
        <form className="register-form">
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={ register.name }
              onChange={ getRegister }
              data-testid="common_register__input-name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="seu-email@site.com.br"
              value={ register.email }
              data-testid="common_register__input-email"
              onChange={ getRegister }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              placeholder="**********"
              value={ register.password }
              data-testid="common_register__input-password"
              onChange={ getRegister }
            />
          </label>
          <button
            type="button"
            disabled={ !credentValid }
            className="register-btn"
            data-testid="common_register__button-register"
            onClick={ handleClick }
          >
            Cadastrar
          </button>
        </form>
        {
          error && (
            <p
              data-testid="common_register__element-invalid_register"
              style={ { color: 'black' } }
            >
              Elemento oculto
            </p>)
        }
        <div>
          <button
            type="button"
            className="back-end"
            onClick={ () => history('/login') }
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
