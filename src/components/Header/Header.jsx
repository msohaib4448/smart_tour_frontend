import React from 'react'
import logo from '../assets/1.png'
import "./Header.css";
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="javascript:void(0)" class="logo"><img src={logo}></img> </a>
        </div>
        <div className="main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blogs">Blogs</Link>
          {/* <a class="active" href="#home">Home</a>
          <a href="#Contact Us">Contact Us</a>
          <a href="#About Us">About Us</a>
          <a href="#Blogs">Blogs</a> */}
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