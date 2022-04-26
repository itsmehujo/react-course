import React, { FC, ReactNode } from 'react';
import { AppProps } from 'next/app';
import '@styles/globals.css';
import { UIProvider } from '@components/ui/context';

interface NoopProps {
  children: ReactNode
}
const Noop: FC<NoopProps> = ({ children }) => <>{children}</>;

const App = ({ Component, pageProps }: AppProps & { Component: { Layout } }) => {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
};

export default App;