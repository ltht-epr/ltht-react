import { useRef, useState } from 'react'
import { Story } from '@storybook/react'
import Card from '@ltht-react/card'
import Task from '@ltht-react/task'

import {
  RedactedTask,
  CompletedTask,
  CancelledTask,
  Tasks,
  TaskActions,
  TaskActionsWithoutIcons,
} from './tasks.fixtures'

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
        {Tasks.map((task) => {
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

export const TaskWithHoverText: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Tasks</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <Task task={Tasks[0]} hoverText="something to show in title" />
        <Task task={Tasks[1]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const WithActions: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Tasks with Actions</Card.Title>
    </Card.Header>
    <Card.List>
      {Tasks.map((task, index) => (
        <Card.ListItem>
          <Task
            task={task}
            users={index % 2 === 0 ? 'Clinical Genetics' : undefined}
            user={index % 3 === 0 ? 'Dr. Reginald Berkeley (MRI)' : undefined}
            actions={index % 2 === 0 ? TaskActions : undefined}
          />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const WithActionsAndInteraction: Story = () => {
  const [selectedTaskId, setSelectedTaskId] = useState('')

  const handleSelectTask = (taskId: string) => {
    // eslint-disable-next-line no-console
    console.log(`${taskId} Clicked!`)
    setSelectedTaskId(taskId)
  }
  return (
    <Card>
      <Card.Header>
        <Card.Title>Tasks with Actions & Interaction</Card.Title>
      </Card.Header>
      <Card.List>
        {Tasks.map((task, index) => {
          const canPerformAction = !['COMPLETE', 'CANCELLED'].includes(task.status) && !task.metadata.isRedacted

          const props = {
            key: task.id,
            selected: task.id === selectedTaskId,
            ...(canPerformAction && { onClick: () => handleSelectTask(task.id) }),
          }

          return (
            <Card.ListItem {...props}>
              <Task
                task={task}
                users={index % 2 === 0 ? 'Clinical Genetics' : undefined}
                user={index % 3 === 0 ? 'Dr. Reginald Berkeley (MRI)' : undefined}
                actions={index % 2 === 0 ? TaskActions : undefined}
              />
            </Card.ListItem>
          )
        })}
        <Card.ListItem>
          <Task task={Tasks[0]} actions={TaskActionsWithoutIcons} />
        </Card.ListItem>
      </Card.List>
    </Card>
  )
}

export const WithProfessions: Story = () => {
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
        {Tasks.map((task, index) => {
          const canPerformAction = !['COMPLETE', 'CANCELLED'].includes(task.status) && !task.metadata.isRedacted

          const props = {
            key: task.id,
            selected: task.id === selectedTaskId,
            ...(canPerformAction && { onClick: () => handleSelectTask(task.id) }),
          }

          let users = ''

          switch (index % 4) {
            case 0:
              users = 'Doctor - Consultant, Doctor - Other Resident'
              break
            case 1:
              users = 'Physician Associate, Nurse'
              break
            case 2:
              users = 'Orthotics'
              break
            case 3:
              users = 'Clinical Genetics Associate, Nurse, Psychology'
              break
          }

          return (
            <Card.ListItem {...props}>
              <Task task={task} user={users} actions={index % 2 === 0 ? TaskActions : undefined} />
            </Card.ListItem>
          )
        })}
      </Card.List>
    </Card>
  )
}

export const WithFullScreenControl: Story = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <Card ref={ref}>
      <Card.Header style={{ justifyContent: 'space-between' }}>
        <Card.Title>Tasks with Full Screen Control</Card.Title>
        <Card.FullScreenControl elementRef={ref} />
      </Card.Header>
      <Card.List>
        {Tasks.map((task, index) => (
          <Card.ListItem>
            <Task
              task={task}
              users={index % 2 === 0 ? 'Clinical Genetics' : undefined}
              user={index % 3 === 0 ? 'Dr. Reginald Berkeley (MRI)' : undefined}
              actions={index % 2 === 0 ? TaskActions : undefined}
            />
          </Card.ListItem>
        ))}
      </Card.List>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/Tasks' }
