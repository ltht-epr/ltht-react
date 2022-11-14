import { Story } from '@storybook/react'
import { ArrowIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Arrow: Story = () => (
  <>
    <ArrowIcon direction="up" size="small" />
    <ArrowIcon direction="down" size="small" />
    <ArrowIcon direction="left" size="small" />
    <ArrowIcon direction="right" size="small" />
    <br />
    <ArrowIcon direction="up" size="medium" />
    <ArrowIcon direction="down" size="medium" />
    <ArrowIcon direction="left" size="medium" />
    <ArrowIcon direction="right" size="medium" />
    <br />
    <ArrowIcon direction="up" size="large" />
    <ArrowIcon direction="down" size="large" />
    <ArrowIcon direction="left" size="large" />
    <ArrowIcon direction="right" size="large" />
  </>
)
