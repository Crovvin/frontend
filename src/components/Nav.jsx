import { Link } from "react-router-dom";

export default function Nav () {
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
      <Link to="/login">
        <div>Login</div>
      </Link>
      <Link to="/register">
        <div>Register</div>
      </Link>
    </div>
  );
}