import { Box, Flex, HStack, Spacer } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <HStack>
      <Box bg='#051886' w='30vw' h='100vh'>
      </Box>
      <Box w='70vw'>
        {/* login / register */}
        <Flex direction='column' h='100vh' justify={'center'} align='center'>
          {/* modal */}
          <Box h='524px' w='486px' bg='#3855AA' borderRadius='2em'></Box>
          {/* footer message */}
          <Box position={'sticky'} top='95vh'>don’t have an account yet ? SIGN UP</Box>
        </Flex>
      </Box>
    </HStack>
  );
}

export default Home
