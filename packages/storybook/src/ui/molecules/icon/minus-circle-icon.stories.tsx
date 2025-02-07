import { Meta, StoryObj } from '@storybook/react'
import Icon from '@ltht-react/icon'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => <Icon type="minus-circle" size="small" />,
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => <Icon type="minus-circle" size="medium" />,
}
export const Large: StoryObj<typeof Icon> = {
  render: () => <Icon type="minus-circle" size="large" />,
}
