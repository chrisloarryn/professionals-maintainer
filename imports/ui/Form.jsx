import React from 'react'
import { parseRut } from './helpers/rut'
import { specialties } from './mock/specialties'
import { v4 as uuidv4 } from 'uuid'
import { ProfessionalsCollection } from '../api/links';

const { useForm } = require('react-hook-form')
const { clean, format, validate } = require('rut.js')

export default function Form() {
  const { register, handleSubmit, errors, setValue, setError, reset } = useForm() // initialize the hook
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
    console.log(dataToSave)
    ProfessionalsCollection.insert(dataToSave)
    reset()
  }

  console.log(specialties)

  const handleRutChange = ({ target }) => {
    const { name, value } = target
    setValue(name, parseRut(value))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '40%' }}>
      <fieldset style={{ display: 'flex', flexDirection: 'column' }}>
        <legend>Professional Creation Form:</legend>
        <label htmlFor='names'>Nombres: </label>
        <input name='names' type='text' ref={register({ required: true })} />
        {errors.names && 'Los nombres son requeridos.'}

        <label htmlFor='firstSurname'>Apellido Paterno: </label>
        <input name='firstSurname' ref={register({ required: true })} />
        <label htmlFor='secondSurname'>Apellido Materno: </label>
        <input name='secondSurname' ref={register({ required: true })} />
        <label htmlFor='rut'>Rut:</label>
        <input
          name='rut'
          onChange={handleRutChange}
          type='text'
          ref={register({ required: true, min: 11, pattern: validate })}
        />
        {errors.rut && 'Rut Invalido.'}

        <label htmlFor='specialty'>Especialidad Medica:</label>
        <select id='specialty' name='specialty'>
          {specialties?.map((specialty) => (
            <option key={specialty._id ?? uuidv4()} value={specialty?._id}>
              {specialty.nombre ?? 'seleccione'}
            </option>
          ))}
        </select>
        <input type='submit' disabled={isDisabledSubmit} />
      </fieldset>
    </form>
  )
}
