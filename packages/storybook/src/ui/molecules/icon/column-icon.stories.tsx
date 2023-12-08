import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="column" size="small" color="grey" />
      <Icon type="column" size="small" color="amber" />
      <Icon type="column" size="small" color="green" />
      <Icon type="column" size="small" color="red" />
    </>
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="column" size="medium" color="grey" />
      <Icon type="column" size="medium" color="amber" />
      <Icon type="column" size="medium" color="green" />
      <Icon type="column" size="medium" color="red" />
    </>
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="column" size="large" color="grey" />
      <Icon type="column" size="large" color="amber" />
      <Icon type="column" size="large" color="green" />
      <Icon type="column" size="large" color="red" />
    </>
  ),
}
