// Cart.jsx
import React from 'react'

export default function Cart({ cart, onRemove, onClear }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div id="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul id="cart-items">
        {cart.map((item) => (
          <li key={item.name}>
            {item.name} × {item.quantity} = ${ (item.price * item.quantity).toFixed(2) }
            <button className="remove" onClick={() => onRemove(item.name)}>Remove</button>
          </li>
        ))}
      </ul>
      <p id="cart-total">Total: ${total.toFixed(2)}</p>
      <button id="cart-clear" onClick={onClear}>Clear Cart</button>
    </div>
  )
}
