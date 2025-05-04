// Menu.jsx
import React, { useState } from 'react'
import Slider from '../components/Slider'
import Cart from '../components/Cart'
import '../assets/styles.css'

const menuSections = [
  {
    title: 'Breakfast',
    items: [
      { name: 'Classic Pancakes', price: 12.99, desc: 'Fluffy pancakes served with maple syrup and butter' },
      { name: 'Eggs Benedict', price: 14.99, desc: 'Poached eggs on English muffin with hollandaise sauce' }
    ]
  },
  {
    title: 'Lunch',
    items: [
      { name: 'Grilled Chicken Salad', price: 15.99, desc: 'Fresh greens with grilled chicken and house dressing' },
      { name: 'Burger Deluxe', price: 16.99, desc: 'Angus beef burger with cheese and special sauce' }
    ]
  },
  {
    title: 'Dinner',
    items: [
      { name: 'Grilled Salmon', price: 24.99, desc: 'Fresh salmon with seasonal vegetables' },
      { name: 'Ribeye Steak', price: 29.99, desc: '12oz ribeye with garlic mashed potatoes' }
    ]
  }
]

export default function Menu() {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name)
      if (existing) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      } else {
        return [...prev, { ...item, quantity: 1 }]
      }
    })
  }

  function removeFromCart(name) {
    setCart(prev => prev.filter(i => i.name !== name))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <>
      <Cart cart={cart} onRemove={removeFromCart} onClear={clearCart} />
      <section className="menu">
        <div className="menu-section">
          <h2>Our Menu</h2>
        </div>
        <div className="menu-grid">
          {menuSections.map(section => (
            <div className="menu-card" key={section.title}>
              <strong><h2>{section.title}</h2></strong>
              {section.items.map(item => (
                <div className="menu-item" key={item.name}>
                  <h4>{item.name}</h4>
                  <span className="price">${item.price.toFixed(2)}</span>
                  <p>{item.desc}</p>
                  <button className="cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Slider />
    </>
  )
}