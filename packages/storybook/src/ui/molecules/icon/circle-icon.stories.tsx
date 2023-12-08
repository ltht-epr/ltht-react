import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="circle" size="small" color="grey" />
      <Icon type="circle" size="small" color="green" />
    </>
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="circle" size="medium" color="grey" />
      <Icon type="circle" size="medium" color="green" />
    </>
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="circle" size="large" color="grey" />
      <Icon type="circle" size="large" color="green" />
    </>
  ),
}
