import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { ErrorMssg, Input, Title } from './style';

export const LoginScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login } = useAuth();
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
  return (
    <div>
      <Title>Iniciar sesión</Title>
      {error &&

         <ErrorMssg>
         <p>{error}</p>
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

        <button onSubmit={handleSubmit}>Iniciar sesión</button>
        <br />
        <br />
        <Link to='/auth/register'>Crear cuenta</Link>
      </form>
    </div>
  );
};
