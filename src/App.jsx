import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './components/NotFound'
const ProductDetail = lazy(() => import('./components/ProductDetail'))
const Cart = lazy(() => import('./components/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
