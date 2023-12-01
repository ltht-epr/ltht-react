/* eslint-disable no-alert */
import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <Icon type="folder-plus" size="small" onClick={() => alert('You clicked the icon')} title="icon title" />
  ),
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <Icon type="folder-plus" size="medium" onClick={() => alert('You clicked the icon')} title="icon title" />
  ),
}
export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <Icon type="folder-plus" size="large" onClick={() => alert('You clicked the icon')} title="icon title" />
  ),
}
