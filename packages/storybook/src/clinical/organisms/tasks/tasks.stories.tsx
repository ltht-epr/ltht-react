import { useState } from 'react'
import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Task from '@ltht-react/task'

import { RedactedTask, Tasks } from './tasks.fixtures'

export const TasksStory: Story = () => {
  const [selectedTaskId, setSelectedTaskId] = useState('')

  const handleSelectTask = (taskId: string) => {
    // eslint-disable-next-line no-console
    console.log(`${taskId} Clicked!`)
    setSelectedTaskId(taskId)
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Tasks</Card.Title>
      </Card.Header>
      <Card.List>
        {Tasks.map((task) => (
          <Card.ListItem key={task.id} onClick={() => handleSelectTask(task.id)} selected={task.id === selectedTaskId}>
            <Task task={task} />
          </Card.ListItem>
        ))}
      </Card.List>
    </Card>
  )
}
TasksStory.storyName = 'Tasks'

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Tasks</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <Task task={RedactedTask} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Tasks' }
