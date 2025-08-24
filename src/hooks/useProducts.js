import { useEffect, useState } from 'react'
import axios from 'axios'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    axios.get('https://dummyjson.com/products')
      .then(res => {
        if (!cancelled) {
          setProducts(res.data.products || [])
          setLoading(false)
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err)
          setLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [])

  return { products, loading, error }
}
