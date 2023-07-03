import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Column: Story = () => (
  <>
    <Icon type="column" status="default" size="small" />
    <Icon type="column" status="amber" size="small" />
    <Icon type="column" status="green" size="small" />
    <Icon type="column" status="red" size="small" />
    <br />
    <Icon type="column" status="default" size="medium" />
    <Icon type="column" status="amber" size="medium" />
    <Icon type="column" status="green" size="medium" />
    <Icon type="column" status="red" size="medium" />
    <br />
    <Icon type="column" status="default" size="large" />
    <Icon type="column" status="amber" size="large" />
    <Icon type="column" status="green" size="large" />
    <Icon type="column" status="red" size="large" />
  </>
)
