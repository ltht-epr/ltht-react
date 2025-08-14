import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu, MenuItem } from '@ltht-react/menu'

describe('Menu', () => {
  it('renders root menu trigger with label', () => {
    render(
      <Menu label="Options">
        <MenuItem label="Profile" />
      </Menu>
    )
    expect(screen.getByText('Options')).toBeInTheDocument()
  })

  it('opens menu on trigger click and shows menu items', async () => {
    render(
      <Menu label="Options">
        <MenuItem label="Profile" />
        <MenuItem label="Settings" />
      </Menu>
    )

    await userEvent.click(screen.getByText('Options'))

    expect(await screen.findByText('Profile')).toBeVisible()
    expect(screen.getByText('Settings')).toBeVisible()
  })

  it('calls onClick when MenuItem is clicked', async () => {
    const handleClick = jest.fn()
    render(
      <Menu label="Options">
        <MenuItem label="Profile" onClick={handleClick} />
      </Menu>
    )

    await userEvent.click(screen.getByText('Options'))
    await userEvent.click(screen.getByText('Profile'))

    expect(handleClick).toHaveBeenCalled()
  })

  it('renders left and right icons if provided', () => {
    const LeftIcon = () => <span data-testid="left-icon">L</span>
    const RightIcon = () => <span data-testid="right-icon">R</span>

    render(
      <Menu label="Options" leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
        <MenuItem label="Profile" />
      </Menu>
    )

    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
  })

  it('renders nested submenu and opens on hover', async () => {
    render(
      <Menu label="Main">
        <MenuItem label="Item 1" />
        <Menu label="Submenu" leftIcon={<span data-testid="submenu-icon">S</span>}>
          <MenuItem label="Subitem 1" />
        </Menu>
      </Menu>
    )

    // Open main menu
    await userEvent.click(screen.getByText('Main'))
    expect(screen.getByText('Submenu')).toBeVisible()

    // Trigger hover on the submenu
    await userEvent.hover(screen.getByText('Submenu'))

    // Wait for submenu to appear (accounts for delayed open animations)
    const subitem = await screen.findByText('Subitem 1')
    expect(subitem).toBeVisible()
  })

  it('disables MenuItem when disabled prop is true', async () => {
    render(
      <Menu label="Options">
        <MenuItem label="Disabled" disabled />
      </Menu>
    )

    await userEvent.click(screen.getByText('Options'))

    const item = await screen.findByText('Disabled')
    expect(item.closest('button')).toBeDisabled()
  })

  it('renders custom rootTrigger (icon)', () => {
    render(
      <Menu rootTrigger={{ type: 'icon', iconProps: { type: 'expand', size: 'medium' }, text: 'Open Menu' }}>
        <MenuItem label="Profile" />
      </Menu>
    )

    expect(screen.getByText('Open Menu')).toBeInTheDocument()
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument()
  })

  it('renders custom rootTrigger (button)', () => {
    render(
      <Menu
        rootTrigger={{
          type: 'button',
          buttonProps: { styling: { buttonStyle: 'standard' } },
          text: 'Custom Button',
        }}
      >
        <MenuItem label="Profile" />
      </Menu>
    )

    expect(screen.getByText('Custom Button')).toBeInTheDocument()
  })

  it('supports keyboard navigation', async () => {
    render(
      <Menu label="Options">
        <MenuItem label="One" />
        <MenuItem label="Two" />
      </Menu>
    )

    await userEvent.click(screen.getByText('Options'))
    expect(screen.getByText('One')).toBeVisible()

    await userEvent.keyboard('{ArrowDown}')
    expect(screen.getByText('One').parentElement).toHaveFocus()

    await userEvent.keyboard('{ArrowDown}')
    expect(screen.getByText('Two').parentElement).toHaveFocus()

    await userEvent.keyboard('{ArrowUp}')
    expect(screen.getByText('One').parentElement).toHaveFocus()
  })
})
