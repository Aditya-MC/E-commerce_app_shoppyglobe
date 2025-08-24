import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="container notfound">
      <h2>404 — Page not found</h2>
      <p>Either that page exploded, or you typed the address like your cat walked across the keyboard.</p>
      <Link to="/">Back to home</Link>
    </div>
  )
}
