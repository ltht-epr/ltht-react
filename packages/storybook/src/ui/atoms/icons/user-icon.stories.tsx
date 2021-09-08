import { Story } from '@storybook/react'
import { UserIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const User: Story = () => (
  <>
    <UserIcon size="small" />
    <br />
    <UserIcon size="medium" />
    <br />
    <UserIcon size="large" />
  </>
)
