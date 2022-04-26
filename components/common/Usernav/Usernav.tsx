import React, { FC } from 'react';
import s from './Usernav.module.css';
import Link from 'next/link';
import { Bag as Cart, Heart } from '@components/icons';
import { useUI } from '@components/ui/context';


const Usernav: FC = () => {
  const { openSidebar } = useUI();
  return (<>
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Link
            href='/'>
            <a
              onClick={openSidebar}>
              <Cart />
            </a>
          </Link>
        </li>
        <li className={s.item}>
          <Link
            href='/'>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </>)
}

export default Usernav;