import React, { FC } from 'react';
import { AppProps } from 'next/app';
import '@styles/globals.css';

const Noop = ({ children }) => <>{children}</>;

const App = ({ Component, pageProps }: AppProps & { Component: { Layout } }) => {
  const Layout = Component.Layout ?? Noop;
  return (<Layout>
    <Component {...pageProps} />
  </Layout>);
};

export default App;