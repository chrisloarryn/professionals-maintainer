import { Meteor } from 'meteor/meteor'
import { ProfessionalsCollection } from '/imports/api/links'

export function insertLink({
  names,
  firstSurname,
  secondSurname,
  rut,
  specialty
}) {
  ProfessionalsCollection.insert({
    names,
    firstSurname,
    secondSurname,
    rut,
    specialty,
    createdAt: new Date()
  })
}

Meteor.startup(() => {
  // If the Professionals collection is empty, add some data.
  if (ProfessionalsCollection.find().count() === 0) {
    insertLink({
      names: 'Juan Eliseo',
      firstSurname: 'Perez',
      secondSurname: 'Jackson',
      rut: '18.989.328-0',
      specialty: 'B101'
    })
  }
})
