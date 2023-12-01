import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => <Icon type="external-link" size="small" />,
}
export const Medium: StoryObj<typeof Icon> = {
  render: () => <Icon type="external-link" size="medium" />,
}
export const Large: StoryObj<typeof Icon> = {
  render: () => <Icon type="external-link" size="large" />,
}
