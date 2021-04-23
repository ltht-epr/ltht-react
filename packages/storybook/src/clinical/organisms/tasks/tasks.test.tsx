import { render } from '@testing-library/react'

import Task from '@ltht-react/task'
import { Tasks } from './tasks.fixtures'

describe('Task', () => {
  it('Renders', () => {
    render(<Task task={Tasks[0]} />)
  })
})
