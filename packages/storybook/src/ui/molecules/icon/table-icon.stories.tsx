import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Table: Story = () => (
  <>
    <Icon type="table" status="disabled" size="small" />
    <Icon type="table" status="warning" size="small" />
    <Icon type="table" status="success" size="small" />
    <Icon type="table" status="danger" size="small" />
    <br />
    <Icon type="table" status="disabled" size="medium" />
    <Icon type="table" status="warning" size="medium" />
    <Icon type="table" status="success" size="medium" />
    <Icon type="table" status="danger" size="medium" />
    <br />
    <Icon type="table" status="disabled" size="large" />
    <Icon type="table" status="warning" size="large" />
    <Icon type="table" status="success" size="large" />
    <Icon type="table" status="danger" size="large" />
  </>
)
