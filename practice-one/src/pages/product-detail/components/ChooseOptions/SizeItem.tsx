const SizeItem = ({
  item,
  onClick,
  isActive,
}: {
  item: string
  onClick: () => void
  isActive: boolean
}) => (
  <button
    onClick={onClick}
    className={`size-5 rounded-3xl border-2 text-center text-xs font-medium ${isActive ? 'bg-blue-600 font-bold text-white' : ''}`}
  >
    {item}
  </button>
)

export default SizeItem
