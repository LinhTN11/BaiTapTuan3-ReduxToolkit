import type { Product } from './productsSlice'

// Giả lập dữ liệu sản phẩm
const fakeProducts: Product[] = [
  { id: 1, name: 'iPhone 15 Pro', price: 29990000 },
  { id: 2, name: 'MacBook Air M3', price: 27990000 },
  { id: 3, name: 'AirPods Pro 2', price: 5990000 },
  { id: 4, name: 'Apple Watch S9', price: 10490000 },
  { id: 5, name: 'iPad Air', price: 16990000 },
  { id: 6, name: 'Magic Keyboard', price: 3490000 },
]

// Giả lập gọi API: trả về sau 500ms
export function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fakeProducts), 500)
  })
}
