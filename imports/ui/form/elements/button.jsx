import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const myPropTypes = {
  type: PropTypes.string,
  isDisabledSubmit: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
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

export const Button = ({ label, isDisabledSubmit, type }) => {
  return (
    <StyledButton type={type ? type : 'submit'} disabled={isDisabledSubmit}>
      {label}
    </StyledButton>
  )
}

Button.propTypes = myPropTypes