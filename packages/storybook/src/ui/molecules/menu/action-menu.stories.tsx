// import ActionMenu from '@ltht-react/menu'
// import { Story } from '@storybook/react'
// import mockActions from './action-menu-mockdata'
// import { BTN_COLOURS } from '@ltht-react/styles'

// export const DefaultActionMenu: Story = () => <ActionMenu actions={mockActions} />

// export const MenuWithCustomIcon: Story = () => (
//   <ActionMenu actions={mockActions} icon={{ type: 'hamburger', size: 'large' }} />
// )

// export const MenuWithColouredCustomIcon: Story = () => (
//   <ActionMenu actions={mockActions} icon={{ type: 'cross', size: 'large', color: 'info-blue' }} />
// )

// export const MenuWithButton: Story = () => (
//   <ActionMenu
//     actions={mockActions}
//     text="Actions"
//     icon={{ type: 'hamburger', size: 'medium', color: 'white' }}
//     style={{
//       backgroundColor: BTN_COLOURS.PRIMARY.VALUE,
//       color: BTN_COLOURS.PRIMARY.TEXT,
//     }}
//   />
// )

// export default { title: 'UI/Molecules/Menu' }

import type { Meta, StoryObj } from '@storybook/react'

import ActionMenu from '@ltht-react/menu'
import mockActions from './action-menu-mockdata'
import { BTN_COLOURS } from '@ltht-react/styles'

const meta: Meta<typeof ActionMenu> = {
  title: 'UI/Molecules/Menu',
  component: ActionMenu,
}

export default meta
type Story = StoryObj<typeof ActionMenu>

export const DefaultActionMenu: Story = {
  args: {
    actions: mockActions,
  },
}

export const MenuItemsWithIcons: Story = {
  args: {
    actions: [
      {
        text: 'Item 1',
        icon: { type: 'expand', size: 'medium' },
        clickHandler: () => console.log('Item 1 Clicked'),
      },
      {
        text: 'Item 2',
        icon: { type: 'expand-alt', size: 'medium' },
        clickHandler: () => console.log('Item 2 Clicked'),
      },
      {
        text: 'Item 3',
        icon: { type: 'compress', size: 'medium' },
        clickHandler: () => console.log('Item 3 Clicked'),
      },
    ],
  },
}

export const CustomisedMenuTrigger: Story = {
  args: {
    actions: mockActions,
    icon: { type: 'hamburger', size: 'large', color: 'info-blue' },
    style: { backgroundColor: '#d3d3' },
  },
}

export const NestedMenu: Story = {
  args: {
    actions: [
      {
        text: 'Print',
        onClick: () => console.log('Print Clicked'),
        actions: [
          {
            text: 'Preview PDF',
            onClick: () => console.log('Preview PDF Clicked'),
          },
          {
            text: 'Print PDF',
            onClick: () => console.log('Print PDF Clicked'),
          },
        ],
      },
      ...mockActions,
    ],
  },
}

export const MenuTriggerWithoutIcon: Story = {
  args: {
    actions: mockActions,
    text: 'Actions',
    style: {
      backgroundColor: BTN_COLOURS.PRIMARY.VALUE,
      color: BTN_COLOURS.PRIMARY.TEXT,
    },
  },
}

export const ActionMenuDisabled: Story = {
  args: {
    actions: mockActions,
    disabled: true,
  },
}

export const MenuItemsDisabled: Story = {
  args: {
    actions: [
      {
        text: 'Print',
        icon: { type: 'paper-clip', size: 'medium' },
        disabled: true,
      },
      ...mockActions,
    ],
  },
}
