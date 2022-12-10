import { Box, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function MainLayout ({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <Box as="header">
        <Header />
      </Box>
      <Box as="main" flex="1">
        {children}
      </Box>
      <Box as="footer">
        <Footer />
      </Box>
    </Flex>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}
