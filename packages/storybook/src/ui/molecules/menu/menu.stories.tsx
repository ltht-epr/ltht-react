/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuItem } from '@ltht-react/menu'
import Icon from '@ltht-react/icon'

const meta: Meta<typeof Menu> = {
  title: 'UI/Molecules/Menu',
  component: Menu,
}

export default meta
type Story = StoryObj<typeof Menu>

export const DefaultMenu: Story = {
  render: () => (
    <Menu>
      <MenuItem onClick={() => console.log('Item 1 Clicked!')}>Item 1</MenuItem>
      <MenuItem onClick={() => console.log('Item 2 Clicked!')}>Item 2</MenuItem>
      <MenuItem onClick={() => console.log('Item 3 Clicked!')}>Item 3</MenuItem>
      <Menu label="Item 4" leftIcon={<Icon type="bullseye" size="medium" />}>
        <MenuItem onClick={() => console.log('SubItem 1 Clicked!')}>SubItem 1</MenuItem>
        <MenuItem onClick={() => console.log('SubItem 2 Clicked!')}>SubItem 2</MenuItem>
        <MenuItem onClick={() => console.log('SubItem 3 Clicked!')}>SubItem 3</MenuItem>
      </Menu>
    </Menu>
  ),
}

export const MenuWithIconTrigger: Story = {
  args: {
    leftIcon: <Icon type="ellipsis-vertical" size="medium" />,
    style: {
      fontSize: '1.2rem',
    },
  },
  render: (props) => (
    <Menu {...props}>
      <MenuItem onClick={() => console.log('Item 1 Clicked!')}>Item 1</MenuItem>
      <MenuItem onClick={() => console.log('Item 2 Clicked!')}>Item 2</MenuItem>
      <MenuItem onClick={() => console.log('Item 3 Clicked!')}>Item 3</MenuItem>
      <Menu label="Item 4" leftIcon={<Icon type="bullseye" size="medium" />}>
        <MenuItem onClick={() => console.log('SubItem 1 Clicked!')}>SubItem 1</MenuItem>
        <MenuItem onClick={() => console.log('SubItem 2 Clicked!')}>SubItem 2</MenuItem>
        <MenuItem onClick={() => console.log('SubItem 3 Clicked!')}>SubItem 3</MenuItem>
      </Menu>
    </Menu>
  ),
}

export const MenuWithCustomIconTrigger: Story = {
  args: {
    rootTrigger: {
      type: 'icon',
      iconProps: {
        type: 'hamburger',
        size: 'large',
      },
    },
  },
  render: (props) => (
    <Menu {...props}>
      <MenuItem onClick={() => console.log('Item 1 Clicked!')}>Item 1</MenuItem>
      <MenuItem onClick={() => console.log('Item 2 Clicked!')}>Item 2</MenuItem>
      <MenuItem onClick={() => console.log('Item 3 Clicked!')}>Item 3</MenuItem>
      <Menu label="Item 4" leftIcon={<Icon type="bullseye" size="medium" />}>
        <MenuItem onClick={() => console.log('SubItem 1 Clicked!')}>SubItem 1</MenuItem>
        <MenuItem onClick={() => console.log('SubItem 2 Clicked!')}>SubItem 2</MenuItem>
        <MenuItem onClick={() => console.log('SubItem 3 Clicked!')}>SubItem 3</MenuItem>
      </Menu>
    </Menu>
  ),
}

export const MenuWithCustomButtonTrigger: Story = {
  args: {
    rootTrigger: {
      type: 'button',
      text: 'Actions',
      buttonProps: {
        styling: {
          buttonStyle: 'primary',
        },
        icon: <Icon type="hamburger" size="medium" />,
      },
    },
  },
  render: (props) => (
    <div style={{ width: 100 }}>
      <Menu {...props}>
        <MenuItem onClick={() => console.log('Item 1 Clicked!')}>Item 1</MenuItem>
        <MenuItem onClick={() => console.log('Item 2 Clicked!')}>Item 2</MenuItem>
        <MenuItem onClick={() => console.log('Item 3 Clicked!')}>Item 3</MenuItem>
        <Menu label="Item 4" leftIcon={<Icon type="bullseye" size="medium" />}>
          <MenuItem onClick={() => console.log('SubItem 1 Clicked!')}>SubItem 1</MenuItem>
          <MenuItem onClick={() => console.log('SubItem 2 Clicked!')}>SubItem 2</MenuItem>
          <MenuItem onClick={() => console.log('SubItem 3 Clicked!')}>SubItem 3</MenuItem>
        </Menu>
      </Menu>
    </div>
  ),
}
