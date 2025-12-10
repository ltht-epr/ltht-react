import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GuidanceSummary from '@ltht-react/guidance-summary'

import guidances, { guidanceWithActions } from './guidances.fixture'

describe('Guidances', () => {
  it('Renders', () => {
    render(<GuidanceSummary guidance={guidances[0]} />)
  })

  it('adds clickable action links', async () => {
    const cb = jest.fn()

    render(<GuidanceSummary guidance={guidanceWithActions[0]} onActionClick={cb} />)

    await userEvent.click(screen.getByText('Launch Tropical Medicine Care Plan'))

    expect(cb).toHaveBeenCalledTimes(1)
  })

  it("doesn't add clickable action links when click handler is excluded", () => {
    render(<GuidanceSummary guidance={guidanceWithActions[0]} />)

    expect(screen.queryByText('Launch Tropical Medicine Care Plan')).toBeNull()
  })
})
