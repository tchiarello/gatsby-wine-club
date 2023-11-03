import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC<{children: React.ReactNode; path: string}> = ({
  children,
  path,
}) => {
  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo({top: 0});
    }, 0);
  }, [path]);

  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
