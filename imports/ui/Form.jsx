import React from 'react'
import { parseRut } from './helpers/rut'
import { specialties } from './mock/specialties'
import { ProfessionalsCollection } from '../api/links'

import {
  StyledForm,
  StyledTitle,
  StyledFormContainer,
  StyledSpan
} from './form/styles'
import { Input } from './form/elements/Input'
import { Select } from './form/elements/select'
import { Button } from './form/elements/button'

const { useForm } = require('react-hook-form')
const { clean, format, validate } = require('rut.js')

export default function Form() {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    setError,
    reset
  } = useForm() // initialize the hook
  const isDisabledSubmit = !!Object.keys(errors).length

  const onSubmit = (data) => {
    if (isDisabledSubmit) return setError('fields', 'Faltan campos.')
    const { rut } = data
    const verifiedRut = format(clean(rut))
    const isRutValid = validate(verifiedRut)
    if (data.rut && isRutValid) {
      if (verifiedRut.length < 12) {
        return setError('rut', {
          shouldFocus: true,
          message: 'Rut Invalido.',
          type: 'pattern'
        })
      } else if (isRutValid) {
        setValue('rut', verifiedRut)
      } else {
        return setError('rut', {
          shouldFocus: true,
          message: 'Rut Invalido.',
          type: 'pattern'
        })
      }
    }
    const dataToSave = {
      ...data,
      rut: verifiedRut
    }
    ProfessionalsCollection.insert(dataToSave)
    reset()
  }
  const handleRutChange = ({ target }) => {
    const { name, value } = target
    setValue(name, parseRut(value))
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormContainer>
        <StyledTitle>Professional Creation Form:</StyledTitle>
        <Input
          name='names'
          displayText='Nombres'
          type='text'
          refProp={register({ required: true })}
        />
        {errors.names && <StyledSpan>Los nombres son requeridos.</StyledSpan>}
        <Input
          name='firstSurname'
          displayText='Apellido Paterno'
          type='text'
          refProp={register({ required: true })}
        />
        {errors.firstSurname && (
          <StyledSpan>Primer Apellido es requerido.</StyledSpan>
        )}
        <Input
          name='secondSurname'
          displayText='Apellido Materno'
          type='text'
          refProp={register({ required: true })}
        />
        {errors.secondSurname && (
          <StyledSpan>Segundo Apellido es requerido.</StyledSpan>
        )}
        <Input
          name='rut'
          displayText='Rut'
          type='text'
          refProp={register({ required: true, min: 11, pattern: validate })}
          onChange={handleRutChange}
        />
        {errors.rut && <StyledSpan>Rut Invalido o Requerido.</StyledSpan>}
        <Select
          name='specialty'
          displayText='Especialidad Medica'
          iterableElements={specialties}
          refProp={register({ required: true })}
        />
        {errors.specialty && (
          <StyledSpan>La Especialidad es requerida.</StyledSpan>
        )}
        <Button
          isDisabledSubmit={isDisabledSubmit}
          label='Crear'
          type='submit'
        />
      </StyledFormContainer>
    </StyledForm>
  )
}
