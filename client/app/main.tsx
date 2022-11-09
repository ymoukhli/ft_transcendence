'use client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'ui/config/theme';
import { Leva } from 'leva';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <ChakraProvider theme={theme}>
      {/* Leva config */}
      <Leva collapsed />
      {children}
    </ChakraProvider>
  );
};

export default Main;
