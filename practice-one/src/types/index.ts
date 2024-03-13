export type TProduct = {
  id: number
  name: string
  price: number
  color: string[]
  category: TCategory
  size: string[]
}

export type TColor = 'red' | 'blue' | 'orange' | 'green'

export type TCategory = 'men' | 'women' | 'children'

export type TSize = 'S' | 'M' | 'L' | 'XL' | 'XXL'
