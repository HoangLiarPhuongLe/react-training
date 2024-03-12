import { TProduct } from '../../../../types'
import { LIST_STARS } from '../../../../constants/icon'
import productImage from '../../../../assets/images/product.png'
import StarFive from '../../../../components/Evalute/StarFive'

const Product = ({ id, name, price, color, category, size }: TProduct) => {
  return (
    <div className="cursor-pointer shadow-md">
      <div>
        <img src={productImage} alt="product" />
      </div>
      <div className="flex justify-between p-4 pb-6">
        <div className="space-y-2">
          <p className="font-bold">{name}</p>
          <p className="text-slate-400">Best quality</p>
          <StarFive list={LIST_STARS} />
        </div>
        <p className="font-bold">{price}$</p>
      </div>
    </div>
  )
}

export default Product
