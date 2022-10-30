import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'ui/config/theme';
import { Leva } from 'leva';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* Leva config */}
      <Leva collapsed />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
