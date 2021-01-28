import React from 'react'
import { Story } from '@storybook/react'
import { ChevronCircleIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const ChevronCircle: Story = () => (
  <>
    <ChevronCircleIcon direction="up" size="small" />
    <ChevronCircleIcon direction="down" size="small" />
    <ChevronCircleIcon direction="left" size="small" />
    <ChevronCircleIcon direction="right" size="small" />
    <br />
    <ChevronCircleIcon direction="up" size="medium" />
    <ChevronCircleIcon direction="down" size="medium" />
    <ChevronCircleIcon direction="left" size="medium" />
    <ChevronCircleIcon direction="right" size="medium" />
    <br />
    <ChevronCircleIcon direction="up" size="large" />
    <ChevronCircleIcon direction="down" size="large" />
    <ChevronCircleIcon direction="left" size="large" />
    <ChevronCircleIcon direction="right" size="large" />
  </>
)
