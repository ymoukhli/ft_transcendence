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
const auth = () => {
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

            <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Your Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Send
                  </Button>
                </Stack>
              </Stack>
            </Box>
            {/* footer message */}
          </Stack>
          <Box position={'sticky'} top={'94vh'}>
            don’t have an account yet ? SIGN UP
          </Box>
        </Flex>
      </Box>
    </HStack>
  );
};

export default auth;