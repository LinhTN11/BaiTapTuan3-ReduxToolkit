import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getProducts } from './productsSlice'
import { addToCart } from '../cart/cartSlice'
import type { Product } from './productsSlice'

function ProductList() {
  const dispatch = useAppDispatch()
  const { items, status, error } = useAppSelector((state) => state.products)

  if (status === 'idle') {
    return (
      <p>
        Chưa có dữ liệu.{' '}
        <button onClick={() => dispatch(getProducts())}>Tải danh sách sản phẩm</button>
      </p>
    )
  }

  if (status === 'loading') return <p>Đang tải sản phẩm…</p>
  if (status === 'failed') return <p>Lỗi: {error}</p>

  return (
    <ul>
      {items.map((product: Product) => (
        <li key={product.id}>
          {product.name} — {product.price.toLocaleString('vi-VN')}đ{' '}
          <button onClick={() => dispatch(addToCart(product))}>Thêm vào giỏ</button>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
