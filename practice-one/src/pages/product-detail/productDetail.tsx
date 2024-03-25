import { Link, useParams } from 'react-router-dom'
import { API_BASE_URL } from '../../constants/urls'
import { TProduct, TCartItem } from '../../types'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Description from './components/Description'
import ProductDetails from './components/ProductDetails'


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
      try{
      const response = await fetch(`${API_BASE_URL}cart`)
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const listCartItems = (await response.json()) as TCartItem[]
      setListCarts(listCartItems)
      } catch(error){
        console.error('Error fetching carts:', error);
      }
    }

    getListCarts()
    setReload(false)
  }, [reload])

  setCartLength(listCarts.length)

  useEffect(() => {
    const getProductDetails = async () => {
      try{
      const response = await fetch(`${API_BASE_URL}products/${id}`)
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const product = (await response.json()) as TProduct
      setProduct(product) 
      } catch( error) {
        console.error('Error fetching product:', error);
      }
    }

    getProductDetails()
  }, [id])

  return (
    <div className="px-28">
      <p className="mb-12 flex gap-5 text-xl font-normal capitalize">
        <Link to="/">home</Link> / <Link to="/">shop</Link>
      </p>
      {

     product &&
      <ProductDetails product={product} setReload={setReload} />
}
      <Description />
    </div>
  )
}

export default ProductDetailPage
