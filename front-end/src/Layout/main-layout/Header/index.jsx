import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import Logo from './Logo'
import Navigation from './Navigation'
import ColorModeSwitcher from './ColorModeSwitcher'

export default function Header () {
  return (
      <Flex
        align="center"
        justify="space-between"
        direction="row"
        px={{ base: '6', md: '8' }}
        bg={useColorModeValue('gray.100', 'gray.900')}
      >
        <Logo />
        <Navigation />
        <ColorModeSwitcher />
      </Flex>
  )
}
