import ProductList from './features/products/ProductList'
import CartList from './features/cart/CartList'

function App() {
  return (
    <main style={{ maxWidth: 640, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Sản phẩm</h1>
      <ProductList />
      <h2>Giỏ hàng</h2>
      <CartList />
    </main>
  )
}

export default App
