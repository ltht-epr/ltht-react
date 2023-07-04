import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const InfoCircle: Story = () => (
  <>
    <Icon type="info-circle" status="success" size="small" />
    <Icon type="info-circle" status="success" size="medium" />
    <Icon type="info-circle" status="success" size="large" />
    <br />
    <Icon type="info-circle" status="warning" size="small" />
    <Icon type="info-circle" status="warning" size="medium" />
    <Icon type="info-circle" status="warning" size="large" />
    <br />
    <Icon type="info-circle" status="danger" size="small" />
    <Icon type="info-circle" status="danger" size="medium" />
    <Icon type="info-circle" status="danger" size="large" />
  </>
)
