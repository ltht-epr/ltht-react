import ActionMenu from '@ltht-react/menu'
import { render, screen } from '@testing-library/react'
import { ICON_COLOURS } from '@ltht-react/styles'
import userEvent from '@testing-library/user-event'
import Card from '@ltht-react/card'
import mockActions from './action-menu-mockdata'

describe('Action menu', () => {
  it('Renders', () => {
    render(<ActionMenu actions={mockActions} />)

    expect(screen.getByRole('button')).toBeVisible()
  })

  it('Renders with id', () => {
    render(<ActionMenu id="custom-action-menu-id" actions={mockActions} />)

    expect(screen.getByTestId('custom-action-menu-id')).toBeVisible()
  })

  it('Renders each menu item with id', async () => {
    render(<ActionMenu id="custom-action-menu-id" actions={mockActions} />)

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByTestId('custom-action-menu-id-action-menu-item-view-0')).toBeVisible()
    expect(screen.getByTestId('custom-action-menu-id-action-menu-item-edit-1')).toBeVisible()
    expect(screen.getByTestId('custom-action-menu-id-action-menu-item-delete-2')).toBeVisible()
  })

  it('Renders with an ellipsis by default', () => {
    render(<ActionMenu actions={mockActions} />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__ellipsis-vertical')
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

  it('Can be rendered with a different colour', () => {
    render(
      <ActionMenu
        actions={mockActions}
        menuButtonOptions={{ type: 'icon', iconProps: { type: 'cross', size: 'large', color: 'red' } }}
      />
    )

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('icon__cross')
    expect(screen.getByRole('img', { hidden: true })).toHaveStyle(`color: ${ICON_COLOURS.DANGER};`)
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

  it('Renders actions when clicked', async () => {
    render(<ActionMenu actions={mockActions} />)

    expect(screen.queryByText('View')).toBeNull()

    await userEvent.click(screen.getByRole('button'))

    expect(screen.queryByText('View')).not.toBeNull()
  })

  it('Calls the action click handlers when actions are clicked', async () => {
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
    await userEvent.click(screen.getByRole('button'))
    await userEvent.click(screen.getByRole('menuitem', { name: 'Test Action' }))

    expect(mockClickerHandler).toHaveBeenCalled()
    mockClickerHandler.mockClear()
  })

  it('Closes the menu after an action is clicked', async () => {
    render(<ActionMenu actions={mockActions} />)

    await userEvent.click(screen.getByRole('button'))
    await userEvent.click(screen.getByRole('menuitem', { name: 'View' }))

    expect(screen.queryByText('View')).toBeNull()
  })

  it('Closes the menu when another item is clicked', async () => {
    render(
      <>
        <div>This is a different element</div>
        <ActionMenu actions={mockActions} />
      </>
    )

    await userEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('View')).not.toBeNull()

    await userEvent.click(screen.getByText('This is a different element'))
    expect(screen.queryByText('View')).toBeNull()
  })

  it('click handler is not propogated to other elements', async () => {
    const mockClickerHandler = jest.fn()

    render(
      <Card>
        <Card.Header>Summary</Card.Header>
        <Card.List>
          <Card.ListItem data-testid="item1" onClick={mockClickerHandler}>
            <ActionMenu actions={mockActions} /> List Item 1
          </Card.ListItem>
          <Card.ListItem>List Item 2</Card.ListItem>
          <Card.ListItem>List Item 3</Card.ListItem>
          <Card.ListItem>List Item 4</Card.ListItem>
          <Card.ListItem>List Item 5</Card.ListItem>
        </Card.List>
      </Card>
    )

    await userEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('View')).toBeInTheDocument()

    await userEvent.click(screen.getByText('View'))
    expect(screen.queryByText('View')).not.toBeInTheDocument()

    expect(mockClickerHandler).not.toHaveBeenCalled()
  })
})
