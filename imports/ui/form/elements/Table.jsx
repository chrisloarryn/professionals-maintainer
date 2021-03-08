import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { FaMinusSquare } from 'react-icons/fa'
import Swal from 'sweetalert2'

import { ProfessionalsCollection } from '../../../api/links'
import { specialties } from '../../mock/specialties'
import './../../styles.css'

export const Table = () => {
  const professionals = useTracker(() => ProfessionalsCollection.find().fetch())

  const handleDeleteItem = (person) => {
    if (!person._id)
      return Swal.fire(
        'El usuario seleccionado no posee ID. Contacte al administrador de bases de datos.',
        '',
        'info'
      )
    const fullName = `${person.names ?? ''} ${person.firstSurname ?? ''} ${
      person.secondSurname ?? ''
    }`
    Swal.fire({
      allowEnterKey: false,
      allowEscapeKey: true,
      confirmButtonText: `Si, quiero eliminarlo`,
      denyButtonText: `No, cancelar`,
      focusDeny: true,
      showDenyButton: true,
      text: `si continua, el profesional "${fullName}", sera eliminado.`,
      title: '¿Desea proceder?'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        ProfessionalsCollection.remove(person._id)
        Swal.fire('Eliminado!', '', 'success')
      } else if (result.isDenied) {
        console.log('professional was not deleted')
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  const renderSpecialtyName = (_id) => {
    const [element] = specialties.filter((el) => el._id === _id)
    return element.nombre ? element.nombre : 'Especialidad no encontrada'
  }

  return (
    <div>
      <h2>Lista de Profesionales</h2>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th colSpan={2}>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Rut</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {professionals.map((person) => {
            return (
              <tr key={person._id}>
                <td colSpan={2}>{person.names}</td>
                <td>{person.firstSurname}</td>
                <td>{person.secondSurname}</td>
                <td>{person.rut}</td>
                <td>
                  {person.specialty} - {renderSpecialtyName(person.specialty)}
                </td>
                <td onClick={() => handleDeleteItem(person)}>
                  <FaMinusSquare color='red' cursor='pointer' />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
