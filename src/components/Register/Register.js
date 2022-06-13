import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Title, Input } from './style';

export const Register = () => {
    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    );
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [error, setError ] = useState();

    const handleInputChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        try {
          
          await signup(user.email, user.password)
          navigate('/')

        } catch (error) {
          setError(error.message) //error.code codigo
        }
    }

  return (
    <div>
      <Title>Register</Title>
      {error && <p>{error}</p>}
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
          placeholder='Password'
          onChange={handleInputChange}
          />
  
        <button onSubmit={handleSubmit}>Register</button>

        <br />
        <br />


        <Link to='auth/login'>
              Already register!
      </Link>
    </form>
    </div>
  )
}
