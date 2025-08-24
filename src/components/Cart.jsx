import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, changeQty, clearCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart(){
  const items = useSelector(s => s.cart.items)
  const dispatch = useDispatch()
  const list = Object.values(items)

  const total = list.reduce((s,i)=>s + i.product.price * i.qty, 0)

  if (!list.length) return (
    <div className="container notfound">
      <h2>Your cart is empty</h2>
      <Link to="/">Go shopping</Link>
    </div>
  )

  return (
    <div className="container">
      <h2>Cart</h2>
      <div style={{display:'grid', gap:12}}>
        {list.map(entry => (
          <div key={entry.product.id} className="card" style={{display:'flex',gap:12,alignItems:'center'}}>
            <img src={entry.product.thumbnail || entry.product.images?.[0]} alt="" style={{width:80,height:80,objectFit:'cover',borderRadius:8}} />
            <div style={{flex:1}}>
              <div style={{fontWeight:700}}>{entry.product.title}</div>
              <div style={{color:'#666'}}>₹{entry.product.price} x {entry.qty} = ₹{entry.product.price * entry.qty}</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <input type="number" min="0" value={entry.qty} onChange={e => dispatch(changeQty({id: entry.product.id, qty: Number(e.target.value)}))} style={{width:70,padding:6}} />
              <button className="btn" onClick={()=>dispatch(removeFromCart(entry.product.id))}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <strong>Total: ₹{total}</strong>
        </div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn" onClick={()=>dispatch(clearCart())}>Clear</button>
          <Link to="/checkout" className="btn btn-primary">Checkout</Link>
        </div>
      </div>
    </div>
  )
}
