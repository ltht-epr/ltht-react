import { Story } from '@storybook/react'
import { CrossIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Cross: Story = () => (
  <>
    <CrossIcon size="small" status="default" />
    <CrossIcon size="small" status="amber" />
    <CrossIcon size="small" status="green" />
    <CrossIcon size="small" status="red" />
    <br />
    <CrossIcon size="medium" status="default" />
    <CrossIcon size="medium" status="amber" />
    <CrossIcon size="medium" status="green" />
    <CrossIcon size="medium" status="red" />
    <br />
    <CrossIcon size="large" status="default" />
    <CrossIcon size="large" status="amber" />
    <CrossIcon size="large" status="green" />
    <CrossIcon size="large" status="red" />
  </>
)
