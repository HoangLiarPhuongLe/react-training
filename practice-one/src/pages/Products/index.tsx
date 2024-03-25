import { useState, useEffect } from 'react'
import { TCategory, TColor, TProduct, TSize } from '../../types'
import { API_BASE_URL } from '../../constants/urls'
import Slides from './components/Slides'
import Categories from './components/FilterOptions/Categories'
import Color from './components/FilterOptions/ColorOptions'
import ProgressBar from './components/ProgressBar'
import Size from './components/FilterOptions/SizeOptions'
import ListProducts from './components/ProductsList'
import NotFound from '../../components/NotFound'

const ProductsPage = ({ searchvalue }: { searchvalue: string }) => {
  const [category, setCategory] = useState<TCategory | undefined>(undefined)
  const [color, setColor] = useState<TColor | undefined>(undefined)
  const [size, setSize] = useState<TSize | undefined>(undefined)
  const [price, setPrice] = useState<number>(40)
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${API_BASE_URL}products?name_like=${searchvalue}`,
      )
      const products = (await response.json()) as TProduct[]
      setProducts(products)
    }

    fetchData()
  }, [searchvalue])

  useEffect(() => {
    const fetchData = async () => {
      let options = []
      if (size) options.push('size_like=' + size)
      if (color) options.push('color_like=' + color)
      if (category) options.push('category=' + category)
      if (price) options.push('price_gte=' + price)

      const response = await fetch(
        `${API_BASE_URL}products?${options.join('&')}`,
      )
      const products = (await response.json()) as TProduct[]
      setProducts(products)
    }

    fetchData()
  }, [category, color, size, price])

  const notFoundProducts = products.length === 0

  return (
    <main className="flex flex-col">
      <div className="flex w-full justify-between bg-purple-500 px-28 py-14">
        <div className="capitalize text-white">
          <p className="mb-12 flex gap-5 text-xl font-normal">
            <a href="#">home</a> / <a href="#">shop</a>
          </p>
          <h2 className="text-4xl font-bold">shop</h2>
        </div>
        <Slides />
      </div>
      <div className="my-4 flex justify-between px-28">
        <div>
          <p className=" text-2xl capitalize">filter</p>

          <Categories value={category} setValue={setCategory} />

          <Color value={color} setValue={setColor} />

          <ProgressBar value={price} setValue={setPrice} />

          <Size value={size} setValue={setSize} />
        </div>
        { notFoundProducts ? <NotFound/> : 
          <ListProducts products={products} />
          }
      </div>
    </main>
  )
}

export default ProductsPage
