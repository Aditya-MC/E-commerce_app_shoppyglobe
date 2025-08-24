import React, { useState, useMemo } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductItem from '../components/ProductItem'

export default function Home(){
  const { products, loading, error } = useProducts()
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return products
    return products.filter(p =>
      p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.brand?.toLowerCase().includes(term)
    )
  }, [q, products])

  if (loading) return <div className="loading">Loading products…</div>
  if (error) return <div className="loading">Error fetching products. Try again later.</div>

  return (
    <div>
      <div className="search container">
        <input placeholder="Search products..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>

      <div className="container grid">
        {filtered.map(p => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
