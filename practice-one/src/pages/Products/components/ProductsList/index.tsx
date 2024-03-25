import { Link } from 'react-router-dom'
import { TProduct } from '../../../../types'
import Product from '../Product'

const ListProducts = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="grid grid-cols-1 justify-between gap-x-8 gap-y-7  lg:grid-cols-3 ">
        {products.map((product: TProduct) => {
          return (
            <Link to={`/details/${product.id}`}>
              <Product
                name={product.name}
                color={product.color}
                price={product.price}
                id={product.id}
                key={product.id}
                category={product.category}
                size={product.size}
                stock={product.stock}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ListProducts
