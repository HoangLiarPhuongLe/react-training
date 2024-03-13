import { LIST_STARS } from '../../../../constants/icon'
import productImgBigSize from '../../../../assets/images/productbigsize.png'
import productImgSmallSizeOne from '../../../../assets/images/productsmallsizeone.png'
import productImgSmallSizeTwo from '../../../../assets/images/productsmallsizetwo.png'
import productImgSmallSizeThree from '../../../../assets/images/productsmallsizethree.png'
import bag from '../../../../assets/images/bag.svg'
import Button from '../../../../components/Button'
import { TProduct } from '../../../../types'
import { useEffect, useState } from 'react'
import ButtonIcon from '../../../../components/ButtonIcon'
import ColorChoose from '../ChooseOptions/ColorsChoose'
import Quantity from '../ChooseOptions/Quantiy'
import SizeChoose from '../ChooseOptions/SizeChoose'
import Stock from '../Stock'
import StarFive from '../../../../components/Evalute/StarFive'
import { Link } from 'react-router-dom'

const ProductDetails = ({ product }: { product: TProduct | undefined }) => {
  const [count, setCount] = useState(1)
  const [newprice, setNewPrice] = useState<number>(product?.price || 0)
  const [size, setSize] = useState<string | undefined>(undefined)
  const [color, setColor] = useState<string | undefined>(undefined)

  const getNewPrice = (price: number) => {
    setNewPrice(count * price)
  }

  useEffect(() => {
    if (product) {
      getNewPrice(product.price)
    }
  }, [count, product])

  console.log('color', color)

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
          <Stock />
        </div>
        <SizeChoose list={product?.size} size={size} setSize={setSize} />
        <div className="mb-8 mt-5 flex justify-between">
          <Quantity count={count} setCount={setCount} />
          <p className="self-center text-2xl font-bold uppercase">
            $ {newprice} usd
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/cart">
            <Button
              variant="primary"
              checked={true}
              size="large"
              children="Checkout"
            />
          </Link>

          <ButtonIcon variant="secondary" source={bag} alt="bag" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
