import React from 'react'
import logo from '../../components/assets/1.png'
import "./Header.css";
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/" className="logo"><img src={logo}></img></Link>
        </div>
        <div className="main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blogs">Blogs</Link>

        </div>

        <div className="form">
          <Link to="/signin"><button class="button">Sign In</button></Link>
          <Link to="/register"><button class="button">Register</button></Link>
        </div>


      </div>
      {/* <div class="container">
  <div class="background-image"></div>
</div> */}

    </>
  )
}

export default NavBar