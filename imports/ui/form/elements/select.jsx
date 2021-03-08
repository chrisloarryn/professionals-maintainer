import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import { StyledLabel, StyledSelect } from './../styles'

const myPropTypes = {
  displayText: PropTypes.string.isRequired,
  iterableElements: PropTypes.array,
  name: PropTypes.string.isRequired,
  refProp: PropTypes.any.isRequired
}

export const Select = ({ displayText, iterableElements, name, refProp }) => (
  <>
    <StyledLabel htmlFor={name}>{`${displayText}: `}</StyledLabel>
    <StyledSelect id={name} name={name} ref={refProp}>
      {iterableElements?.map((element) => (
        <option key={element._id ?? uuidv4()} value={element?._id}>
          {element.nombre ?? 'seleccione'}
        </option>
      ))}
    </StyledSelect>
  </>
)

Select.propTypes = myPropTypes
