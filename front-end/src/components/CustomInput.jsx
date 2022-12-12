import React from 'react'
import {
  Input,
  FormLabel,
  InputGroup,
  InputLeftElement,
  FormControl,
  useColorModeValue
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function CustomInput ({ label, leftIcon, ...rest }) {
  return (
    <FormControl id={rest.name} isRequired>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color={useColorModeValue('gray.300', 'gray.500')}>
          {leftIcon}
        </InputLeftElement>
        <Input {...rest} />
      </InputGroup>
    </FormControl>
  )
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  leftIcon: PropTypes.element
}
