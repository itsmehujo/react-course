import React, { FC, ReactNode } from 'react';
import s from './Layout.module.css';


const Layout: FC = ({ children }: { children: ReactNode }) => {
  return (
    <div className={s.root}>
      <main className={`fit`}>
        {children}
      </main>
    </div>
  );
};
export default Layout;