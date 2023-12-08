import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="plus" size="small" color="green" />
      <Icon type="plus" size="small" color="amber" />
      <Icon type="plus" size="small" color="red" />
    </>
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="plus" size="medium" color="green" />
      <Icon type="plus" size="medium" color="amber" />
      <Icon type="plus" size="medium" color="red" />
    </>
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="plus" size="large" color="green" />
      <Icon type="plus" size="large" color="amber" />
      <Icon type="plus" size="large" color="red" />
    </>
  ),
}
