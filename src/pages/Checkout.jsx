import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

export default function Checkout(){
  const items = useSelector(s => s.cart.items)
  const list = Object.values(items)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const total = list.reduce((s,i)=>s + i.product.price * i.qty, 0)

  const handlePlaceOrder = () => {
    // stubbed order flow
    dispatch(clearCart())
    alert('Order placed! (this is a demo)')
    nav('/')
  }

  if (!list.length) return <div className="container notfound"><h2>No items to checkout</h2><a href="/">Shop</a></div>

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="card">
        <div>Items: {list.length}</div>
        <div>Total: ₹{total}</div>
        <div style={{marginTop:12}}>
          <button className="btn btn-primary" onClick={handlePlaceOrder}>Place order</button>
        </div>
      </div>
    </div>
  )
}
