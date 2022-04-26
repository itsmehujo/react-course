import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { ProductConnection } from '@framework/schema';
import { getAllProductsPathsQuery } from '@framework/utils/queries'

type ReturnType = {
  products: Pick<Product, 'slug'>[]
}

const getAllProductsPath = async ({fetch, apiUrl}: ApiConfig): Promise<ReturnType> => {
  const {data} = await fetch<{products: ProductConnection}>({query: getAllProductsPathsQuery, apiUrl})
  const products = data.products.edges.map(({node: {handle}}) => {
    return {
      slug: handle
    }
  })
  return {products};
}

export default getAllProductsPath;