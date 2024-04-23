import React from 'react';
import CartWidget from '/CartWidget.js';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Mi Tienda</a>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
