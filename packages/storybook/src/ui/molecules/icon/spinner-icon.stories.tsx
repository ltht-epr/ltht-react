import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Animated: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="spinner" size="small" />
      <Icon type="spinner" size="medium" />
      <Icon type="spinner" size="large" />
    </>
  ),
}

export const Static: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="spinner" size="small" animation={{ spin: false }} />
      <Icon type="spinner" size="medium" animation={{ spin: false }} />
      <Icon type="spinner" size="large" animation={{ spin: false }} />
    </>
  ),
}
