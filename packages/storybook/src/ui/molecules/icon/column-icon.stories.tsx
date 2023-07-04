import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Column: Story = () => (
  <>
    <Icon type="column" color="grey" size="small" />
    <Icon type="column" color="amber" size="small" />
    <Icon type="column" color="green" size="small" />
    <Icon type="column" color="red" size="small" />
    <br />
    <Icon type="column" color="grey" size="medium" />
    <Icon type="column" color="amber" size="medium" />
    <Icon type="column" color="green" size="medium" />
    <Icon type="column" color="red" size="medium" />
    <br />
    <Icon type="column" color="grey" size="large" />
    <Icon type="column" color="amber" size="large" />
    <Icon type="column" color="green" size="large" />
    <Icon type="column" color="red" size="large" />
  </>
)
