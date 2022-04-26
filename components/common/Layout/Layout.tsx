import React, { FC, ReactNode } from 'react';
import s from './Layout.module.css';
import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import { useUI } from '@components/ui/context';

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();
  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        <CartSidebar />
      </Sidebar>
      <main className='min-h-screen'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;