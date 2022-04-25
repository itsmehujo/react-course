import { Product } from '@common/types/product';
import { FC } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './ProductCard.module.css';

interface Props {
  product: Product
  variant?: "simple" | "slim"
}

const simpleProduct = (product: Product) => <>
  <div className={s.productBg}></div>
  <div className={s.productTag}>
    <h3 className={s.productName}>{product.name}</h3>
    <span className={s.productPrice}>{product.price.value} {product.price.currencyCode}</span>
  </div>
  {product.images && (
    <Image
      alt={product.name ?? "Product image"}
      src={product.images[0].url ?? '/assets/product-image-placeholder.svg'}
      height={540}
      width={540}
      quality={85}
      layout='responsive'
      className={s.productImage}
    />
  )
  }
</>

const slimProduct = (product: Product) => <>
  <div className='absolute flex items-center justify-center inset-0 z-10'>
    <h3 className='bg-black text-white py-2 px-5'>{product.name}</h3>
  </div>
  {product.images && (
    <Image
      alt={product.name ?? 'product image'}
      src={product.images[0].url ?? '/assets/product-image-placeholder.svg'}
      height={320}
      width={320}
      quality={85}
      layout='fixed'
    />
  )}
</>

const ProductCard: FC<Props> = ({ product, variant = 'simple' }) => {
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <a className={s.root}>
        {variant === 'slim' ? slimProduct(product) : simpleProduct(product)}
      </a>
    </Link>
  );
};

export default ProductCard;