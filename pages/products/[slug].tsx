import React from 'react';
import { Layout } from '@components/common';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { getAllProductsPath, getProduct } from '@framework/product';
import { getConfig } from '@framework/api/config';
import { Container } from '@components/ui';
import { Product } from '@common/types/product';
import { ProductView } from '@components/product';


// fetch all of the product slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPath(config);
  return {
    paths: products.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

// provides product specific data
export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct(
    {
      config,
      variables: { slug: params?.slug }
    });
  return {
    props: {
      product
    }
  }
}

const ProductDetails = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (<>
    <ProductView product={product} />
  </>)
}

ProductDetails.Layout = Layout;
export default ProductDetails;