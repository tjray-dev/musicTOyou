import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <div className="navbar">
      <NavLink to='/'>Login</NavLink> <br/>
      <NavLink to='/main_container'>Main</NavLink> <br/>
      <NavLink to='/search'>Search</NavLink> <br/>
      <NavLink to='/favorites'>Favorites</NavLink>
   </div>
  );
}
export default NavBar