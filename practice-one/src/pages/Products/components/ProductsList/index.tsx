import { TProduct } from '../../../../types'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button'
import Product from '../Product'

const ListProducts = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="grid grid-cols-1 justify-between gap-x-8 gap-y-7  lg:grid-cols-3 ">
        {products.map((product: TProduct) => {
          return (
            <Link to="/details">
              <Product
                name={product.name}
                color={product.color}
                price={product.price}
                id={product.id}
                key={product.id}
                category={product.category}
                size={product.size}
              />
            </Link>
          )
        })}
      </div>
      <div className="pl-80">
        <Button variant="primary" size="medium" checked>
          load more
        </Button>
      </div>
    </div>
  )
}

export default ListProducts
