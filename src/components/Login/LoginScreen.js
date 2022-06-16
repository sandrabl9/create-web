import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ErrorMssg, Input, Title } from './style';
import { useAuth } from '../../context/authContext';

export const LoginScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleInputChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (err) {
      setError('Email y/o contraseña incorrectos');
    }
  };

  const handleResetPassword = async() => {
    if (!user.email) {
      setError('Por favor ingresa un email')
    } 
    try {
      await resetPassword(user.email)
      setError('Le hemos enviado un email')

    } catch (err) {
      setError('Este email no está registrado')

    }
  }
  return (
    <div>
      <Title>Iniciar sesión</Title>
      {error &&

         <ErrorMssg>
            {error}
         </ErrorMssg>
      }
      <form onSubmit={handleSubmit}>
        <Input
          type='email'
          name='email'
          id='email'
          placeholder='email@email.com'
          onChange={handleInputChange}
        />

        <Input
          type='password'
          name='password'
          id='password'
          placeholder='contraseña'
          onChange={handleInputChange}
        />

        <a 
        href='#!'
        onClick={handleResetPassword}
        >
          Recuperar contraseña
        </a>
        <br />

        <button onSubmit={handleSubmit}>Iniciar sesión</button>
        <br />
        <br />
        <Link to='/auth/register'>Crear cuenta</Link>
      </form>
    </div>
  );
};
