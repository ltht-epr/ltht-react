import { Story } from '@storybook/react'
import { ChevronDoubleIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const ChevronDouble: Story = () => (
  <>
    <ChevronDoubleIcon size="small" direction="up" />
    <ChevronDoubleIcon size="small" direction="down" />
    <ChevronDoubleIcon size="small" direction="left" />
    <ChevronDoubleIcon size="small" direction="right" />
    <br />
    <br />
    <ChevronDoubleIcon size="medium" direction="up" />
    <ChevronDoubleIcon size="medium" direction="down" />
    <ChevronDoubleIcon size="medium" direction="left" />
    <ChevronDoubleIcon size="medium" direction="right" />
    <br />
    <br />
    <ChevronDoubleIcon size="large" direction="up" />
    <ChevronDoubleIcon size="large" direction="down" />
    <ChevronDoubleIcon size="large" direction="left" />
    <ChevronDoubleIcon size="large" direction="right" />
  </>
)
