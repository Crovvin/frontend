import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "../styles/nav.css"
// import { useState } from "react"

// //Unimplemented code to only show when logged in
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => {
//     // Check if the user is logged in by checking if a token is available in localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

// async function logout(){
//   localStorage.removeItem("token");
//   localStorage.removeItem("username");

//   // Redirect to login page
//   navigate("/login");
// }

export default function Nav () {
  const navigate = useNavigate();
  async function logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("username");

  // Redirect to login page
  navigate("/login");
  alert("Logout Successful")
  }
  
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/pokemon">
        <div>POKEMON LIST</div>
      </Link>
      <Link to="/favorites">
        <div>FAVORITES</div>
      </Link>
      <Link to="/register">
        <div>Register</div>
      </Link>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}