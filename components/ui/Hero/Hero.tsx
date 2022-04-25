import Link from 'next/link';
import React, { FC } from 'react';
import Container from '@components/ui/Container';
import s from './Hero.module.css';

interface Props {
  headline: string
  description: string
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black text-slate-100">
      <Container>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div className='flex-1 max-w-4xl'>
            <p className={s.description}>{description}</p>
            <Link href="/">
              <a className={s.button}>
                Click here
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero;