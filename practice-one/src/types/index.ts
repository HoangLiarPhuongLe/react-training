export type TProduct = {
  id: number
  name: string
  price: number
  color: string[]
  category: TCategory
  size: string[]
  stock: number
}

export type TColor = 'red' | 'blue' | 'orange' | 'green'

export type TCategory = 'men' | 'women' | 'children'

export type TSize = 'S' | 'M' | 'L' | 'XL' | 'XXL'

export type TCartItem =TProductSelected & {
  productId: number
 }

export type TProductSelected = {
  id?: number
  name?: string
  price?: number
  color?: string
  quantity: number
  stock?: number
}


