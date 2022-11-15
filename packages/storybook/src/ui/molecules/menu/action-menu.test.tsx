import ActionMenu from '@ltht-react/menu'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockActions from './action-menu-mockdata'

describe('Action menu', () => {
  it('Renders', () => {
    render(<ActionMenu actions={mockActions} />)

    expect(screen.getByRole('button')).toBeVisible()
  })

  it('Renders with an ellipsis by default', () => {
    render(<ActionMenu actions={mockActions} />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__ellipsis__vertical')
  })

  it('Can be rendered with a different icon', () => {
    render(
      <ActionMenu
        actions={mockActions}
        menuButtonOptions={{ type: 'icon', iconProps: { type: 'hamburger', size: 'large' } }}
      />
    )

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__hamburger')
  })

  it('Can be rendered as a button', () => {
    render(
      <ActionMenu
        actions={mockActions}
        menuButtonOptions={{ type: 'button', buttonProps: { type: 'button' }, text: 'Actions' }}
      />
    )

    expect(screen.getByRole('button', { name: 'Actions' })).toBeVisible()
  })

  it('Renders actions when clicked', () => {
    render(<ActionMenu actions={mockActions} />)

    expect(screen.queryByText('View')).toBeNull()

    userEvent.click(screen.getByRole('button'))

    expect(screen.queryByText('View')).not.toBeNull()
  })

  it('Calls the action click handlers when actions are clicked', () => {
    const mockClickerHandler = jest.fn()

    render(
      <ActionMenu
        actions={[
          {
            text: 'Test Action',
            clickHandler: mockClickerHandler,
          },
          ...mockActions,
        ]}
      />
    )
    userEvent.click(screen.getByRole('button'))
    userEvent.click(screen.getByRole('menuitem', { name: 'Test Action' }))

    expect(mockClickerHandler).toHaveBeenCalled()
    mockClickerHandler.mockClear()
  })

  it('Closes the menu after an action is clicked', () => {
    render(<ActionMenu actions={mockActions} />)

    userEvent.click(screen.getByRole('button'))
    userEvent.click(screen.getByRole('menuitem', { name: 'View' }))

    expect(screen.queryByText('View')).toBeNull()
  })

  // TODO: Implement this then unskip test
  it.skip('Closes the menu when another item is clicked', () => {
    render(
      <>
        <div>This is a different element</div>
        <ActionMenu actions={mockActions} />
      </>
    )

    userEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('View')).not.toBeNull()

    userEvent.click(screen.getByText('This is a different element'))
    expect(screen.queryByText('View')).toBeNull()
  })
})
