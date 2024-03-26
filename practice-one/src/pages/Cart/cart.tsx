import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../constants/urls'
import { TCartItem } from '../../types'
import { Dispatch } from 'react'
import { useState, useEffect, SetStateAction } from 'react'
import Checkout from './components/Checkout'
import CartListItem from './components/CartProduct'


const CartPage = ({
  setCartLength,
}: {
  setCartLength: Dispatch<SetStateAction<number>>
}) => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([])
  const [reload, setReload] = useState(false)

  const [totalPrice, setTotalPrice] = useState<number>(1)
  const [totalQuantity, setTotalQuantity] = useState<number>(1)

  const getTotalPrice = () => {
    let totalPrice = 0

    cartItems.forEach((item: any) => {
      totalPrice += item.price * item.quantity
    })
    setTotalPrice(totalPrice)
  }

  const getTotalQuantity = () => {
    let totalQuantity = 0

    cartItems.forEach((item)=> {
      totalQuantity += item.quantity
    })

    setTotalQuantity(totalQuantity)
  }
  

  useEffect(() => {
    if (cartItems) {
      getTotalPrice()
      getTotalQuantity()
    }
  }, [cartItems])

  useEffect(() => {
    const getListCartItem = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}cart`)
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const productselected = (await response.json()) as TCartItem[]
      setCartItems(productselected)
    } catch(error){
        console.error('Error fetching carts:', error);
    }
  }
    getListCartItem()
    setReload(false)
  }, [reload])

  setCartLength(cartItems.length)

  return (
    <div>
      <section className="bg-purple-600 px-28 py-14 text-white">
        <p className="text-lg font-semibold capitalize ">
          <Link to="/">home</Link> / <Link to="/cart">cart</Link>
        </p>
        <h1 className="mb-10 mt-8 text-4xl font-bold capitalize">cart</h1>
        <p className="text-lg font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> In eget gravida leo, nec iaculis diam. Nam bibendum mi <br />
          sed sem finibus ullamcorper.
        </p>
      </section>
      <div className="mb-9 mt-5  px-28">
        <h2 className="text-2xl font-bold"> Cart Product</h2>
        <div className="flex justify-between">
          <CartListItem
            list={cartItems}
            setReload={setReload}
          />
          <Checkout totalPrice={totalPrice} totalQuantity={totalQuantity} />
        </div>
      </div>
    </div>
  )
}

export default CartPage
