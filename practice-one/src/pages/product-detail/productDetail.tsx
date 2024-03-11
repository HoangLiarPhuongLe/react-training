import { Link } from 'react-router-dom'
import Description from './components/Description'
import ProductDetails from './components/ProductDetails'

const ProductDetailPage = () => {
  return (
    <div className="px-28">
      <p className="mb-12 flex gap-5 text-xl font-normal capitalize">
        <Link to="/">home</Link> / <Link to="/">shop</Link>
      </p>
      <ProductDetails />
      <Description />
    </div>
  )
}

export default ProductDetailPage
