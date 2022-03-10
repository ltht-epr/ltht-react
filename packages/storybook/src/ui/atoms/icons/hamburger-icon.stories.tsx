import { Story } from '@storybook/react'
import { HamburgerIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Hamburger: Story = () => (
  <>
    <HamburgerIcon size="small" />
    <br />
    <HamburgerIcon size="medium" />
    <br />
    <HamburgerIcon size="large" />
  </>
)
