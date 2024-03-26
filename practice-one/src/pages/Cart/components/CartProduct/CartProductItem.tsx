import { API_BASE_URL } from '../../../../constants/urls'
import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { TCartItem } from '../../../../types'
import ButtonIcon from '../../../../components/ButtonIcon'
import Quantity from '../../../product-detail/components/ChooseOptions/Quantiy'
import trashcan from '../../../../assets/images/trashcan.svg'
import cartImg from '../../../../assets/images/cartImg.png'

const CartItem = ({
  cartitem,
  setReload,
  onIncre,
  onDecre,
}: {
  cartitem: TCartItem | any
  setReload: Dispatch<SetStateAction<boolean>>
  onIncre: () => void
  onDecre: () => void
}) => {

  const [isDisabledRemove, setIsDisabledRemove] = useState(false)
  const [isDisabledAdd, setIsDisabledAAdd] = useState(false)


  const deleteCartByID = async (id: number | undefined) => {
    await fetch(`${API_BASE_URL}cart/${id}`, {
      method: 'DELETE',
    })

    setReload(true)
  }

  useEffect(()=> {
    if(cartitem.quantity <=1) {
      setIsDisabledRemove(true)
      setIsDisabledAAdd(false) 
    }
    else if(cartitem.quantity >= cartitem.stock){
      setIsDisabledRemove(false)
      setIsDisabledAAdd(true)
    
    } else{ setIsDisabledRemove(false)
     setIsDisabledAAdd(false)}
  }, [cartitem.quantity, cartitem.stock])

  return (
    <div className="w-full border-solid bg-slate-300 px-6 py-5">
      <ul className="flex items-center gap-20  text-center">
        <li>
          <img src={cartImg} alt="cart image" />
        </li>
        <li className='w-36'>
          <span className="text-lg font-bold capitalize">{cartitem.name}</span>
          <p className="text-gray-400">Color: {cartitem.color} </p>
        </li>
        <li className='w-24'>
          <span className="text-lg font-bold uppercase">
            $ {cartitem.price * cartitem.quantity} usd
          </span>
          <p className="text-gray-400">Price</p>
        </li>
        <li>
          <span className="text-lg font-bold ">{cartitem.stock}</span>
          <p className="text-gray-400">In Stock</p>
        </li>
        <li>
          <ButtonIcon
            source={trashcan}
            alt="trash can"
            onClick={() => deleteCartByID(cartitem.id)}
          />
        </li>
      </ul>
      <div className='flex justify-between items-center mt-7'>
        <p className='font-semibold text-lg text-blue-400'>products notes</p>
        <Quantity
          count={cartitem.quantity}
          setCount={onIncre}
          setDecre={onDecre}
          checked={false}
          disabledAdd={isDisabledAdd}
          disabledRemove= {isDisabledRemove}
        />
      </div>
      
    </div>
  )
}

export default CartItem
