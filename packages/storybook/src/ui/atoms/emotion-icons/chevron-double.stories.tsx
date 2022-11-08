import { Story } from '@storybook/react'
import { ChevronDoubleIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const ChevronDouble: Story = () => (
  <>
    <ChevronDoubleIcon size="0.75em" direction="up" />
    <ChevronDoubleIcon size="0.75em" direction="down" />
    <ChevronDoubleIcon size="0.75em" direction="left" />
    <ChevronDoubleIcon size="0.75em" direction="right" />
    <br />
    <br />
    <ChevronDoubleIcon size="1.2em" direction="up" />
    <ChevronDoubleIcon size="1.2em" direction="down" />
    <ChevronDoubleIcon size="1.2em" direction="left" />
    <ChevronDoubleIcon size="1.2em" direction="right" />
    <br />
    <br />
    <ChevronDoubleIcon size="2em" direction="up" />
    <ChevronDoubleIcon size="2em" direction="down" />
    <ChevronDoubleIcon size="2em" direction="left" />
    <ChevronDoubleIcon size="2em" direction="right" />
  </>
)
