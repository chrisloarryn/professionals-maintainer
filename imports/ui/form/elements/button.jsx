import React from 'react'
import PropTypes from 'prop-types'

const myPropTypes = {
  type: PropTypes.string,
  isDisabledSubmit: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
}

export const Button = ({ label, isDisabledSubmit, type }) => {
  return (
    <button type={type ? type : 'submit'} disabled={isDisabledSubmit}>
      {label}
    </button>
  )
}

Button.propTypes = myPropTypes