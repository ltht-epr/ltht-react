import React from 'react'
import { Story } from '@storybook/react'
import { ColumnIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Column: Story = () => (
  <>
    <ColumnIcon status="default" size="small" />
    <ColumnIcon status="amber" size="small" />
    <ColumnIcon status="green" size="small" />
    <ColumnIcon status="red" size="small" />
    <br />
    <ColumnIcon status="default" size="medium" />
    <ColumnIcon status="amber" size="medium" />
    <ColumnIcon status="green" size="medium" />
    <ColumnIcon status="red" size="medium" />
    <br />
    <ColumnIcon status="default" size="large" />
    <ColumnIcon status="amber" size="large" />
    <ColumnIcon status="green" size="large" />
    <ColumnIcon status="red" size="large" />
  </>
)
