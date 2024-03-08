import { Dispatch, SetStateAction } from 'react'

const ProgressBar = ({
  value,
  setValue,
}: {
  value: number
  setValue: Dispatch<SetStateAction<number>>
}) => {
  return (
    <div className="border-b-2 border-solid py-4">
      <p className=" mb-2 text-lg capitalize">price</p>
      <input
        className="w-full"
        type="range"
        min="40"
        max="500"
        step="5"
        value={value}
        onChange={(e) => {
          console.log(e.target.value)
          setValue(Number(e.target.value))
        }}
      ></input>
      <div className="flex justify-between font-semibold">
        <p>{`$${value}`}</p>
        <p>$500</p>
      </div>
    </div>
  )
}

export default ProgressBar
