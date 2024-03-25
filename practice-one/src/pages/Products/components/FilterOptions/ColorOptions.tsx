import { Dispatch, SetStateAction } from 'react'
import { TColor } from '../../../../types'
import ColorItem from './ColorItem'

const Color = ({
  value,
  setValue,
}: {
  value?: TColor
  setValue: Dispatch<SetStateAction<TColor | undefined>>
}) => {
  return (
    <div className="border-b-2 border-solid py-4">
      <p className=" mb-2 text-lg capitalize">color</p>
      <div className="flex gap-2">
        <ColorItem
          variant="red"
          isActive={value === 'red'}
          onClick={() => {
            if (value === 'red') setValue(undefined)
            else setValue('red')
          }}
        />
        <ColorItem
          variant="orange"
          isActive={value === 'orange'}
          onClick={() => {
            if (value === 'orange') setValue(undefined)
            else setValue('orange')
          }}
        />
        <ColorItem
          isActive={value === 'green'}
          variant="green"
          onClick={() => {
            if (value === 'green') setValue(undefined)
            else setValue('green')
          }}
        />
        <ColorItem
          isActive={value === 'blue'}
          variant="blue"
          onClick={() => {
            if (value === 'blue') setValue(undefined)
            else setValue('blue')
          }}
        />
      </div>
    </div>
  )
}

export default Color
