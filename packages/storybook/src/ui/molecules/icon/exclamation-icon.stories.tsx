import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Exclamation: Story = () => (
  <>
    <Icon type="exclamation" status="success" size="small" />
    <Icon type="exclamation" status="success" size="medium" />
    <Icon type="exclamation" status="success" size="large" />
    <br />
    <Icon type="exclamation" status="warning" size="small" />
    <Icon type="exclamation" status="warning" size="medium" />
    <Icon type="exclamation" status="warning" size="large" />
    <br />
    <Icon type="exclamation" status="danger" size="small" />
    <Icon type="exclamation" status="danger" size="medium" />
    <Icon type="exclamation" status="danger" size="large" />
  </>
)
