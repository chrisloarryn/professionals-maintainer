import React from 'react'

export const Task = ({ task }) => <li>{task.name ?? task.names}</li>
