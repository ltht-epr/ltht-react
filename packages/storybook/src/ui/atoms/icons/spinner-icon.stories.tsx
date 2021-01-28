import React from 'react'
import { Story } from '@storybook/react'
import { SpinnerIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Spinner: Story = () => (
  <>
    <SpinnerIcon size="small" />
    <br />
    <SpinnerIcon size="medium" />
    <br />
    <SpinnerIcon size="large" />
  </>
)
