import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`
const myPropTypes = {
  children: PropTypes.element,
  legendTitle: PropTypes.string
};

export const Fieldset = (props) => {
  return (
    <StyledFieldset>
      {props.legendTitle && <legend>{props.legendTitle}:</legend>}
      {props.children}
    </StyledFieldset>
  )
}

PropTypes.checkPropTypes(myPropTypes, props, 'props', Fieldset)

// Fieldset.propTypes = {
//   myProp: PropTypes.bool
// };
