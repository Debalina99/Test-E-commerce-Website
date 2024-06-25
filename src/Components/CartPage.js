import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  //Total amount is calculated
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  //showing cart with the item prices and quantity
  return (
    <div className="cart-page">
      <h2 style={{textAlign:"center", marginBottom:"3rem"}}>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, e.target.value)} min="1" />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h5 style={{float:"right"}}>Total: ${total.toFixed(2)}</h5>
    </div>
  );
};

export default CartPage;
