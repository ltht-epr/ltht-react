import { Story } from '@storybook/react'
import { DotCircleIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const DotCircle: Story = () => (
  <>
    <br />
    <DotCircleIcon size="small" status="info" />
    <DotCircleIcon size="medium" status="info" />
    <DotCircleIcon size="large" status="info" />
    <br />
    <DotCircleIcon size="small" status="amber" />
    <DotCircleIcon size="medium" status="amber" />
    <DotCircleIcon size="large" status="amber" />
    <br />
    <DotCircleIcon size="small" status="red" />
    <DotCircleIcon size="medium" status="red" />
    <DotCircleIcon size="large" status="red" />
    <br />
    <DotCircleIcon size="small" status="default" />
    <DotCircleIcon size="medium" status="default" />
    <DotCircleIcon size="large" status="default" />
    <br />
    <DotCircleIcon size="small" status="green" />
    <DotCircleIcon size="medium" status="green" />
    <DotCircleIcon size="large" status="green" />
  </>
)
