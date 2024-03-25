import { TSize } from '../../../../types'
import { Dispatch, SetStateAction } from 'react'
import SizeItem from './SizeItem'

const Size = ({
  value,
  setValue,
}: {
  value?: TSize
  setValue: Dispatch<SetStateAction<TSize | undefined>>
}) => {
  return (
    <div className="border-b-2 border-solid py-4">
      <p className=" mb-2 text-lg capitalize">size</p>
      <div className="flex gap-4 pl-4">
        <SizeItem
          isChecked={value === 'S'}
          onClick={() => {
            if (value === 'S') setValue(undefined)
            else setValue('S')
          }}
          variant="S"
        />
        <SizeItem
          isChecked={value === 'M'}
          onClick={() => {
            if (value === 'M') setValue(undefined)
            else setValue('M')
          }}
          variant="M"
        />
        <SizeItem
          isChecked={value === 'L'}
          onClick={() => {
            if (value === 'L') setValue(undefined)
            else setValue('L')
          }}
          variant="L"
        />
        <SizeItem
          isChecked={value === 'XL'}
          onClick={() => {
            if (value === 'XL') setValue(undefined)
            else setValue('XL')
          }}
          variant="XL"
        />
        <SizeItem
          isChecked={value === 'XXL'}
          onClick={() => {
            if (value === 'XXL') setValue(undefined)
            else setValue('XXL')
          }}
          variant="XXL"
        />
      </div>
    </div>
  )
}

export default Size
