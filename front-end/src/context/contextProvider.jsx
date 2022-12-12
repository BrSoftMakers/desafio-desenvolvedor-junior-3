import React, { useState } from 'react'
import PropTypes from 'prop-types'

import context from './context'

export default function ContextProvide ({ children }) {
  const [isLogged, setIsLogged] = useState(false)

  const contextValue = {
    isLogged,
    setIsLogged
  }

  return (
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  )
}

ContextProvide.propTypes = {
  children: PropTypes.node
}.IsRequired
