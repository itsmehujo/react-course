import React from 'react';
import type { InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@framework/product';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';

export const getStaticProps = async () => {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  };
};

const Home = (
  { products }: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (<>
    <Hero
      headline="Welcome to the Shopify Store"
      description="Muffin chocolate cake apple pie wafer macaroon croissant sweet. Lemon drops cookie liquorice jelly beans cheesecake danish halvah. Macaroon chocolate lollipop I love sugar plum cupcake jelly. Sugar plum sesame snaps liquorice tart I love jelly beans. Dragée jelly I love donut I love chocolate marzipan I love powder. Carrot cake sesame snaps cotton candy gummi bears apple pie wafer I love. Chocolate cake I love cheesecake jelly-o tart tootsie roll lemon drops dragée jelly-o. Tiramisu chocolate chupa chups marzipan halvah brownie sesame snaps tiramisu. Macaroon macaroon jujubes cookie lollipop."
    />
    <Marquee>
      {products.slice(0, 3).map(product =>
        <ProductCard key={product.id} product={product} variant='slim' />
      )}
    </Marquee>
    <Grid>
      {products.slice(0, 3).map(product =>
        <ProductCard key={product.id} product={product} />
      )}
    </Grid>
  </>);
};
Home.Layout = Layout;

export default Home;
