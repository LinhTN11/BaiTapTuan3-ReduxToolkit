import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../products/productsSlice'

// Một dòng hàng trong giỏ: sản phẩm + số lượng
export interface CartItem {
  product: Product
  quantity: number
}

// State của slice cart
interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ (tăng số lượng nếu đã có sẵn)
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find((i) => i.product.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ product: action.payload, quantity: 1 })
      }
    },
    // Xoá khỏi giỏ
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.product.id !== action.payload)
    },
    // Cập nhật số lượng
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.items.find((i) => i.product.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
