import type { ImageEdge, MoneyV2, Product as ShopifyProduct, ProductOption, ProductVariantConnection, SelectedOption } from '@framework/schema';
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

const normalizeProductOption = ({id, name: displayName, values}: ProductOption) => 
( {
  id,
  displayName,
  values: values.map(val => (
        {
          val
        })    
      )
    })

const normalizeProductVariants = ({edges}: ProductVariantConnection) => (
  edges.map(({node: {id, selectedOptions, sku, title, priceV2, compareAtPriceV2}}) => (
    {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requireShipping: true,
      options: selectedOptions.map(({name, value}: SelectedOption) => (
        normalizeProductOption({
          id,
          name,
          values: [value]
        })
      ))
    }
  ))
)

export const normalizeProduct = ( productNode: ShopifyProduct ): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images,
    priceRange,
    options,
    variants,
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
    options: options ? 
    options.filter(o => o.name !== 'Title').map(o => normalizeProductOption(o)) : 
    [],
    variants: variants ? normalizeProductVariants(variants) : [],
    ...rest
  };
  return product;
};
