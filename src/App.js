import './App.css';
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Login from './components/Login';


function App() {
  const navigate = useNavigate();

  const registerUser = () => {
    console.log("Register User");
    navigate("/register");
  };

  const login = () => {
    console.log("Login to account");
    navigate("/login");
  };

  return (
    <div className="App">
      <h1>Edging App</h1>
      <p>What is actually wrong with y'all?</p>

      <h3>What are you waiting for? Start watching compelling edging content now!</h3>
      <p>Proudly brought to you by a no-life programmer who takes requests from retards 💖</p>

      <button onClick={registerUser}>Register</button><p>Or...</p>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
