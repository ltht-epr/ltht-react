import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="chevron-circle" size="small" direction="up" />
      <Icon type="chevron-circle" size="small" direction="down" />
      <Icon type="chevron-circle" size="small" direction="left" />
      <Icon type="chevron-circle" size="small" direction="right" />
    </>
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="chevron-circle" size="medium" direction="up" />
      <Icon type="chevron-circle" size="medium" direction="down" />
      <Icon type="chevron-circle" size="medium" direction="left" />
      <Icon type="chevron-circle" size="medium" direction="right" />
    </>
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="chevron-circle" size="large" direction="up" />
      <Icon type="chevron-circle" size="large" direction="down" />
      <Icon type="chevron-circle" size="large" direction="left" />
      <Icon type="chevron-circle" size="large" direction="right" />
    </>
  ),
}
