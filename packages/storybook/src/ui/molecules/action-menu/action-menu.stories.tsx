/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'
import Icon from '@ltht-react/icon'
import ActionMenu from '@ltht-react/menu'
import mockActions from './action-menu-mockdata'

const meta: Meta<typeof ActionMenu> = {
  title: 'UI/Molecules/ActionMenu',
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
        leftIcon: { type: 'expand', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
        clickHandler: () => console.log('Item 1 Clicked'),
      },
      {
        text: 'Item 2',
        leftIcon: { type: 'expand-alt', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
        clickHandler: () => console.log('Item 2 Clicked'),
      },
      {
        text: 'Item 3 Long Text',
        leftIcon: { type: 'compress', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
        clickHandler: () => console.log('Item 3 Clicked'),
      },
      {
        text: 'Item 4 With SubMenu',
        leftIcon: { type: 'compress', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
        actions: [
          { text: 'Sub Item 1', rightIcon: { type: 'external-link', size: 'medium' } },
          { text: 'Sub Item 2', rightIcon: { type: 'external-link', size: 'medium' } },
          { text: 'Sub Item 3', rightIcon: { type: 'external-link', size: 'medium' } },
        ],
      },
    ],
  },
}

export const CustomisedMenuTrigger: Story = {
  args: {
    actions: mockActions,
    menuButtonOptions: {
      type: 'icon',
      iconProps: { type: 'hamburger', size: 'large', color: 'info-blue' },
    },
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

export const MenuTriggerWithButton: Story = {
  args: {
    actions: mockActions,
    menuButtonOptions: {
      type: 'button',
      text: '',
      buttonProps: {
        styling: {
          buttonStyle: 'standard',
          padding: '0.4rem',
        },
        icon: <Icon {...{ type: 'ellipsis-horizontal', size: 'medium' }} />,
        iconPlacement: 'center',
      },
    },
  },
  render: (props) => (
    <div style={{ width: '30px' }}>
      <ActionMenu {...props} />
    </div>
  ),
}

export const MenuTriggerWithButtonText: Story = {
  args: {
    actions: mockActions,
    menuButtonOptions: {
      type: 'button',
      text: 'Actions',
      buttonProps: {
        styling: {
          buttonStyle: 'standard',
          padding: '0.4rem',
        },
        icon: <Icon {...{ type: 'edit', size: 'medium' }} />,
      },
    },
  },
  render: (props) => (
    <div style={{ width: '100px' }}>
      <ActionMenu {...props} />
    </div>
  ),
}

export const MenuTriggerClearButton: Story = {
  args: {
    actions: mockActions,
    menuButtonOptions: {
      type: 'button',
      text: 'Actions',
      buttonProps: {
        styling: {
          buttonStyle: 'clear',
        },
      },
    },
  },
  render: (props) => (
    <div style={{ width: '100px' }}>
      <ActionMenu {...props} />
    </div>
  ),
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
        leftIcon: { type: 'paper-clip', size: 'medium' },
        disabled: true,
      },
      ...mockActions,
    ],
  },
}
