import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Cross: Story = () => (
  <>
    <Icon type="cross" size="small" status="disabled" />
    <Icon type="cross" size="small" status="warning" />
    <Icon type="cross" size="small" status="success" />
    <Icon type="cross" size="small" status="danger" />
    <br />
    <Icon type="cross" size="medium" status="disabled" />
    <Icon type="cross" size="medium" status="warning" />
    <Icon type="cross" size="medium" status="success" />
    <Icon type="cross" size="medium" status="danger" />
    <br />
    <Icon type="cross" size="large" status="disabled" />
    <Icon type="cross" size="large" status="warning" />
    <Icon type="cross" size="large" status="success" />
    <Icon type="cross" size="large" status="danger" />
  </>
)
