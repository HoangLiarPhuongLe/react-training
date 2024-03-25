const Checkout = ({ totalPrice, totalQuantity }: { totalPrice: number, totalQuantity: number }) => {
  return (
    <section className="border-solid bg-slate-300 px-5 py-6 w-80 h-72">
      <div className="flex justify-between gap-28 border-b-2 border-dotted border-black py-5">
        <div>
          <p className="font-bold ">Subtotal</p>
          <p>{totalQuantity} Products</p>
        </div>
        <p className="uppercase">$ {totalPrice} usd </p>
      </div>
      <div className="mt-5 flex justify-between">
        <p className="font-bold capitalize">total</p>
        <p className="uppercase">$ {totalPrice} usd</p>
      </div>
    </section>
  )
}
export default Checkout
