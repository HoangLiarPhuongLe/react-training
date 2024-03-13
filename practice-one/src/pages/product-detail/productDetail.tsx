import { Link, useParams } from 'react-router-dom'
import Description from './components/Description'
import ProductDetails from './components/ProductDetails'
import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../constants/urls'
import { TProduct } from '../../types'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | undefined>(undefined)

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
      <ProductDetails product={product} />
      <Description />
    </div>
  )
}

export default ProductDetailPage
