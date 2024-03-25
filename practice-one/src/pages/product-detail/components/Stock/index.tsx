import shoppingcart from '../../../../assets/images/shoppingcart.svg'
import ButtonIcon from '../../../../components/ButtonIcon'

const Stock = ({ stock }: { stock: number | undefined }) => (
  <div>
    <p className="mb-2 text-lg font-bold capitalize">stock</p>
    <div className="flex items-center">
      <span className="text-gray-400">( {stock} )</span>
      <ButtonIcon source={shoppingcart} alt="shopping cart" />
    </div>
  </div>
)

export default Stock
