import React from 'react'
import PropTypes from 'prop-types'

const myPropTypes = {
  name: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  type: PropTypes.string,
  refProp: PropTypes.any.isRequired,
  onChange: PropTypes.func
}

export const Input = ({ displayText, name, type, refProp, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{`${displayText}: `}</label>
      <input
        name={name}
        type={type ? type : 'text'}
        ref={refProp}
        onChange={onChange}
      />
    </>
  )
}

Input.propTypes = myPropTypes
