import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {


  return (
    <header className="navcontainer">
  <div className="my-app">
  <h2><span className="title">Emergency</span> Application</h2>
  </div>
  <div className="links">
  <NavLink
  to="/"
  exact="true"
  >
    <li>Home</li>
  </NavLink>A

  <NavLink
  to="/about"
  exact="true"
  >
    <li>About</li>
  </NavLink>

  <NavLink
  
  >
   <li>Logout</li> 
  </NavLink>
  </div>

</header>

  );
};

export default NavBar;
