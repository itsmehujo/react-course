import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import Ticker from 'react-ticker';
import s from './Marquee.module.css';

interface Props {
  children: ReactNode[]
  variant?: 'primary' | 'secondary'
}

const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
  const rootClassName = cn(
    s.root,
    {
      [s.secondary]: variant === 'secondary'
    }
  )
  return (<div className={rootClassName}>
    <Ticker>
      {
        () =>
          <div className={s.container}>
            {children}
          </div>
      }
    </Ticker>

  </div>)
};

export default Marquee;