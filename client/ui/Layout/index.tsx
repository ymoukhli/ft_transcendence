'use client';
import { ReactNode } from 'react';

import Footer from 'ui/Footer';
import Navbar from 'ui/Navbar';
import { Box } from '@chakra-ui/react';

type LayoutProps = {
  isLoading?: boolean;
  showNavbar?: boolean;
  showFooter?: boolean;
  children: ReactNode;
};

const Layout = ({ children, showFooter, showNavbar = true }: LayoutProps) => (
  <>
    {showNavbar && <Navbar />}
    <Box as="main" minH="full" h="1px" backgroundColor="#262323">
      {children}
    </Box>
    {showFooter && <Footer />}
  </>
);

export default Layout;
