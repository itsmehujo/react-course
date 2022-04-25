import type { ImageEdge, MoneyV2, Product as ShopifyProduct } from '@framework/schema';
import { Product, ProductPrice } from '@common/types/product';

const normalizeProductImage = ( { edges }: { edges: Array<ImageEdge> } ) =>
  edges.map( ( { node: { originalSrc: url, ...rest } } ) =>
    ( {
      url: `/images/${ url }`,
      ...rest
    } )
  );

const normalizeProductPrice = ({currencyCode, amount }: MoneyV2): ProductPrice => {
  return {value: +amount, currencyCode}
}

export const normalizeProduct = ( productNode: ShopifyProduct ): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images,
    priceRange,
    ...rest
  } = productNode;
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${ handle }`,
    slug: handle.replace( /^\/+|\/+$/g, '' ),
    images: normalizeProductImage( images ),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest
  };
  return product;
};
