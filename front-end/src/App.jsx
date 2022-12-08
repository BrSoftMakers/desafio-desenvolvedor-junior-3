import React from 'react'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import Login from './Login/index.jsx'

export default function App () {
  return (
    <ChakraProvider>
      <Flex direction="column" alignItems="center" justifyContent="center" height="100vh">
        <Box maxWidth="400px" width="100%">
          <Login />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}
