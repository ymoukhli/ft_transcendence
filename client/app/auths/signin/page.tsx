'use client';
import type { NextPage } from 'next';
import Layout from 'ui/Layout';
import { Flex, Box, Center, Link } from '@chakra-ui/react';
import NextLink from 'next/link'
const SignupPage = () => {
  return (<Layout>
    <Center h="100vh" w="100vw">
      <Flex align={"center"} justify={"center"} borderRadius='md' bg='tomato' color='white' w="600px" maxW={"900px"} h="450px">
      <NextLink href='/auth' legacyBehavior passHref>
        <Link  as="button" px={"30px"} py={"3px"} bg="chocolate">login</Link>
      </NextLink>
      </Flex>
    </Center>
  </Layout>);
};

export default SignupPage;
