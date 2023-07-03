import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Star: Story = () => (
  <>
    <Icon type="star" size="small" />
    <br />
    <Icon type="star" size="medium" />
    <br />
    <Icon type="star" size="large" />
  </>
)
