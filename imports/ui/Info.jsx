import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { ProfessionalsCollection } from '../api/links'

import './styles.css'

export const Info = () => {
  const professionals = useTracker(() => {
    return ProfessionalsCollection.find().fetch()
  })

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>
        {professionals.map((link) => {
          return (
          <li key={link._id}>
            <a href={link._id} target='_blank'>
              {link.name ?? link.names}
            </a>
          </li>
        )})}
      </ul>
      <table style={{ width: '100%'}}>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    </div>
  )
}
