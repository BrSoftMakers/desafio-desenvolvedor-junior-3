import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import NavCard from './NavCard'
import { NavParams } from './assets'

export default function Navigation () {
  return (
    <Flex
      as="nav"
      direction="row"
      align="center"
      justify="center"
      w="100%"
      p="4"
    >
      {NavParams.map((item) => (
        <Box key={item.id} w="100%">
          <NavCard link={item.link} linkText={item.linkText} />
        </Box>
      ))}
    </Flex>
  )
}
