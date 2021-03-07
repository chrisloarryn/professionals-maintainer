import React from 'react'
import PropTypes from 'prop-types'

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
    <label htmlFor={name}>{`${displayText}: `}</label>
    <input
      name={name}
      type={type}
      ref={refProp}
      onChange={onChange}
    />
  </>
)

Input.propTypes = myPropTypes
