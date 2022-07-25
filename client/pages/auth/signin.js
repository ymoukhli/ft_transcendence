    import {
  Flex,
  Box,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
const SignIn = () => {
  return (
    <HStack>
      <Box bg="#051886" w="30vw" h="100vh"></Box>
      <Box w="70vw">
        {/* login / register */}
        {/* modal */}
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          direction={'column'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to chat and make it in the <Link color={'blue.400'}>leaderBoard</Link> ✌️
              </Text>
            </Stack>
            <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
              <Stack spacing={4}>
                <FormControl id="username">
                  <FormLabel>Username</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Confirme Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={4}>
                  <Box
                    align={'start'}
                  >
                    {/* <Checkbox>Remember me</Checkbox> */}
                  </Box>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
            {/* footer message */}
          </Stack>
          <Box position={'sticky'} top={'94vh'}>
            already have an account ? <Link href='/auth/login' color={'blue.400'}>LOGIN</Link>
          </Box>
        </Flex>
      </Box>
    </HStack>
  );
};

export default SignIn;