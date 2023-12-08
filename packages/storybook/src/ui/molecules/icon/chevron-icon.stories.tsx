import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="chevron" size="small" direction="up" />
      <Icon type="chevron" size="small" direction="down" />
      <Icon type="chevron" size="small" direction="left" />
      <Icon type="chevron" size="small" direction="right" />
    </>
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="chevron" size="medium" direction="up" />
      <Icon type="chevron" size="medium" direction="down" />
      <Icon type="chevron" size="medium" direction="left" />
      <Icon type="chevron" size="medium" direction="right" />
    </>
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="chevron" size="large" direction="up" />
      <Icon type="chevron" size="large" direction="down" />
      <Icon type="chevron" size="large" direction="left" />
      <Icon type="chevron" size="large" direction="right" />
    </>
  ),
}
