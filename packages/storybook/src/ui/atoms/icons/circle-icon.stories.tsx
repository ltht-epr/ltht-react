import React from 'react'
import { Story } from '@storybook/react'
import { CircleIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Circle: Story = () => (
  <>
    <CircleIcon status="default" size="small" />
    <CircleIcon status="green" size="small" />
    <br />
    <CircleIcon status="default" size="medium" />
    <CircleIcon status="green" size="medium" />
    <br />
    <CircleIcon status="default" size="large" />
    <CircleIcon status="green" size="large" />
  </>
)
