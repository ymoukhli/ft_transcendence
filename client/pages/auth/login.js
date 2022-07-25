
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
const Login = () => {
  return (
    <HStack>
      <Box bg="#051886" w="30vw" h="100vh"></Box>
      <Box w="70vw">
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          direction={'column'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Log in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to chat and make it in the <Link color={'blue.400'}>leaderBoard</Link> ✌️
              </Text>
            </Stack>
            <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link href='/auth/forgetPassword' color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}

                    onClick={() => {
                        console.log()
                    }}
                  >
                    Log in
                  </Button>
                </Stack>
              </Stack>
            </Box>
            {/* footer message */}
          </Stack>
          <Box position={'sticky'} top={'94vh'}>
            don’t have an account yet ? <Link href='/auth/signin' color={'blue.400'}>SIGN IN</Link>
          </Box>
        </Flex>
      </Box>
    </HStack>
  );
};

export default Login;