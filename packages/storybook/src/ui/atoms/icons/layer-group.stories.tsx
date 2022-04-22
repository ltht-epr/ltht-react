import { Story } from '@storybook/react'
import { LayerGroupIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const LayerGroup: Story = () => (
  <>
    <LayerGroupIcon size="small" />
    <br />
    <LayerGroupIcon size="medium" />
    <br />
    <LayerGroupIcon size="large" title="Test title" />
  </>
)
