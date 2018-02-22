import React, {Component} from 'react';

const Navbar = (props) => (

     <nav className="navbar">
     <a href="/" className="navbar-brand">Chatty</a>
     <span className="navbar-usercount"> There are {props.usercount} Users currently online
     </span>
     </nav>
    )

export default Navbar;

