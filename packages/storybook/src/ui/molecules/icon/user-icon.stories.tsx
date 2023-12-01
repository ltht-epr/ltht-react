import { Meta, StoryObj } from '@storybook/react'
import Icon from '@ltht-react/icon'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => <Icon type="user" size="small" />,
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => <Icon type="user" size="medium" />,
}
export const Large: StoryObj<typeof Icon> = {
  render: () => <Icon type="user" size="large" />,
}
