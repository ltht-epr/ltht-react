import { render, screen } from '@testing-library/react'
import { TaskStatusCode, Task as TaskType } from '@ltht-react/types'

import Task from '@ltht-react/task'
import moment from 'moment'
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

  it.each([
    [0.2, 'a few seconds'],
    [1.2, 'a minute'],
    [20.2, '20 minutes'],
    [30.2, '30 minutes'],
    [60.2, '1 hour'],
    [67.2, '1 hour 7 mins'],
    [230.2, '3 hours 50 mins'],
    [240.2, '4 hours'],
    [1430.2, '23 hours 50 mins'],
    [1450.2, '1 day'],
    [2950.2, '2 days'],
  ])('Task Date for No Due Date provided - NotYetDue', (minutesToGo, expectedDueString) => {
    const customTaskDate: TaskType = {
      ...Task1,
      status: TaskStatusCode.NotYetDue,
      executionPeriod: {
        start: null,
        end: {
          value: moment().add(minutesToGo, 'minutes').toString(),
        },
      },
    }

    render(<Task task={customTaskDate} actions={TaskActions} />)

    expect(screen.getByText(expectedDueString)).toBeVisible()
  })

  it.each([
    [0.2, 'a few seconds'],
    [1.2, 'a minute'],
    [20.2, '20 minutes'],
    [30.2, '30 minutes'],
    [60.2, '1 hour'],
    [67.2, '1 hour 7 mins'],
    [230.2, '3 hours 50 mins'],
    [240.2, '4 hours'],
    [1430.2, '23 hours 50 mins'],
    [1450.2, '1 day'],
    [2950.2, '2 days'],
  ])('Task Date for No Due Date provided - Due', (minutesToGo, expectedDueString) => {
    const customTaskDate: TaskType = {
      ...Task1,
      status: TaskStatusCode.Due,
      executionPeriod: {
        start: null,
        end: {
          value: moment().add(minutesToGo, 'minutes').toString(),
        },
      },
    }

    render(<Task task={customTaskDate} actions={TaskActions} />)

    expect(screen.getByText(expectedDueString)).toBeVisible()
  })

  it.each([
    [0, 'a few seconds ago'],
    [1, 'a minute ago'],
    [20, '20 minutes ago'],
    [30, '30 minutes ago'],
    [60, '1 hour ago'],
    [67, '1 hour 7 mins ago'],
    [230, '3 hours 50 mins ago'],
    [240, '4 hours ago'],
    [1430, '23 hours 50 mins ago'],
    [1450, '1 day ago'],
    [2950, '2 days ago'],
  ])('Task Date for No Due Date provided - Overdue', (minutesAgo, expectedDueString) => {
    const customTaskDate: TaskType = {
      ...Task1,
      status: TaskStatusCode.Overdue,
      executionPeriod: {
        start: null,
        end: {
          value: moment().subtract(minutesAgo, 'minutes').toString(),
        },
      },
    }

    render(<Task task={customTaskDate} actions={TaskActions} />)

    expect(screen.getByText(expectedDueString)).toBeVisible()
  })

  it.each([
    [0.2, 'a few seconds'],
    [1.2, 'a minute'],
    [20.2, '20 minutes'],
    [30.2, '30 minutes'],
    [60.2, '1 hour'],
    [67.2, '1 hour 7 mins'],
    [230.2, '3 hours 50 mins'],
    [240.2, '4 hours'],
    [1430.2, '23 hours 50 mins'],
    [1450.2, '1 day'],
    [2950.2, '2 days'],
  ])('Task Date for both dates provided - NotYetDue', (minutesToGo, expectedDueString) => {
    const customTaskDate: TaskType = {
      ...Task1,
      status: TaskStatusCode.NotYetDue,
      executionPeriod: {
        start: {
          value: moment().add(minutesToGo, 'minutes').toString(),
        },
        end: {
          value: moment().add(minutesToGo, 'minutes').add(5, 'hours').toString(),
        },
      },
    }

    render(<Task task={customTaskDate} actions={TaskActions} />)

    expect(screen.getByText(expectedDueString)).toBeVisible()
  })

  it.each([
    [0, 'a few seconds ago'],
    [1, 'a minute ago'],
    [20, '20 minutes ago'],
    [30, '30 minutes ago'],
    [60, '1 hour ago'],
    [67, '1 hour 7 mins ago'],
    [230, '3 hours 50 mins ago'],
    [240, '4 hours ago'],
    [1430, '23 hours 50 mins ago'],
    [1450, '1 day ago'],
    [2950, '2 days ago'],
  ])('Task Date for both dates provided - Due', (minutesAgo, expectedDueString) => {
    const customTaskDate: TaskType = {
      ...Task1,
      status: TaskStatusCode.Due,
      executionPeriod: {
        start: {
          value: moment().subtract(minutesAgo, 'minutes').toString(),
        },
        end: {
          value: moment().add(5, 'hours').toString(),
        },
      },
    }

    render(<Task task={customTaskDate} actions={TaskActions} />)

    expect(screen.getByText(expectedDueString)).toBeVisible()
  })

  it.each([
    [0, 'a few seconds ago'],
    [1, 'a minute ago'],
    [20, '20 minutes ago'],
    [30, '30 minutes ago'],
    [60, '1 hour ago'],
    [67, '1 hour 7 mins ago'],
    [230, '3 hours 50 mins ago'],
    [240, '4 hours ago'],
    [1430, '23 hours 50 mins ago'],
    [1450, '1 day ago'],
    [2950, '2 days ago'],
  ])('Task Date for both dates provided - Overdue', (minutesAgo, expectedDueString) => {
    const customTaskDate: TaskType = {
      ...Task1,
      status: TaskStatusCode.Overdue,
      executionPeriod: {
        start: {
          value: moment().subtract(minutesAgo, 'minutes').subtract(5, 'hours').toString(),
        },
        end: {
          value: moment().subtract(minutesAgo, 'minutes').toString(),
        },
      },
    }

    render(<Task task={customTaskDate} actions={TaskActions} />)

    expect(screen.getByText(expectedDueString)).toBeVisible()
  })
})
