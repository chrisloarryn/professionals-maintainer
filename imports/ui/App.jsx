import React from 'react'

import { Form } from './form/Form'
import { StyledAppWrapper, StyledMainTitle } from './form/styles'
import { Table } from './form/elements/Table.jsx'

export const App = () => (
  <div>
    <StyledAppWrapper>
      <StyledMainTitle>Creacion de Profesionales!</StyledMainTitle>
    </StyledAppWrapper>
    <hr />
    <StyledAppWrapper>
      <Form />
    </StyledAppWrapper>
    <hr />
    <StyledAppWrapper>
      <Table />
    </StyledAppWrapper>
  </div>
)
