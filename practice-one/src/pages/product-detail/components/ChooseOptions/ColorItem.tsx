const ColorItem = ({
  item,
  onClick,
  isActive,
}: {
  item: string
  onClick: () => void
  isActive?: boolean
}) => {
  let backgroundColor = ''
  if (item === 'orange') {
    backgroundColor = 'bg-orange-500'
  } else if (item === 'blue') {
    backgroundColor = 'bg-blue-500'
  } else if (item === 'green') {
    backgroundColor = 'bg-green-500'
  } else backgroundColor = 'bg-red-500'

  return (
    <button
      onClick={onClick}
      className={`size-5 rounded-2xl border-2 ${backgroundColor} ${isActive ? 'ring-1 ring-purple-700' : ''}`}
    ></button>
  )
}

export default ColorItem
