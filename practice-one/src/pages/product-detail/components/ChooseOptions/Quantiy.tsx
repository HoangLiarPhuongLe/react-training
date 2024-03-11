import plus from '../../../../assets/images/plus.svg'
import remove from '../../../../assets/images/remove.svg'
import ButtonIcon from '../../../../components/ButtonIcon'

const Quantity = () => (
  <div>
    <p className="my-3 text-lg font-bold capitalize">quantity</p>
    <div className="flex max-w-max items-center gap-4 border-2 border-solid px-4">
      <ButtonIcon source={remove} alt="remove" />
      <span className="text-sm font-bold">1</span>
      <ButtonIcon source={plus} alt="plus" />
    </div>
  </div>
)

export default Quantity
