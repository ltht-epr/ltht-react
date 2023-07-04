import { Story } from '@storybook/react'
import Icon from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const SpinnerAnimated: Story = () => (
  <>
    <Icon type="spinner" size="small" />
    <br />
    <Icon type="spinner" size="medium" />
    <br />
    <Icon type="spinner" size="large" />
  </>
)

export const Spinner: Story = () => (
  <>
    <Icon type="spinner" size="small" animation={{ spin: false }} />
    <br />
    <Icon type="spinner" size="medium" animation={{ spin: false }} />
    <br />
    <Icon type="spinner" size="large" animation={{ spin: false }} />
  </>
)
