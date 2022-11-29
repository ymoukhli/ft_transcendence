'use client'
import { Flex, Box, Stack, Input,Button } from '@chakra-ui/react';
import Layout from 'ui/Layout';
import NextLink from 'next/link'
import type { NextPage } from 'next';
const authPage: NextPage = () => {
  return (<Layout>
            <Flex direction={'column'}>
                <Box>transendance</Box>
                <Box>we've been waiting you, connect to your accout or create new one</Box>
                <Flex maxWidth={"960px"}>
                    <Stack spacing={3} w="50%">
                        <Input placeholder='username' size='sm' />
                        <Input placeholder='displayedName' size='sm' />
                        <Input placeholder='firstName' size='sm' />
                        <Input placeholder='lastName' size='sm' />
                        <Input placeholder='email' size='sm' />
                        <Input placeholder='password' size='sm' />
                        <Input placeholder='confirm password' size='sm' />
                        <Button>sign up</Button>
                    </Stack>
                    <Stack spacing={3} w="50%">
                        <Input placeholder='username' size='sm' />
                        <Input placeholder='password' size='sm' />
                        <Button>sign in</Button>
                    </Stack>    
                </Flex>
            </Flex>
      </Layout>);
    };
  
export default authPage;
  