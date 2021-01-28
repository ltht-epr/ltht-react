import React from 'react'
import { Story } from '@storybook/react'
import { InfoCircleIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const InfoCircle: Story = () => (
  <>
    <InfoCircleIcon status="green" size="small" />
    <InfoCircleIcon status="green" size="medium" />
    <InfoCircleIcon status="green" size="large" />
    <br />
    <InfoCircleIcon status="amber" size="small" />
    <InfoCircleIcon status="amber" size="medium" />
    <InfoCircleIcon status="amber" size="large" />
    <br />
    <InfoCircleIcon status="red" size="small" />
    <InfoCircleIcon status="red" size="medium" />
    <InfoCircleIcon status="red" size="large" />
  </>
)
