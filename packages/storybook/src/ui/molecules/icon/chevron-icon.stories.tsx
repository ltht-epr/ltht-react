import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Chevron: Story = () => (
  <>
    <Icon type="chevron" direction="up" size="small" />
    <Icon type="chevron" direction="down" size="small" />
    <Icon type="chevron" direction="left" size="small" />
    <Icon type="chevron" direction="right" size="small" />
    <br />
    <Icon type="chevron" direction="up" size="medium" />
    <Icon type="chevron" direction="down" size="medium" />
    <Icon type="chevron" direction="left" size="medium" />
    <Icon type="chevron" direction="right" size="medium" />
    <br />
    <Icon type="chevron" direction="up" size="large" />
    <Icon type="chevron" direction="down" size="large" />
    <Icon type="chevron" direction="left" size="large" />
    <Icon type="chevron" direction="right" size="large" />
  </>
)
