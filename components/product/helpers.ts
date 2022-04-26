import { Product, ProductOptionValues } from '@common/types/product';

type AvailableChoices = 'color' | 'size' | string;
type Choices = {
  name?: AvailableChoices
  val?: ProductOptionValues
}

export const getVariant = (product: Product, choices: Choices) => (
   product.variants.find(variant => (
    variant.options.every(vo => {
      const optionName = vo.displayName.toLowerCase();
      return optionName in choices && choices[optionName] === vo.values[0].val
    })
  ))
)