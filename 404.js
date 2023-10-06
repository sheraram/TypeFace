import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

function NotFound(props) {
  return (
    <Box
      px={6}
      py={10}
      minHeight="70vh"
      textAlign="center"
      // bg="rgba(33, 36, 41, 1)"
    >
      <Head>
        <title>Error | Qtopia</title>
        <meta name="Qtopia" content="Qtopia content..." />
        <meta name="description" content="Qtopia description" />
      </Head>
      <Heading
        as="h1"
        mt="5rem"
        size="2xl"
        backgroundClip="text"
        display="inline-block"
        bgGradient="linear(to-r, blue.400, blue.600)"
      >
        404
      </Heading>
      <Text color="text" fontSize="18px" mt={3} mb={2}>
        Page not found
      </Text>
      {/* <Text color={'gray.500'} mb={6}>
        Page not found
      </Text> */}
      <Link href={'/'} passHref>
        <Button
          as="a"
          variant="solid"
          colorScheme="brand"
          _hover={{ color: '#eeeeee', opacity: 0.85 }}
          bgGradient="linear(to-r, brand.400, brand.500, brand.600)"
        >
          Go to home
        </Button>
      </Link>
    </Box>
  );
}

export default NotFound;
