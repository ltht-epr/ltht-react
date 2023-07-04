import { Story } from '@storybook/react'
import Icon from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const User: Story = () => (
  <>
    <Icon type="user" size="small" />
    <br />
    <Icon type="user" size="medium" />
    <br />
    <Icon type="user" size="large" />
  </>
)
