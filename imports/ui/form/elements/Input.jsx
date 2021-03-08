import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput, StyledLabel } from './../styles'

const myPropTypes = {
  displayText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  refProp: PropTypes.any.isRequired,
  type: PropTypes.string
}

export const Input = ({
  displayText = '',
  name,
  onChange = () => {},
  refProp,
  type = 'text'
}) => (
  <>
    <StyledLabel htmlFor={name}>{`${displayText}: `}</StyledLabel>
    <StyledInput
      name={name}
      type={type}
      ref={refProp}
      onChange={onChange}
    />
  </>
)

Input.propTypes = myPropTypes
