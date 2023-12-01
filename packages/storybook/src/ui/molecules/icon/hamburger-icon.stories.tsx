import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => <Icon type="hamburger" size="small" />,
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => <Icon type="hamburger" size="medium" />,
}
export const Large: StoryObj<typeof Icon> = {
  render: () => <Icon type="hamburger" size="large" />,
}
