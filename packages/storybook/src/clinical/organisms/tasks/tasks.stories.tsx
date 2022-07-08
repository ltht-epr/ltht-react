import { useState } from 'react'
import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Task from '@ltht-react/task'

import { RedactedTask, CompletedTask, CancelledTask, Tasks } from './tasks.fixtures'

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
        {Tasks.map(task => {
          const canPerformAction = !['COMPLETE', 'CANCELLED'].includes(task.status) && !task.metadata.isRedacted

          const props = {
            key: task.id,
            selected: task.id === selectedTaskId,
            ...(canPerformAction && { onClick: () => handleSelectTask(task.id) }),
          }

          return (
            <Card.ListItem {...props}>
              <Task task={task} />
            </Card.ListItem>
          )
        })}
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

export const Completed: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Tasks</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <Task task={CompletedTask} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const Cancelled: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Tasks</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <Task task={CancelledTask} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Tasks' }
