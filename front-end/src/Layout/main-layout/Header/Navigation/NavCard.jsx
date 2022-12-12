import React from 'react'
import { useColorModeValue, Link, Heading } from '@chakra-ui/react'
// import { useNavigation } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function NavCard ({ link, linkText }) {
  // const history = useNavigation()
  // const isLinkActive = history.location.pathname === link
  const isActivated = useColorModeValue('gray.200', 'gray.700')
  // const bg = isLinkActive ? isActivated : 'transparent'

  return (
    <Link
      href={link}
      rounded="md"
      p="4"
      // bg={bg}
      _hover={{ bg: isActivated }}
      display="block"
      width="100%"
    >
      <Heading as="h3" size="md" mb="2">
        {linkText}
      </Heading>
    </Link>
  )
}

NavCard.propTypes = {
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
}
