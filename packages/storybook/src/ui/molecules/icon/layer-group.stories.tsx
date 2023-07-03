import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const LayerGroup: Story = () => (
  <>
    <Icon type="layer-group" size="small" />
    <br />
    <Icon type="layer-group" size="medium" />
    <br />
    <Icon type="layer-group" size="large" title="Test title" />
  </>
)
