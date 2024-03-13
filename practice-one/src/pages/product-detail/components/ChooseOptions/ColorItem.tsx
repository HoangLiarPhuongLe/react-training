const ColorItem = ({
  item,
  onClick,
}: {
  item: string
  onClick: () => void
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
      className={`size-5 rounded-2xl border-2 ${backgroundColor}`}
    ></button>
  )
}

export default ColorItem
