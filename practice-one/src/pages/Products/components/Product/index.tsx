import product from '../../../../assets/images/product.png'
import ButtonIcon from '../../../../components/ButtonIcon'
import startfive from '../../../../assets/images/star5.svg'
import { TProduct } from '../../../../types'

const Product = ({ id, name, price, color, category, size }: TProduct) => {
  return (
    <div className="cursor-pointer shadow-md">
      <div>
        <img src={product} alt="product" />
      </div>
      <div className="flex justify-between p-4 pb-6">
        <div className="space-y-2">
          <p className="font-bold">{name}</p>
          <p className="text-slate-400">Best quality</p>
          <div className="">
            <ButtonIcon source={startfive} alt="start five" />
            <ButtonIcon source={startfive} alt="start five" />
            <ButtonIcon source={startfive} alt="start five" />
            <ButtonIcon source={startfive} alt="start five" />
            <ButtonIcon source={startfive} alt="start five" />
            <span className="text-slate-400">(1k)</span>
          </div>
        </div>
        <p className="font-bold">{price}$</p>
      </div>
    </div>
  )
}

export default Product
