import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(){
    const res = await axios.post("http://localhost:4000/api/user/login", { username, password });
    if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", username);
        navigate("/pokemon"); // Redirect to pokemon list if the user was successfully logged in
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;