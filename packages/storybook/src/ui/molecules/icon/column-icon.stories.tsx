import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Column: Story = () => (
  <>
    <Icon type="column" status="disabled" size="small" />
    <Icon type="column" status="warning" size="small" />
    <Icon type="column" status="success" size="small" />
    <Icon type="column" status="danger" size="small" />
    <br />
    <Icon type="column" status="disabled" size="medium" />
    <Icon type="column" status="warning" size="medium" />
    <Icon type="column" status="success" size="medium" />
    <Icon type="column" status="danger" size="medium" />
    <br />
    <Icon type="column" status="disabled" size="large" />
    <Icon type="column" status="warning" size="large" />
    <Icon type="column" status="success" size="large" />
    <Icon type="column" status="danger" size="large" />
  </>
)
