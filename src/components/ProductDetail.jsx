import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductDetail(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => { if (!cancelled) { setProduct(res.data); setLoading(false) }})
      .catch(err => { if (!cancelled) { setError(err); setLoading(false) }})
    return () => { cancelled = true }
  }, [id])

  if (loading) return <div className="loading">Loading product…</div>
  if (error || !product) return <div className="loading">Product not found.</div>

  return (
    <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
      <div className="card">
        <div className="product-img" style={{height:320}}>
          <img src={product.thumbnail || product.images?.[0]} alt={product.title} />
        </div>
      </div>
      <div>
        <h2>{product.title}</h2>
        <div style={{color:'#666'}}>{product.brand} • {product.category}</div>
        <h3 style={{marginTop:12}}>₹{product.price}</h3>
        <p style={{marginTop:12}}>{product.description}</p>
        <div style={{marginTop:16}}>
          <button className="btn btn-primary" onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
