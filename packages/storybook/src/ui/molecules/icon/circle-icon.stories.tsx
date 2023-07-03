import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Circle: Story = () => (
  <>
    <Icon type="circle" status="default" size="small" />
    <Icon type="circle" status="green" size="small" />
    <br />
    <Icon type="circle" status="default" size="medium" />
    <Icon type="circle" status="green" size="medium" />
    <br />
    <Icon type="circle" status="default" size="large" />
    <Icon type="circle" status="green" size="large" />
  </>
)
