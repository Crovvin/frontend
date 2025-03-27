import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/form.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function formLogin(){
    const res = await axios.post("http://localhost:4000/api/user/login", { username, password });
    if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", username);
        navigate("/pokemon"); // Redirect to Pokemon List if the user was successfully logged in
        alert("Login successful");
    }
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Login</h2>
      <div className="formSection">
          <label className="formLabel">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="formInput" required/>
      </div>
      <div className="formSection">
          <label className="formLabel">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="formInput" required/>
      </div>
      <button className ="formButton" onClick={formLogin}>Login</button>
    </div>
  );
};

export default Login;