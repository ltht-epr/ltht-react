import { Story } from '@storybook/react'
import Icon from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Circle: Story = () => (
  <>
    <Icon type="circle" color="grey" size="small" />
    <Icon type="circle" color="green" size="small" />
    <br />
    <Icon type="circle" color="grey" size="medium" />
    <Icon type="circle" color="green" size="medium" />
    <br />
    <Icon type="circle" color="grey" size="large" />
    <Icon type="circle" color="green" size="large" />
  </>
)
