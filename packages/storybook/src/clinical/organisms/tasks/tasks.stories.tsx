import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Task from '@ltht-react/task'

import { Tasks } from './tasks.fixtures'

export const TasksStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Tasks</Card.Title>
    </Card.Header>
    <Card.List>
      {Tasks.map((task) => (
        <Card.ListItem key={task.id}>
          <Task task={task} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)
TasksStory.storyName = 'Tasks'

export default { title: 'Clinical/Organisms/Tasks' }
