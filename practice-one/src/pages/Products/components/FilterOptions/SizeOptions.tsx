import { Dispatch, SetStateAction } from 'react'

import { TSize } from '../../../../types'
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
          onChange={() => {
            setValue('S')
          }}
          variant="S"
        />
        <SizeItem
          isChecked={value === 'M'}
          onChange={() => {
            setValue('M')
          }}
          variant="M"
        />
        <SizeItem
          isChecked={value === 'L'}
          onChange={() => {
            setValue('L')
          }}
          variant="L"
        />
        <SizeItem
          isChecked={value === 'XL'}
          onChange={() => {
            setValue('XL')
          }}
          variant="XL"
        />
        <SizeItem
          isChecked={value === 'XXL'}
          onChange={() => {
            setValue('XXL')
          }}
          variant="XXL"
        />
      </div>
    </div>
  )
}

export default Size
