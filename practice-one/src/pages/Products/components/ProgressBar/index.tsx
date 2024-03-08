const ProgressBar = ({ price }: { price: number }) => {
  return (
    <div className="border-b-2 border-solid py-4">
      <p className=" mb-2 text-lg capitalize">price</p>
      <input
        className="w-full"
        type="range"
        min="0"
        max="100"
        step=".1"
      ></input>
      <div className="flex justify-between font-semibold">
        <p>{`$${price}`}</p>
        <p>$500</p>
      </div>
    </div>
  )
}

export default ProgressBar
