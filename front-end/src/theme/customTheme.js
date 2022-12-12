import { extendTheme } from '@chakra-ui/react'

const configCustomTheme = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const customTheme = extendTheme({ config: configCustomTheme })

export default customTheme
