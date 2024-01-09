import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="navbar-nav  ">
      <li className="nav-item">
        <NavLink to="/" className="nav-link active" aria-current="page"  >Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/shop" className="nav-link" >Shop</NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink to="/blog" className="nav-link" >Blog</NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink to="/cont" className="nav-link" >Contact Us</NavLink>
      </li>
      {/* <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </NavLink>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><NavLink to="/shop" className="dropdown-item"  >Shop</NavLink></li>
          <li><NavLink to="/blog" className="dropdown-item" >Blog</NavLink></li>

        </ul>
      </li> */}
     
    </ul>
  )
}

export default Nav
