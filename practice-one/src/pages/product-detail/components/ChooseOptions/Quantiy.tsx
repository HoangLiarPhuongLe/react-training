import plus from '../../../../assets/images/plus.svg'
import remove from '../../../../assets/images/remove.svg'
import ButtonIcon from '../../../../components/ButtonIcon'

const Quantity = ({
  count,
  setCount,
  setDecre,
  checked,
  disabledRemove,
  disabledAdd
}: {
  count: number
  checked?: boolean
  disabledRemove?: boolean
  disabledAdd?: boolean
  setCount?: () => void
  setDecre?: () => void
}) => {

  let title = ''
  checked ? title = 'quantity' : ''
  return (
    <div>
      <p className="my-3 text-lg font-bold capitalize">
        {title}
      </p>
      <div className="flex max-w-max items-center gap-4 border-2 border-solid bg-white px-4">
        <ButtonIcon disabled={disabledRemove} onClick={setDecre} source={remove} alt="remove" />
        <span className="text-sm font-bold">{count}</span>
        <ButtonIcon disabled={disabledAdd}  onClick={setCount} source={plus} alt="plus" />
      </div>
    </div>
  )
}

export default Quantity
