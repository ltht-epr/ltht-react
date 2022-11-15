import ActionMenu from '@ltht-react/menu'
import { Story } from '@storybook/react'
import mockActions from './action-menu-mockdata'

export const DefaultActionMenu: Story = () => <ActionMenu actions={mockActions} />

export const MenuWithCustomIcon: Story = () => (
  <ActionMenu
    actions={mockActions}
    menuButtonOptions={{ type: 'icon', iconProps: { type: 'hamburger', size: 'large' } }}
  />
)

export const MenuWithButton: Story = () => (
  <ActionMenu
    actions={mockActions}
    menuButtonOptions={{ type: 'button', buttonProps: { type: 'button' }, text: 'Actions' }}
  />
)

export default { title: 'UI/Molecules/Menu' }
