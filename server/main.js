import { Meteor } from 'meteor/meteor'
import { ProfessionalsCollection } from '/imports/api/links'

function insertLink({ name, url }) {
  ProfessionalsCollection.insert({ name, url, createdAt: new Date() })
}

Meteor.startup(() => {
  // If the Professionals collection is empty, add some data.
  if (ProfessionalsCollection.find().count() === 0) {
    insertLink({
      name: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    })

    insertLink({
      name: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    })

    insertLink({
      name: 'Read the Docs',
      url: 'https://docs.meteor.com'
    })

    insertLink({
      name: 'Discussions',
      url: 'https://forums.meteor.com'
    })
  }
})
