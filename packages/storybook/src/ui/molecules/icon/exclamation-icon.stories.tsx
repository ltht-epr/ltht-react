import { Story } from '@storybook/react'
import Icon from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Exclamation: Story = () => (
  <>
    <Icon type="exclamation" color="green" size="small" />
    <Icon type="exclamation" color="green" size="medium" />
    <Icon type="exclamation" color="green" size="large" />
    <br />
    <Icon type="exclamation" color="amber" size="small" />
    <Icon type="exclamation" color="amber" size="medium" />
    <Icon type="exclamation" color="amber" size="large" />
    <br />
    <Icon type="exclamation" color="red" size="small" />
    <Icon type="exclamation" color="red" size="medium" />
    <Icon type="exclamation" color="red" size="large" />
  </>
)
