import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Input, Title } from "./style";

export const LoginScreen = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleInputChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message); //error.code codigo
    }
  };
  return (
    <div>
      <Title>Login</Title>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          onChange={handleInputChange}
        />

        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleInputChange}
        />

        <button onSubmit={handleSubmit}>Login</button>
        <br />
        <br />
        <Link to="/auth/register">Create new account</Link>
      </form>
    </div>
  );
};
