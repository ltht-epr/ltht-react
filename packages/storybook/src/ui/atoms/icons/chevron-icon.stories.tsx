import { Story } from '@storybook/react'
import { ChevronIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Chevron: Story = () => (
  <>
    <ChevronIcon direction="up" size="small" />
    <ChevronIcon direction="down" size="small" />
    <ChevronIcon direction="left" size="small" />
    <ChevronIcon direction="right" size="small" />
    <br />
    <ChevronIcon direction="up" size="medium" />
    <ChevronIcon direction="down" size="medium" />
    <ChevronIcon direction="left" size="medium" />
    <ChevronIcon direction="right" size="medium" />
    <br />
    <ChevronIcon direction="up" size="large" />
    <ChevronIcon direction="down" size="large" />
    <ChevronIcon direction="left" size="large" />
    <ChevronIcon direction="right" size="large" />
  </>
)
