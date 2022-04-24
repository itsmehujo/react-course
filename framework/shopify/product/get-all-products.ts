import { normalizeProduct, getAllProductsQuery } from '@framework/utils';
import { ProductConnection } from '@framework/schema';
import { Product } from '@common/types/product';
import { ApiConfig } from '@common/types/api';

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async ( { fetch, apiUrl }: ApiConfig ): Promise<Array<Product>> => {
  const { data } = await fetch<ReturnType>( { apiUrl, query: getAllProductsQuery } );
  return data.products.edges.map( ( { node: product } ) => normalizeProduct( product ) ) ?? [];
};

export default getAllProducts;