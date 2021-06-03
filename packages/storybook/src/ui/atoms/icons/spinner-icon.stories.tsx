import { Story } from '@storybook/react'
import { SpinnerIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const SpinnerAnimated: Story = () => (
  <>
    <SpinnerIcon size="small" />
    <br />
    <SpinnerIcon size="medium" />
    <br />
    <SpinnerIcon size="large" />
  </>
)

export const Spinner: Story = () => (
  <>
    <SpinnerIcon size="small" animate={false} />
    <br />
    <SpinnerIcon size="medium" animate={false} />
    <br />
    <SpinnerIcon size="large" animate={false} />
  </>
)
