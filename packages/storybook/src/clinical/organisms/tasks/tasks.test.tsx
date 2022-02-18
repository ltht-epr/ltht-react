import { render, screen } from '@testing-library/react'

import Task from '@ltht-react/task'
import { RedactedTask, CompletedTask, CancelledTask, Tasks } from './tasks.fixtures'

describe('Task', () => {
  it('Renders', () => {
    render(<Task task={Tasks[0]} />)
    expect(screen.getByText('Task 1 Description')).toBeInTheDocument()
    expect(screen.getByText('Overdue')).toBeInTheDocument()
  })
})

describe('Task Redacted', () => {
  it('Renders', () => {
    render(<Task task={RedactedTask} />)
    expect(screen.getByText('Insufficient privileges')).toBeInTheDocument()
    expect(screen.getByText('Due')).toBeInTheDocument()
  })
})

describe('Task Completed', () => {
  it('Renders', () => {
    render(<Task task={CompletedTask} />)
    expect(screen.getByText('Task 5 Description')).toBeInTheDocument()
    expect(screen.getByText('Complete')).toBeInTheDocument()
  })
})

describe('Task Cancelled', () => {
  it('Renders', () => {
    render(<Task task={CancelledTask} />)
    expect(screen.getByText('Task 6 Description')).toBeInTheDocument()
    expect(screen.getByText('Cancelled')).toBeInTheDocument()
  })
})
