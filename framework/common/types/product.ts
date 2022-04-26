export interface ProductImage {
  url: string
  alt?: string
}

export interface ProductPrice {
  value: number
  currencyCode: 'USD' | 'EUR' | string
}

export interface ProductOptionValues {
  val: string
}


export interface ProductVariant {
  id: string
  name: string
  options: ProductOption[]
}

export interface ProductOption {
  id: string
  displayName: string
  values: ProductOptionValues[]
}

export interface Product {
  id: string
  name: string
  description: string
  slug: string
  path: string
  images: Array<ProductImage>
  price: ProductPrice
  options: ProductOption[]
  variants: ProductVariant[]
}