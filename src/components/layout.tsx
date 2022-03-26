import React, {FC} from 'react';

import Header from '@components/header';
import Footer from '@components/footer';

const Layout: FC = ({children}) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
