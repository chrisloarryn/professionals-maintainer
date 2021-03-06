import React from 'react'
import Form from './Form'
import { Hello } from './Hello.jsx'
import { Info } from './Info.jsx'
import { Task } from './Task.jsx'
const tasks = [
  { _id: 1, name: 'First Professional' },
  { _id: 2, name: 'Second Professional' },
  { _id: 3, name: 'Third Professional' }
]
export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    <ul>
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </ul>
    <hr />

    <Form />

    <hr />
    <Hello />
    <Info />
  </div>
)
