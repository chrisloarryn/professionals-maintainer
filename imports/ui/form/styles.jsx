import styled from 'styled-components'

const darkColor = '#50501a'
const lightColor = '#b4b411'

export const StyledForm = styled.form`
  width: 40%;
`

export const StyledFormContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const StyledTitle = styled.h3`
  color: ${lightColor};
  transition: color 0.5s;
  &:hover {
    color: ${darkColor};
  }
`

export const StyledAppWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
`

export const StyledSpan = styled.span`
  color: tomato;
  font-size: 12px;
  margin: -5px 0px 10px 5px;
`

export const StyledInput = styled.input`
  height: 15px;
  margin-bottom: 5px;
`

export const StyledSelect = styled.select`
  margin-bottom: 5px;
`

export const StyledLabel = styled.label`
  color: ${darkColor};
  font-size: 14px;
  margin-left: 5px;
  transition: color 0.5s;
  &:hover {
    color: ${lightColor};
  }
`