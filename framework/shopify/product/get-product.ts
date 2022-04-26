import { ApiConfig, Variables } from '@common/types/api';
import { getProductQuery, normalizeProduct } from '@framework/utils';
import { Product as ShopifyProduct } from '@framework/schema';
import { Product } from '@common/types/product';

type FetchType = {
  productByHandle: ShopifyProduct
}
type ReturnType = {
  product: Product | null
}

const getProduct = async (
  options: {
    config: ApiConfig,
    variables: Variables
  }): Promise<ReturnType> => {

  const {config, variables} = options;
  const {data} = await config.fetch<FetchType>({query: getProductQuery, apiUrl: config.apiUrl, variables});
  return {
    product: data.productByHandle ? normalizeProduct(data.productByHandle) : null
  }
  
}
export default getProduct;