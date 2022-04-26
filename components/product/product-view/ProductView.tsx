import { Product, ProductOptionValues } from '@common/types/product';
import { Button, Container } from '@components/ui';
import React, { FC, useState } from 'react';
import s from './ProductDetails.module.css';
import Image from 'next/image';
import { ProductSlider } from '@components/product'
import Swatch from '../swatch';
import { getVariant } from '../helpers';

interface Props {
  product: Product
}

type AvailableChoices = 'color' | 'size' | string;
type Choices = {
  name?: AvailableChoices
  val?: ProductOptionValues
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({
  });
  const variant = getVariant(product, choices);
  console.log(variant)

  return (<>
    <Container additionalClasses='py-6 grid grid-cols-2 gap-10'>
      <div className={s.left}>
        <div className={s.productTag}>
          <span>{product.name}</span>
          <span>{product.price.value} {product.price.currencyCode}</span>
        </div>
        <ProductSlider>
          {product.images.map((image, i) => (
            <div className={`${s.imageContainer} keen-slider__slide`} key={i}>
              <Image
                className={s.img}
                src={image.url}
                alt={image.alt}
                width={1050}
                height={1050}
                quality={85}
              />
            </div>
          ))}
        </ProductSlider>
      </div>
      <div className={s.right}>
        <h1 className="my-4 leading-4 text-2xl uppercase font-bold">Options</h1>
        <div>
          {
            product.options.map((option, i) => (
              <div key={i}
                className={s.optionDisplay}>
                <p className='mr-4'>{option.displayName}: </p>
                {
                  option.values.map(({ val }) => (
                    <Swatch
                      key={`${option.id}-${val}`}
                      val={val}
                      name={option.displayName.toLowerCase()}
                      onClick={() => setChoices({
                        ...choices,
                        [option.displayName.toLowerCase()]: val
                      })}
                      dataSelected={choices[option.displayName.toLowerCase()] === val}
                    />
                  ))
                }
              </div>
            ))
          }
        </div>
        <h1 className="my-4 leading-4 text-2xl uppercase font-bold">Description</h1>
        <p>{product.description}</p>
        <Button
          className='test'
          onClick={() => alert('adding to cart')}
        >
          Add to cart
        </Button>

      </div>
    </Container>
  </>)
}

export default ProductView;