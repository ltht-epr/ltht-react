import { Story } from '@storybook/react'
import { ExclamationIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Exclamation: Story = () => (
  <>
    <ExclamationIcon status="green" size="small" />
    <ExclamationIcon status="green" size="medium" />
    <ExclamationIcon status="green" size="large" />
    <br />
    <ExclamationIcon status="amber" size="small" />
    <ExclamationIcon status="amber" size="medium" />
    <ExclamationIcon status="amber" size="large" />
    <br />
    <ExclamationIcon status="red" size="small" />
    <ExclamationIcon status="red" size="medium" />
    <ExclamationIcon status="red" size="large" />
  </>
)
