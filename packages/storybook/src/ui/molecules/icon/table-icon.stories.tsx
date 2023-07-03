import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Table: Story = () => (
  <>
    <Icon type="table" status="default" size="small" />
    <Icon type="table" status="amber" size="small" />
    <Icon type="table" status="green" size="small" />
    <Icon type="table" status="red" size="small" />
    <br />
    <Icon type="table" status="default" size="medium" />
    <Icon type="table" status="amber" size="medium" />
    <Icon type="table" status="green" size="medium" />
    <Icon type="table" status="red" size="medium" />
    <br />
    <Icon type="table" status="default" size="large" />
    <Icon type="table" status="amber" size="large" />
    <Icon type="table" status="green" size="large" />
    <Icon type="table" status="red" size="large" />
  </>
)
