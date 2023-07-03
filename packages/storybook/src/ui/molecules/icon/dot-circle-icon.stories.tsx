import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const DotCircle: Story = () => (
  <>
    <br />
    <Icon type="dot-circle" size="small" status="info" />
    <Icon type="dot-circle" size="medium" status="info" />
    <Icon type="dot-circle" size="large" status="info" />
    <br />
    <Icon type="dot-circle" size="small" status="amber" />
    <Icon type="dot-circle" size="medium" status="amber" />
    <Icon type="dot-circle" size="large" status="amber" />
    <br />
    <Icon type="dot-circle" size="small" status="red" />
    <Icon type="dot-circle" size="medium" status="red" />
    <Icon type="dot-circle" size="large" status="red" />
    <br />
    <Icon type="dot-circle" size="small" status="default" />
    <Icon type="dot-circle" size="medium" status="default" />
    <Icon type="dot-circle" size="large" status="default" />
    <br />
    <Icon type="dot-circle" size="small" status="green" />
    <Icon type="dot-circle" size="medium" status="green" />
    <Icon type="dot-circle" size="large" status="green" />
  </>
)
