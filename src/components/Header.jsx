import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <div>
      <h1>Massive (gross) generalization.</h1>
      <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      <hr/>
    </div>
  );
}

export default Header;
