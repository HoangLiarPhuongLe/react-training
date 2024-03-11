import SizeItem from './SizeItem'

const SizeChoose = () => (
  <div>
    <p className="my-3 text-lg font-bold capitalize">size</p>
    <div className="flex gap-2">
      <SizeItem />
      <SizeItem />
      <SizeItem />
    </div>
  </div>
)

export default SizeChoose
