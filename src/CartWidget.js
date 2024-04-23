import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge">5</span> {/* Número hardcodeado */}
    </div>
  );
}

export default CartWidget;
