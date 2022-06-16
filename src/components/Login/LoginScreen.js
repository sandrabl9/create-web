import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Input, Title } from './style';

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
    } catch (error) {
      setError('Email o contraseña incorrectos'); //a partir del código de error que nos viene de firebase
    }
  };
  return (
    <div>
      <Title>Iniciar sesión</Title>
      {error && <p>{error}</p>}
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
          id='Contraseña'
          placeholder='Password'
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
