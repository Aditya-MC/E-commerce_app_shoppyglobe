import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(){
  const items = useSelector(s => s.cart.items)
  const count = Object.values(items).reduce((s,i)=>s + i.qty, 0)

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="hanger" />
          <Link to="/" style={{textDecoration:'none', color:'inherit'}}>ShoppyGlobe</Link>
        </div>
        <nav className="nav">
          <Link to="/cart">Cart</Link>
          <Link to="/checkout" style={{marginLeft:12}}>Checkout</Link>
          <span className="cart-badge">{count}</span>
        </nav>
      </div>
    </header>
  )
}
