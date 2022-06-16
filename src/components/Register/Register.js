import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Title, Input, ErrorMssg } from './style';

export const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleInputChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    setError('')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate('/');
    } catch (error) {
      setError('Email ya registrado, por favor use otro email');
    }
  };

  return (
    <div>
      <Title>Registro</Title>
      
      {error && <ErrorMssg><p>{error}</p></ErrorMssg>}
      
      <form onSubmit={handleSubmit}>
        <Input
          type='name'
          name='name'
          id='name'
          placeholder='Nombre'
          onChange={handleInputChange}
        />

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
          placeholder='Contraseña'
          onChange={handleInputChange}
        />

        <button onSubmit={handleSubmit}>Registro</button>

        <br />
        <br />

        <Link to='/auth/login'>Ya eres usuario!</Link>
      </form>
    </div>
  );
};
