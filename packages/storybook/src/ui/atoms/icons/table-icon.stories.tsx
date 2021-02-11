import { Story } from '@storybook/react'
import { TableIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Table: Story = () => (
  <>
    <TableIcon status="default" size="small" />
    <TableIcon status="amber" size="small" />
    <TableIcon status="green" size="small" />
    <TableIcon status="red" size="small" />
    <br />
    <TableIcon status="default" size="medium" />
    <TableIcon status="amber" size="medium" />
    <TableIcon status="green" size="medium" />
    <TableIcon status="red" size="medium" />
    <br />
    <TableIcon status="default" size="large" />
    <TableIcon status="amber" size="large" />
    <TableIcon status="green" size="large" />
    <TableIcon status="red" size="large" />
  </>
)
