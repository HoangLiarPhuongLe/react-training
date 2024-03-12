import { TColor } from '../../../../types'

const ColorItem = ({
  variant,
  isActive,
  onClick,
}: {
  variant: TColor
  isActive?: boolean
  onClick: () => void
}) => {
  let color = ''
  if (variant === 'green') color = 'bg-green-500'
  if (variant === 'red') color = 'bg-red-500'
  if (variant === 'blue') color = 'bg-blue-500'
  if (variant === 'orange') color = 'bg-orange-500'
  return (
    <button
      onClick={onClick}
      className={`size-5 rounded-2xl border-2 ${color} ${isActive ? 'ring-1 ring-black' : ''} `}
    />
  )
}

export default ColorItem
