const SizeItem = ({ item, onClick }: { item: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="size-5 rounded-3xl border-2 text-center text-xs font-medium "
  >
    {item}
  </button>
)

export default SizeItem
