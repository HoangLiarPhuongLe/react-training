import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header/index'
import CartPage from './pages/cart/cart'
import ProductDetailPage from './pages/product-detail/productDetail'
import ProductsPage from './pages/products'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
