import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="table" color="grey" size="small" />
      <Icon type="table" color="amber" size="small" />
      <Icon type="table" color="green" size="small" />
      <Icon type="table" color="red" size="small" />
    </>
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="table" color="grey" size="medium" />
      <Icon type="table" color="amber" size="medium" />
      <Icon type="table" color="green" size="medium" />
      <Icon type="table" color="red" size="medium" />
    </>
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="table" color="grey" size="large" />
      <Icon type="table" color="amber" size="large" />
      <Icon type="table" color="green" size="large" />
      <Icon type="table" color="red" size="large" />
    </>
  ),
}
