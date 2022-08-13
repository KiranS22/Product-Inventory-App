import React from "react";
import { Link } from "react-router-dom";
import './nav.css'
const Navbar = () => {
  return (
    <nav>
      <div></div>
      <Link to="/">Home</Link> | <Link to="/add-products">Add A Product</Link>
    </nav>
  );
};

export default Navbar;
