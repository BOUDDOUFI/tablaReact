import React from "react";
import { NavLink, Bars, NavMenu, Nav } from "./Navbar-elements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink className="navlink" to="/">
          <img src="/logo.png" className="logo" alt="tabla.ma" width="54px" />
          <h3 class="green"> tabla.ma</h3>
        </NavLink>
        <Bars />
        <NavMenu className="center">
          <NavLink to="/Home" className="navlink" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Restaurants" className="navlink" activeStyle>
            Restaurants
          </NavLink>
          <NavLink to="/Foods" className="navlink" activeStyle>
            Foods
          </NavLink>
          <NavLink to="/About" className="navlink" activeStyle>
            About
          </NavLink>
          <NavLink to="/Help" className="navlink" activeStyle>
            Help
          </NavLink>
        </NavMenu>
        <Bars />
        <NavMenu className="right">
          <div>
            <button className="btn-tabla btn ">login</button>
            <button className="btn btn-bg-tabla">sign up</button>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
