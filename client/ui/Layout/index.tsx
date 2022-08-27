import { ReactNode } from 'react';

import Head from 'next/head';
import Footer from 'ui/Footer';
import Navbar from 'ui/Navbar';
import { Box } from '@chakra-ui/react';

type LayoutProps = {
  title: string;
  isLoading?: boolean;
  showFooter?: boolean;
  children: ReactNode;
};

const Layout = ({
  title = 'Transcendence',
  children,
  showFooter,
}: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="ft_transcendence" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box minH="full">
      <Navbar />
      <main>{children}</main>
      {showFooter && <Footer />}
    </Box>
  </>
);

export default Layout;
