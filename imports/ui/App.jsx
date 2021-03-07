import React from 'react'
import Form from './Form'
import { Info } from './Info.jsx'
import { StyledAppWrapper } from './form/styles'

export const App = () => (
  <div>
    <StyledAppWrapper>
      <h1>Creacion de Profesionales!</h1>
    </StyledAppWrapper>
    <hr />
    <StyledAppWrapper>
      <Form />
    </StyledAppWrapper>
    <hr />
    <StyledAppWrapper>
      <Info />
    </StyledAppWrapper>
  </div>
)
