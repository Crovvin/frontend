import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "../styles/form.css"

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function formSubmit(e){
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:4000/api/user/register", {
        username,
        password,
      });

      // If registration is successful, navigate to the login page
      navigate("/login");
      alert("Registration successful");
      
    //   if (res.status === 201) {
    //     navigate("/login");
    //   }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Register</h2>
      {error && <p className="">{error}</p>}
      <form onSubmit={formSubmit}>
        <div className="formSection">
          <label className="formLabel">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="formInput" required/>
        </div>
        <div className="formSection">
          <label className="formLabel">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="formInput" required/>
        </div>
        <button className ="formButton" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;