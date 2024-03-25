import { TSize } from '../../../../types'

const SizeItem = ({
  variant,
  isChecked,
  onClick,
}: {
  variant: TSize
  isChecked: boolean
  onClick: () => void
}) => {
  let result = ''
  if (variant === 'S') result = 'S'
  if (variant === 'M') result = 'M'
  if (variant === 'L') result = 'L'
  if (variant === 'XL') result = 'XL'
  if (variant === 'XXL') result = 'XXL'

  return (
    <form className="flex flex-col items-center">
      <label className="uppercase">{result}</label>
      <input type="radio" onClick={onClick} checked={isChecked} />
    </form>
  )
}

export default SizeItem
