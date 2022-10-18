import { ReactNode } from 'react';

import Head from 'next/head';
import Footer from 'ui/Footer';
import Navbar from 'ui/Navbar';
import { Box } from '@chakra-ui/react';

type LayoutProps = {
  title: string;
  isLoading?: boolean;
  showNavbar?: boolean;
  showFooter?: boolean;
  children: ReactNode;
};

const Layout = ({
  title = 'Transcendence',
  children,
  showFooter,
  showNavbar = true,
}: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="ft_transcendence" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {showNavbar && <Navbar />}
    <Box as="main" minH="full" h="1px" backgroundColor="#262323">
      {children}
    </Box>
    {showFooter && <Footer />}
  </>
);

export default Layout;
