import ColorItem from './ColorItem'

const ColorChoose = () => (
  <div>
    <p className="mb-3 text-lg font-bold capitalize">color</p>
    <div className="flex gap-2">
      <ColorItem />
      <ColorItem />
      <ColorItem />
    </div>
  </div>
)

export default ColorChoose
