import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const myPropTypes = {
  isDisabledSubmit: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
}

const StyledButton = styled.button`
  cursor: pointer;
  height: 28px;
  transition: all 0.5s ease;
  &:hover {
    color: darkgray;
    outline: 1px solid darkgray;
  }
`

export const Button = ({ isDisabledSubmit, label, type = 'submit' }) => (
  <StyledButton type={type} disabled={isDisabledSubmit}>
    {label}
  </StyledButton>
)

Button.propTypes = myPropTypes
