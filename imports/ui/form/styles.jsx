// import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const darkColor = '#50501a'
const lightColor = '#b4b411'

export const StyledForm = styled.form`
  width: 40%;
`

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
`

export const StyledTitle = styled.h3`
  color: ${lightColor};
  transition: color 0.5s;
  &:hover {
    color: ${darkColor}
  }
`

export const StyledAppWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
`
// const myPropTypes = {
//   children: PropTypes.element.isRequired,
//   legendTitle: PropTypes.string
// }

// export const Fieldset = (props) => {
//   return (
//     <StyledFieldset>
//       {props.children}
//     </StyledFieldset>
//   )
// }

// Fieldset.propTypes = myPropTypes
