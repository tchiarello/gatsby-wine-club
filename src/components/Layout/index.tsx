import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
