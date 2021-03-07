import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const myPropTypes = {
  name: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  iterableElements: PropTypes.array,
  refProp: PropTypes.any.isRequired
}

export const Select = ({ displayText, name, iterableElements, refProp }) => {
  return (
    <>
      <label htmlFor={name}>{`${displayText}: `}</label>
        <select
          id={name}
          name={name}
          ref={refProp}
        >
          {iterableElements?.map((element) => (
            <option key={element._id ?? uuidv4()} value={element?._id}>
              {element.nombre ?? 'seleccione'}
            </option>
          ))}
        </select>
    </>
  )
}

Select.propTypes = myPropTypes
