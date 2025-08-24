import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {} // { [productId]: { product, qty } }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const id = product.id
      if (state.items[id]) {
        state.items[id].qty += 1
      } else {
        state.items[id] = { product, qty: 1 }
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      delete state.items[id]
    },
    changeQty: (state, action) => {
      const { id, qty } = action.payload
      if (state.items[id]) {
        state.items[id].qty = qty
        if (qty <= 0) delete state.items[id]
      }
    },
    clearCart: (state) => {
      state.items = {}
    }
  }
})

export const { addToCart, removeFromCart, changeQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
