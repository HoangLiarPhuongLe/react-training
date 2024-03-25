import { Dispatch, SetStateAction } from 'react'
import SizeItem from './SizeItem'

const SizeChoose = ({
  list,
  setSize,
  size,
}: {
  list?: string[]
  size?: string
  setSize: Dispatch<SetStateAction<string | undefined>>
}) => {
  const listSize = list?.map((item) => (
    <SizeItem
      key={item}
      item={item}
      isActive={size === item}
      onClick={() => {
        setSize(item)
      }}
    />
  ))
  return (
    <div>
      <p className="my-3 text-lg font-bold capitalize">size</p>
      <div className="flex gap-2">{listSize}</div>
    </div>
  )
}

export default SizeChoose
