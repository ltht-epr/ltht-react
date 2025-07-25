import { render, screen } from '@testing-library/react'
import Task from '@ltht-react/task'
import { TaskStatusCode } from '@ltht-react/types'
import { Task1, TaskActions, Tasks } from './tasks.fixtures'

describe('Task', () => {
  it('Renders', () => {
    render(<Task task={Tasks[0]} />)

    expect(screen.getByText('Task 1 Description')).toBeVisible()
  })

  it('Renders an action menu', () => {
    render(<Task task={Tasks[0]} actions={TaskActions} />)

    expect(screen.getByRole('button')).toBeVisible()

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__ellipsis-horizontal')
  })

  it('Task Date uses extension value for display', () => {
    render(<Task task={Task1} actions={TaskActions} />)

    expect(screen.getByText('20 mins ago')).toBeVisible()
  })

  it('Renders a redacted task', () => {
    render(
      <Task
        task={{
          ...Tasks[0],
          metadata: {
            isRedacted: true,
            dataSources: [],
            requestedWhen: '',
          },
        }}
      />
    )

    expect(screen.getByText('Insufficient privileges')).toBeVisible()
  })

  it('Renders a cancelled task with strikethrough', () => {
    render(<Task task={{ ...Tasks[0], status: TaskStatusCode.Cancelled }} />)

    const description = screen.getByText('Task 1 Description')
    expect(description).toBeVisible()
    expect(description).toHaveStyle('text-decoration: line-through')
  })

  it('Renders a task with hover text', () => {
    render(<Task task={Tasks[0]} hoverText="Hover text example" />)

    const description = screen.getByText('Task 1 Description')
    expect(description).toBeVisible()
    expect(description).toHaveAttribute('title', 'Hover text example')
  })

  it('Renders a task with users and user', () => {
    render(<Task task={Tasks[0]} users="Clinical Genetics" user="Dr. Reginald Berkeley (MRI)" />)

    expect(screen.getByText('Clinical Genetics')).toBeVisible()
    expect(screen.getByText('Dr. Reginald Berkeley (MRI)')).toBeVisible()
  })

  it('Renders a task without users and user', () => {
    render(<Task task={Tasks[0]} />)

    expect(screen.queryByText('Clinical Genetics')).not.toBeInTheDocument()
    expect(screen.queryByText('Dr. Reginald Berkeley (MRI)')).not.toBeInTheDocument()
  })

  it('Renders a task with no description', () => {
    render(<Task task={{ ...Tasks[0], description: undefined }} />)

    expect(screen.queryByText('Task 1 Description')).not.toBeInTheDocument()
  })

  it('Renders a task with no hover text', () => {
    render(<Task task={Tasks[0]} hoverText={undefined} />)

    const description = screen.getByText('Task 1 Description')
    expect(description).toBeVisible()
    expect(description).toHaveAttribute('title', 'Task 1 Description')
  })

  it('Renders a task with no actions', () => {
    render(<Task task={Tasks[0]} actions={undefined} />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('Renders a task with no users and user', () => {
    render(<Task task={Tasks[0]} users={undefined} user={undefined} />)

    expect(screen.queryByText('Clinical Genetics')).not.toBeInTheDocument()
    expect(screen.queryByText('Dr. Reginald Berkeley (MRI)')).not.toBeInTheDocument()
  })

  it('Renders a task with no description and no hover text', () => {
    render(<Task task={{ ...Tasks[0], description: undefined }} hoverText={undefined} />)

    expect(screen.queryByText('Task 1 Description')).not.toBeInTheDocument()
    expect(screen.queryByTitle('Hover text example')).not.toBeInTheDocument()
  })

  it('Renders a task with no extension', () => {
    render(<Task task={{ ...Tasks[0], extension: undefined }} />)

    expect(screen.queryByText('20 mins ago')).not.toBeInTheDocument()
  })
})
