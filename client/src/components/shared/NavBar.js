import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const auth = useSelector((state) => state.auth);



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          { !auth ? (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Log In</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
            </>
            ) : (
            <>
              <li className="nav-item">
                <Link to="/account" className="nav-link">My Account</Link>
              </li>

              <li className="nav-item">
                <Link to="/logout" className="nav-link">Log Out</Link>
              </li>
            </>) 
        }


         
          <li className="nav-item">
            <Link to="/posts" className="nav-link">Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;