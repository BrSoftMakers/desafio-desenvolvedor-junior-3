import React from 'react'
import { Box, Flex, Link, IconButton } from '@chakra-ui/react'
import { FaInstagramSquare, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function SocialMedia () {
  return (
    <Box>
      <Flex>
        <IconButton
          as={Link}
          href='https://www.instagram.com/softmakers/'
          aria-label='Instagram'
          variant='ghost'
          color='current'
          icon={<FaInstagramSquare />}
          _hover={{ color: 'red.500' }}
        />
        <IconButton
          as={Link}
          href='https://www.linkedin.com/company/softmakers/'
          aria-label='Linkedin'
          variant='ghost'
          color='current'
          icon={<FaLinkedin />}
          _hover={{ color: 'blue.300' }}
        />
        <IconButton
          as={Link}
          href='https://www.facebook.com/softmakers/'
          aria-label='Facebook'
          variant='ghost'
          color='current'
          icon={<FaFacebook />}
          _hover={{ color: 'blue.600' }}
        />
        <IconButton
          as={Link}
          href='https://twitter.com/softmakers'
          aria-label='Twitter'
          variant='ghost'
          color='current'
          icon={<FaTwitter />}
          _hover={{ color: 'blue.400' }}
        />
      </Flex>
    </Box>
  )
}
