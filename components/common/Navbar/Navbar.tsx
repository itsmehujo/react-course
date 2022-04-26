import React, { FC } from 'react';
import { Container } from '@components/ui';
import { Usernav } from '@components/common';
import Link from 'next/link';
import s from './Navbar.module.css';

const Navbar: FC = () => {
  return (<Container
    additionalClasses='bg-blue-300'
  >
    <div className={s.root}>
      <Link href='/'>
        <a className={s.logo}>itsmehujo</a>
      </Link>
      <nav>
        <ul className={s.navul}>
          <li>
            <Link
              href='/'
              passHref
            >
              <a
                className={s.link}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link
              href='/products/clothes'
              passHref
            >
              <a
                className={s.link}>
                Clothes
              </a>
            </Link>
          </li>
          <li>
            <Link
              href='/products/accessories'
              passHref
            >
              <a
                className={s.link}>
                Accessories
              </a>
            </Link>
          </li>
          <li>
            <Link
              href='/products/shoes'
              passHref
            >
              <a
                className={s.link}>
                Shoes
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <Usernav />
    </div>
  </Container>)
}
export default Navbar;