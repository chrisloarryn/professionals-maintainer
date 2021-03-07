import React from 'react'
import Form from './Form'
import { Info } from './Info.jsx'
import { StyledAppWrapper } from './form/styles'

export const App = () => (
  <StyledAppWrapper>
    <h1>Creacion de Professionales!</h1>
    <hr />
    <Form />
    <hr />
    <Info />
  </StyledAppWrapper>
)
