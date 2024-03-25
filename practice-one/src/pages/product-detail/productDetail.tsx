import { Link, useParams } from 'react-router-dom'
import Description from './components/Description'
import ProductDetails from './components/ProductDetails'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { API_BASE_URL } from '../../constants/urls'
import { TProduct, TCartItem } from '../../types'

const ProductDetailPage = ({
  setCartLength,
}: {
  setCartLength: Dispatch<SetStateAction<number>>
}) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | undefined>(undefined)
  const [listCarts, setListCarts] = useState<TCartItem[]>([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    const getListCarts = async () => {
      const response = await fetch(`${API_BASE_URL}cart`)
      const listCartItems = (await response.json()) as TCartItem[]
      setListCarts(listCartItems)
    }

    getListCarts()
    setReload(false)
  }, [reload])

  setCartLength(listCarts.length)

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await fetch(`${API_BASE_URL}products/${id}`)
      const product = (await response.json()) as TProduct
      setProduct(product)
    }

    getProductDetails()
  }, [id])

  return (
    <div className="px-28">
      <p className="mb-12 flex gap-5 text-xl font-normal capitalize">
        <Link to="/">home</Link> / <Link to="/">shop</Link>
      </p>
      <ProductDetails product={product} setReload={setReload} />
      <Description />
    </div>
  )
}

export default ProductDetailPage
