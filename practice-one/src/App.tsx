import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header/index'
import CartPage from './pages/cart/index'
import DetailsPage from './pages/Details'
import ProductsPage from './pages/products/index'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
