import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Circle: Story = () => (
  <>
    <Icon type="circle" status="disabled" size="small" />
    <Icon type="circle" status="success" size="small" />
    <br />
    <Icon type="circle" status="disabled" size="medium" />
    <Icon type="circle" status="success" size="medium" />
    <br />
    <Icon type="circle" status="disabled" size="large" />
    <Icon type="circle" status="success" size="large" />
  </>
)
