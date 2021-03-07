import React from 'react'

import { parseRut } from './helpers/rut'
import { specialties } from './mock/specialties'
import { ProfessionalsCollection } from '../api/links'

import {
  StyledForm,
  StyledFormContainer,
  StyledSpan,
  StyledTitle
} from './form/styles'
import { Button } from './form/elements/button'
import { Input } from './form/elements/Input'
import { Select } from './form/elements/select'

const { useForm } = require('react-hook-form')
const { clean, format, validate } = require('rut.js')

export const Form = () => {
  const {
    errors,
    handleSubmit,
    register,
    reset,
    setError,
    setValue
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
          displayText='Nombres'
          name='names'
          refProp={register({ required: true })}
          type='text'
        />
        {errors.names && <StyledSpan>Los nombres son requeridos.</StyledSpan>}
        <Input
          displayText='Apellido Paterno'
          name='firstSurname'
          refProp={register({ required: true })}
          type='text'
        />
        {errors.firstSurname && (
          <StyledSpan>Primer Apellido es requerido.</StyledSpan>
        )}
        <Input
          displayText='Apellido Materno'
          name='secondSurname'
          refProp={register({ required: true })}
          type='text'
        />
        {errors.secondSurname && (
          <StyledSpan>Segundo Apellido es requerido.</StyledSpan>
        )}
        <Input
          displayText='Rut'
          name='rut'
          onChange={handleRutChange}
          refProp={register({ required: true, min: 11, pattern: validate })}
          type='text'
        />
        {errors.rut && <StyledSpan>Rut Invalido o Requerido.</StyledSpan>}
        <Select
          displayText='Especialidad Medica'
          iterableElements={specialties}
          name='specialty'
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
