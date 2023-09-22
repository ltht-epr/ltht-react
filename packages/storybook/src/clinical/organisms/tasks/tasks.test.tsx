import { render, screen } from '@testing-library/react'

import Task from '@ltht-react/task'
import { TaskActions, Tasks } from './tasks.fixtures'

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
})
