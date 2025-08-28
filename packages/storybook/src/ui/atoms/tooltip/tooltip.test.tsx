import Tooltip from '@ltht-react/tooltip'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Tooltip', () => {
  it('should render tooltip content when hovering over trigger element', async () => {
    render(
      <Tooltip content="Tooltip content">
        <button type="button">Hover me</button>
      </Tooltip>
    )

    const triggerElement = screen.getByText('Hover me')
    await userEvent.hover(triggerElement)

    expect(await screen.getByText('Tooltip content')).toBeInTheDocument()
  })

  it('should hide tooltip content when mouse leaves trigger element', async () => {
    render(
      <Tooltip content="Tooltip content">
        <button type="button">Hover me</button>
      </Tooltip>
    )

    const triggerElement = screen.getByText('Hover me')
    await userEvent.hover(triggerElement)
    await userEvent.unhover(triggerElement)

    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument()
  })

  it('should render tooltip content when focusing on trigger element', async () => {
    render(
      <Tooltip content="Tooltip content">
        <button type="button">Focus me</button>
      </Tooltip>
    )

    const triggerElement = screen.getByText('Focus me')
    await userEvent.tab()
    expect(triggerElement).toHaveFocus()

    expect(await screen.getByText('Tooltip content')).toBeInTheDocument()
  })
})
