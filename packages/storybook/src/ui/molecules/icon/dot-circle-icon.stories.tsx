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
    <Icon type="dot-circle" size="small" status="warning" />
    <Icon type="dot-circle" size="medium" status="warning" />
    <Icon type="dot-circle" size="large" status="warning" />
    <br />
    <Icon type="dot-circle" size="small" status="danger" />
    <Icon type="dot-circle" size="medium" status="danger" />
    <Icon type="dot-circle" size="large" status="danger" />
    <br />
    <Icon type="dot-circle" size="small" status="disabled" />
    <Icon type="dot-circle" size="medium" status="disabled" />
    <Icon type="dot-circle" size="large" status="disabled" />
    <br />
    <Icon type="dot-circle" size="small" status="success" />
    <Icon type="dot-circle" size="medium" status="success" />
    <Icon type="dot-circle" size="large" status="success" />
  </>
)
