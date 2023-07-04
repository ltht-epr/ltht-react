import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const InfoCircle: Story = () => (
  <>
    <Icon type="info-circle" color="green" size="small" />
    <Icon type="info-circle" color="green" size="medium" />
    <Icon type="info-circle" color="green" size="large" />
    <br />
    <Icon type="info-circle" color="amber" size="small" />
    <Icon type="info-circle" color="amber" size="medium" />
    <Icon type="info-circle" color="amber" size="large" />
    <br />
    <Icon type="info-circle" color="red" size="small" />
    <Icon type="info-circle" color="red" size="medium" />
    <Icon type="info-circle" color="red" size="large" />
  </>
)
