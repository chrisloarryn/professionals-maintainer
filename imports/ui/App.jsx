import React from 'react'

import { Form } from './form/Form'
import { StyledAppWrapper } from './form/styles'
import { Table } from './form/elements/Table.jsx'

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
      <Table />
    </StyledAppWrapper>
  </div>
)
