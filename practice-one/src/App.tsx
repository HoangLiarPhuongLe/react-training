import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header/index'
import CartPage from './pages/cart/cart'
import ProductDetailPage from './pages/product-detail/productDetail'
import ProductsPage from './pages/products/index'
import { useEffect, useState } from 'react'
import { API_BASE_URL } from './constants/urls'
import { TCartItem } from './types'

function App() {
  const [searchvalue, setSearchValue] = useState('')
  const [cartlength, setCartLength] = useState(0)
 

  useEffect(() => {
    const getCartLength = async () => {
      const response = await fetch(`${API_BASE_URL}cart`)
      const listCartItems = (await response.json()) as TCartItem[]
      setCartLength(listCartItems.length)
    }

    getCartLength()
  }, [])

  console.log('search value', searchvalue)
  return (
    <BrowserRouter>
      <Header setSearchValue={setSearchValue} cartlength={cartlength} />
      <Routes>
        <Route path="/" element={<ProductsPage searchvalue={searchvalue} />} />
        <Route
          path="/cart"
          element={<CartPage setCartLength={setCartLength} />}
        />
        <Route
          path="/details/:id"
          element={<ProductDetailPage setCartLength={setCartLength} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
