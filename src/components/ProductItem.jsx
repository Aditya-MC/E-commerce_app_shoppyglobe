import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductItem({ product }){
  const dispatch = useDispatch()
  return (
    <div className="card">
      <div className="product-img">
        <img src={product.thumbnail || product.images?.[0]} alt={product.title} />
      </div>
      <h3 style={{margin:'8px 0 4px'}}>{product.title}</h3>
      <div style={{color:'#666', fontSize:'.9rem'}}>{product.brand} • {product.category}</div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8}}>
        <strong>₹{product.price}</strong>
        <div className="actions">
          <button className="btn" onClick={()=>dispatch(addToCart(product))}>Add</button>
          <Link to={`/product/${product.id}`} className="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  )
}
