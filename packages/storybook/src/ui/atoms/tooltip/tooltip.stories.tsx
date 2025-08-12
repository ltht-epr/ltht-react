import type { Meta, StoryObj } from '@storybook/react'

import Tooltip from '@ltht-react/tooltip'

const meta: Meta<typeof Tooltip> = {
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
    content: 'This is a tooltip is auto placed on the right due to edge proximity',
    placement: 'left',
    children: 'Tooltip on left',
  },
}
