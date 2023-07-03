import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Cross: Story = () => (
  <>
    <Icon type="cross" size="small" status="default" />
    <Icon type="cross" size="small" status="amber" />
    <Icon type="cross" size="small" status="green" />
    <Icon type="cross" size="small" status="red" />
    <br />
    <Icon type="cross" size="medium" status="default" />
    <Icon type="cross" size="medium" status="amber" />
    <Icon type="cross" size="medium" status="green" />
    <Icon type="cross" size="medium" status="red" />
    <br />
    <Icon type="cross" size="large" status="default" />
    <Icon type="cross" size="large" status="amber" />
    <Icon type="cross" size="large" status="green" />
    <Icon type="cross" size="large" status="red" />
  </>
)
