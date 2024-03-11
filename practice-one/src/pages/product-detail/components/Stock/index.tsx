import shoppingcart from '../../../../assets/images/shoppingcart.svg'
import ButtonIcon from '../../../../components/ButtonIcon'

const Stock = () => (
  <div>
    <p className="mb-2 text-lg font-bold capitalize">stock</p>
    <div className="flex items-center">
      <span className="text-gray-400">( 1234 )</span>
      <ButtonIcon source={shoppingcart} alt="shopping cart" />
    </div>
  </div>
)

export default Stock
