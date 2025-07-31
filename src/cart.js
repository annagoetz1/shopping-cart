import React from React;
import { useState } from "react";

function Cart ({cartItems}) {
     
return (
cartItems.length > 0 && (
    <div className="cart"style={{ border: "2px solid red", padding: "1rem", marginTop: "2rem" }}>
     
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} x {item.quantity}
          </p>
          </div>
            ))}
          </div>
        ))}

        export default Cart;
    
  