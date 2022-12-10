import React from 'react'
import { Image, Box, Link } from '@chakra-ui/react'

export default function Logo () {
  return (
    <Box>
      <Link href="/">
        <Image
          src="./images/logo.png"
          alt="Logo softmakers"
          w="100px"
        />
      </Link>
    </Box>
  )
}
