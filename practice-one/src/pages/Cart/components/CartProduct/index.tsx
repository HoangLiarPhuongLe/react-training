import { API_BASE_URL } from '../../../../constants/urls'
import { Dispatch, SetStateAction } from 'react'
import { TCartItem } from '../../../../types'
import CartItem from './CartProductItem'


const CartListItem = ({
  list,
  setReload,
  setCartItems,
}: {
  list: TCartItem[]
  setReload: Dispatch<SetStateAction<boolean>>

  setCartItems: Dispatch<SetStateAction<TCartItem[]>>
}) => {
  const updateQuantityByID = async (item: TCartItem) => {
    try {
      const response = await fetch(`${API_BASE_URL}cart/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })

      const data = await response.json()

      console.log('update success')

      console.log('data', data)

      return data
    } catch (error) {
      console.error('Error update cart:', error)
      throw new Error('Failed to update cart.')
    }
  }

  const newList = list
  
  return (
    <div className="flex flex-col gap-5">
      {list.map((cartitem, index) => (
        <CartItem
          cartitem={cartitem}
          key={cartitem.id}
          setReload={setReload}
          onIncre={() => {
            newList[index].quantity = cartitem.quantity + 1
            updateQuantityByID(cartitem)
            setReload(true)
          }}
          onDecre={() => {
            newList[index].quantity = cartitem.quantity - 1
            updateQuantityByID(cartitem)
            setReload(true)
          }}
        />
      ))}
    </div>
  )
}

export default CartListItem
