import React from 'react'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import AllRightReserved from './AllRightReserved'
import SocialMedia from './SocialMedia'

export default function Footer () {
  const bgFooter = useColorModeValue('gray.100', 'gray.900')
  return (
    <Box as="footer" py="8" bg={bgFooter}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        maxW="7xl"
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <AllRightReserved />
        <SocialMedia />
      </Flex>
    </Box>
  )
}
