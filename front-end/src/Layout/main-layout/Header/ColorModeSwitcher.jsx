import React from 'react'
import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ColorModeSwitcher () {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcons = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="outline"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcons />}
    />
  )
}
