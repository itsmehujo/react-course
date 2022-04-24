import React, { FC } from 'react';
import { AppProps } from 'next/app';
import '@styles/reset.css';
import '@styles/main.css';

const Noop: FC = ( { children } ) => <>{ children }</>;

const App = ( { Component, pageProps }: AppProps & { Component: { Layout: FC } } ) => {
  const Layout = Component.Layout ?? Noop;
  return ( <Layout>
    <Component { ...pageProps }/>
  </Layout> );
};

export default App;