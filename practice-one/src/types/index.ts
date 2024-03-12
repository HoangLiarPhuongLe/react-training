export type TProduct = {
  id: number
  name: string
  price: number
  color: TColor
  category: TCategory
  size: TSize
}

export type TColor = 'red' | 'blue' | 'orange' | 'green'

export type TCategory = 'men' | 'women' | 'children'

export type TSize = 'S' | 'M' | 'L' | 'XL' | 'XXL'
