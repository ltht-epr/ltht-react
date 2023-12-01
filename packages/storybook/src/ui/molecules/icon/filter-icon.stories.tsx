/* eslint-disable no-alert */
import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => <Icon type="filter" size="small" onClick={() => alert('You clicked the icon')} title="Icon title" />,
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => <Icon type="filter" size="medium" onClick={() => alert('You clicked the icon')} title="Icon title" />,
}
export const Large: StoryObj<typeof Icon> = {
  render: () => <Icon type="filter" size="large" onClick={() => alert('You clicked the icon')} title="Icon title" />,
}
