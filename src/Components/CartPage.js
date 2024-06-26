import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../Style/Index.css'
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  //Total amount is calculated
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  //showing cart with the item prices and quantity
  return (
    <div className="cart-page">
      <h2 style={{textAlign:"center", marginBottom:"3rem"}}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className='empty-card' style={{textAlign:"center", marginBottom:"3rem"}}>
          <p >Your cart is empty.</p>
          <img src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="empty cart" style={{height:"300px"}}></img>
        </div>
      ) : (
        <>
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
      </>
    )}
      <h5 style={{float:"right"}}>Total: ${total.toFixed(2)}</h5>
      {cart.length!==0 ? 
        (
          <button className="checkout-button" style={{float:"right",marginTop:"3rem"}}>Checkout</button>
        ) : ' '
      }
    </div>
  );
};

export default CartPage;
