import { Dispatch, SetStateAction } from 'react'
import ColorItem from './ColorItem'

const ColorChoose = ({
  list,
  setColor,
}: {
  list?: string[]
  setColor: Dispatch<SetStateAction<string | undefined>>
}) => {
  const listColor = list?.map((item) => (
    <ColorItem
      key={item}
      item={item}
      onClick={() => {
        setColor(item)
      }}
    />
  ))
  return (
    <div>
      <p className="mb-3 text-lg font-bold capitalize">color</p>
      <div className="flex gap-2">{listColor}</div>
    </div>
  )
}

export default ColorChoose
