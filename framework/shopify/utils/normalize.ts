import type { ImageEdge, Product as ShopifyProduct } from '@framework/schema';
import { Product } from '@common/types/product';

const normalizeProductImage = ( { edges }: { edges: Array<ImageEdge> } ) =>
  edges.map( ( { node: { originalSrc: url, ...rest } } ) =>
    ( {
      url: `/images/${ url }`,
      ...rest
    } )
  );

export const normalizeProduct = ( productNode: ShopifyProduct ): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images,
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
    ...rest
  };
  return product;
};
