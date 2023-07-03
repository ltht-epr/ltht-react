import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const InfoCircle: Story = () => (
  <>
    <Icon type="info-circle" status="green" size="small" />
    <Icon type="info-circle" status="green" size="medium" />
    <Icon type="info-circle" status="green" size="large" />
    <br />
    <Icon type="info-circle" status="amber" size="small" />
    <Icon type="info-circle" status="amber" size="medium" />
    <Icon type="info-circle" status="amber" size="large" />
    <br />
    <Icon type="info-circle" status="red" size="small" />
    <Icon type="info-circle" status="red" size="medium" />
    <Icon type="info-circle" status="red" size="large" />
  </>
)
