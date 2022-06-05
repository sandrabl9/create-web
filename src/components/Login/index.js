import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export const Login = () => {
    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    );
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError ] = useState();

    const handleInputChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        try {
          
          await login(user.email, user.password)
          navigate('/')

        } catch (error) {
          setError(error.message) //error.code codigo
        }
    }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input 
          type='email' 
          name='email' 
          id='email' 
          placeholder='email@email.com'
          onChange={handleInputChange}
           />

        <label htmlFor='password'>Contraseña</label>
        <input 
          type='password' 
          name='password' 
          id='password' 
          placeholder='Password'
          onChange={handleInputChange}
          />
  
        <button onSubmit={handleSubmit}>Login</button>
    </form>
    </div>
  )
}
