import React, { FC, ReactNode } from 'react';
import s from './ProductSlider.module.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';


interface Props {
  children: ReactNode[]
}

const ProductSlider: FC<Props> = ({ children }) => {
  const [refCallback, slider] = useKeenSlider(
    {
      loop: true
    }
  )
  return (
    <div className={s.root}>
      <div ref={refCallback} className='keen-slider h-full transition-opacity'>
        <button
          className={`${s.leftControl} ${s.control}`}
          onClick={() => { slider.current?.prev() }}
        ></button>
        {children}
        <button
          className={`${s.rightControl} ${s.control}`}
          onClick={() => { slider.current?.next() }}
        ></button>
      </div>
    </div>
  )
}

export default ProductSlider;