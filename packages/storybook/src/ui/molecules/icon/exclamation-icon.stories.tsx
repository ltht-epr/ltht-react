import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="exclamation" size="small" color="green" />
      <Icon type="exclamation" size="small" color="amber" />
      <Icon type="exclamation" size="small" color="red" />
    </>
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="exclamation" size="medium" color="green" />
      <Icon type="exclamation" size="medium" color="amber" />
      <Icon type="exclamation" size="medium" color="red" />
    </>
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="exclamation" size="large" color="green" />
      <Icon type="exclamation" size="large" color="amber" />
      <Icon type="exclamation" size="large" color="red" />
    </>
  ),
}
