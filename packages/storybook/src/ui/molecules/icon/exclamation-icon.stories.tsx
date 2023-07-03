import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Exclamation: Story = () => (
  <>
    <Icon type="exclamation" status="green" size="small" />
    <Icon type="exclamation" status="green" size="medium" />
    <Icon type="exclamation" status="green" size="large" />
    <br />
    <Icon type="exclamation" status="amber" size="small" />
    <Icon type="exclamation" status="amber" size="medium" />
    <Icon type="exclamation" status="amber" size="large" />
    <br />
    <Icon type="exclamation" status="red" size="small" />
    <Icon type="exclamation" status="red" size="medium" />
    <Icon type="exclamation" status="red" size="large" />
  </>
)
