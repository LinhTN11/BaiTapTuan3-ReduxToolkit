import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts } from './productsAPI'

// Kiểu dữ liệu sản phẩm
export interface Product {
  id: number
  name: string
  price: number
  image: string
}

// State của slice products
interface ProductsState {
  items: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
}

// createAsyncThunk lấy danh sách sản phẩm từ API giả lập
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  return await fetchProducts()
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Không lấy được danh sách sản phẩm'
      })
  },
})

export default productsSlice.reducer
