import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../../../constants/urls'
import { LIST_STARS } from '../../../../constants/icon'
import { TProduct, TCartItem } from '../../../../types'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Button from '../../../../components/Button'
import ButtonIcon from '../../../../components/ButtonIcon'
import ColorChoose from '../ChooseOptions/ColorsChoose'
import Quantity from '../ChooseOptions/Quantiy'
import SizeChoose from '../ChooseOptions/SizeChoose'
import Stock from '../Stock'
import StarFive from '../../../../components/Evalute/StarFive'
import productImgBigSize from '../../../../assets/images/productbigsize.png'
import productImgSmallSizeOne from '../../../../assets/images/productsmallsizeone.png'
import productImgSmallSizeTwo from '../../../../assets/images/productsmallsizetwo.png'
import productImgSmallSizeThree from '../../../../assets/images/productsmallsizethree.png'
import bag from '../../../../assets/images/bag.svg'



const ProductDetails = ({
  product,
  setReload,
}: {
  product: TProduct 
  setReload: Dispatch<SetStateAction<boolean>>
}) => {
  const [count, setCount] = useState(1)
  const [newprice, setNewPrice] = useState<number>(product?.price || 0)
  const [size, setSize] = useState<string | undefined>(undefined)
  const [color, setColor] = useState<string | undefined>(undefined)
  const [stock, setStock] = useState<number>(product?.stock || 0)
  const [isdisabled, setIsDisabled] = useState(true)
  const [isDisabledRemove, setIsDisabledRemove] = useState(false)
  const [isDisabledAdd, setIsDisabledAAdd] = useState(false)

  const addToCart = async (productSelected: TCartItem) => {
    try {
      const response = await fetch(`${API_BASE_URL}cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productSelected),
      })

      const data = await response.json()

      console.log('add success')

      return data
    } catch (error) {
      console.error('Error adding product:', error)
      throw new Error('Failed to add product.')
    }
  }

  const getNewPrice = (price: number) => {
    setNewPrice(count * price)
  }

  useEffect(()=>{
    if(color && size) {
      setIsDisabled(false)
    }
  }, [size,color])

  useEffect(() => {
    if (product) {
      getNewPrice(product.price)
      setStock(product.stock)
    }
  }, [count, product])

  useEffect(()=> {
    if(count <=1) {
      setIsDisabledRemove(true)
      setIsDisabledAAdd(false) 
    }
    else if(count >= stock){
      setIsDisabledRemove(false)
      setIsDisabledAAdd(true)
    
    } else{ setIsDisabledRemove(false)
     setIsDisabledAAdd(false)}
  }, [count, stock])

  const productSelected: Omit<TCartItem,'id'> = {
    productId: product.id,
    name: product?.name,
    price: product?.price,
    color: color,
    quantity: count,
    stock: stock,
  }

  return (
    <div className="mb-8 flex gap-28">
      <div className="w-full">
        <img src={productImgBigSize} alt="product image" />
        <div className="mt-5 grid  grid-cols-3">
          <img src={productImgSmallSizeOne} alt="product image" />
          <img src={productImgSmallSizeTwo} alt="product image" />
          <img src={productImgSmallSizeThree} alt="product image" />
        </div>
      </div>
      <div>
        <h2 className="mb-5 text-4xl font-bold capitalize">{product?.name}</h2>
        <p className="text-start text-lg font-normal text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
          gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
          ullamcorper.
        </p>
        <StarFive list={LIST_STARS} />
        <div className="mt-6 flex justify-between">
          <ColorChoose
            list={product?.color}
            color={color}
            setColor={setColor}
          />
          <Stock stock={stock} />
        </div>
        <SizeChoose list={product?.size} size={size} setSize={setSize} />
        <div className="mb-8 mt-5 flex justify-between">
          <Quantity
            count={count}
            setCount={() => {
              setCount(count + 1)
            }}
            setDecre={() => {
              setCount(count - 1)
            }}
            checked={true}
            disabledRemove = {isDisabledRemove}
            disabledAdd = {isDisabledAdd}
          />
          <p className="self-center text-2xl font-bold uppercase">
            $ {newprice} usd
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link className='w-full' to="/cart">
            <Button
              variant="primary"
              checked={true}
              size="large"
              children="Checkout"
              disabled={isdisabled}
              onClick={() => {
                addToCart(productSelected)
              }}
            />
          </Link>
          <ButtonIcon
            variant="secondary"
            source={bag}
            disabled={isdisabled}
            onClick={() => {
              addToCart(productSelected)
              alert('Add to Cart Succesfull')
              setReload(true)
            }}
            alt="bag"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
