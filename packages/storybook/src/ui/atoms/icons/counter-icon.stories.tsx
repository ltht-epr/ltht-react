import React from 'react'
import { Story } from '@storybook/react'
import { CounterIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Counter: Story = () => (
  <>
    <br />
    <CounterIcon size="small" status="primary" value={1} />
    <CounterIcon size="medium" status="primary" value={5} />
    <CounterIcon size="large" status="primary" value={10} />
    <br />
    <CounterIcon size="small" status="secondary" value={1} />
    <CounterIcon size="medium" status="secondary" value={5} />
    <CounterIcon size="large" status="secondary" value={10} />
    <br />
    <CounterIcon size="small" status="amber" value={1} />
    <CounterIcon size="medium" status="amber" value={5} />
    <CounterIcon size="large" status="amber" value={10} />
    <br />
    <CounterIcon size="small" status="red" value={1} />
    <CounterIcon size="medium" status="red" value={5} />
    <CounterIcon size="large" status="red" value={10} />
    <br />
    <CounterIcon size="small" status="default" value={1} />
    <CounterIcon size="medium" status="default" value={5} />
    <CounterIcon size="large" status="default" value={10} />
    <br />
    <CounterIcon size="small" status="green" value={1} />
    <CounterIcon size="medium" status="green" value={5} />
    <CounterIcon size="large" status="green" value={10} />
  </>
)
