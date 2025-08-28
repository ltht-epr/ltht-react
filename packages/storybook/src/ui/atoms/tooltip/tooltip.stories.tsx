import type { Meta, StoryObj } from '@storybook/react'

import Tooltip from '@ltht-react/tooltip'
import Card from '@ltht-react/card'
import { IconButton } from '@ltht-react/icon'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Atoms/Tooltip',
  component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const TooltipStory: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    children: 'Tooltip on top',
  },
}

export const TooltipBottom: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'bottom',
    children: 'Tooltip on bottom',
  },
}

export const TooltipLeft: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'left',
    children: 'Tooltip on left',
  },
  render: (args) => (
    <div style={{ marginLeft: '200px' }}>
      <Tooltip {...args} />
    </div>
  ),
}

export const TooltipRight: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'right',
    children: 'Tooltip on right',
  },
}

export const TooltipAutoPlacementOnEdge: Story = {
  args: {
    content: 'This is a tooltip is auto placed due to edge proximity',
    placement: 'left',
    children: 'Tooltip on left',
  },
}

export const PrimaryTooltip: Story = {
  args: {
    content: 'This is a tooltip with type',
    placement: 'right',
    type: 'primary',
    children: 'Tooltip on right',
  },
}

export const TooltipWarning: Story = {
  args: {
    content: 'This is a tooltip with type',
    placement: 'right',
    type: 'warning',
    children: 'Tooltip on right',
  },
}

export const TooltipError: Story = {
  args: {
    content: 'This is a tooltip with type',
    placement: 'right',
    type: 'error',
    children: 'Tooltip on right',
  },
}

export const TooltipCardExample: Story = {
  args: {
    content: 'This is a tooltip',
  },
  render: (args) => (
    <Card style={{ width: '300px', height: '400px', overflowY: 'scroll', overflowX: 'hidden' }}>
      <Card.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h3 style={{ margin: 0 }}>Example Summary</h3>
          <Tooltip {...args}>
            <IconButton type="button" iconProps={{ type: 'expand', size: 'medium' }} text="Hover over me" />
          </Tooltip>
        </div>
      </Card.Header>
      <Card.List>
        <Card.ListItem>Item 1</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          <Tooltip
            content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            placement="top"
          >
            <button type="button">Hover over me</button>
          </Tooltip>
        </Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
      </Card.List>
    </Card>
  ),
}
