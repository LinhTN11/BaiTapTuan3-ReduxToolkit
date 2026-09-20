import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { removeFromCart, updateQuantity } from './cartSlice'

function CartList() {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)

  if (items.length === 0) return <p>Giỏ hàng trống.</p>

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.product.id}>
            {item.product.name} —{' '}
            {item.product.price.toLocaleString('vi-VN')}đ × {item.quantity} ={' '}
            {(item.product.price * item.quantity).toLocaleString('vi-VN')}đ{' '}
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.product.id, quantity: item.quantity + 1 }))
              }
            >
              +
            </button>{' '}
            <button
              onClick={() =>
                item.quantity > 1
                  ? dispatch(updateQuantity({ id: item.product.id, quantity: item.quantity - 1 }))
                  : dispatch(removeFromCart(item.product.id))
              }
            >
              −
            </button>{' '}
            <button onClick={() => dispatch(removeFromCart(item.product.id))}>Xoá</button>
          </li>
        ))}
      </ul>
      <p>
        <strong>Tổng cộng: {total.toLocaleString('vi-VN')}đ</strong>
      </p>
    </div>
  )
}

export default CartList
