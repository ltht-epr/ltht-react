import { Story } from '@storybook/react'
import Icon from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Hamburger: Story = () => (
  <>
    <Icon type="hamburger" size="small" />
    <br />
    <Icon type="hamburger" size="medium" />
    <br />
    <Icon type="hamburger" size="large" />
  </>
)
