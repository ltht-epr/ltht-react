import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="dot-circle" size="small" color="info-blue" />
      <Icon type="dot-circle" size="small" color="amber" />
      <Icon type="dot-circle" size="small" color="red" />
      <Icon type="dot-circle" size="small" color="green" />
    </>
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="dot-circle" size="medium" color="info-blue" />
      <Icon type="dot-circle" size="medium" color="amber" />
      <Icon type="dot-circle" size="medium" color="red" />
      <Icon type="dot-circle" size="medium" color="green" />
    </>
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="dot-circle" size="large" color="info-blue" />
      <Icon type="dot-circle" size="large" color="amber" />
      <Icon type="dot-circle" size="large" color="red" />
      <Icon type="dot-circle" size="large" color="green" />
    </>
  ),
}
