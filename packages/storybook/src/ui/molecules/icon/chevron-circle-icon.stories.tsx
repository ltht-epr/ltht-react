import { Story } from '@storybook/react'
import Icon from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const ChevronCircle: Story = () => (
  <>
    <Icon type="chevron-circle" direction="up" size="small" />
    <Icon type="chevron-circle" direction="down" size="small" />
    <Icon type="chevron-circle" direction="left" size="small" />
    <Icon type="chevron-circle" direction="right" size="small" />
    <br />
    <Icon type="chevron-circle" direction="up" size="medium" />
    <Icon type="chevron-circle" direction="down" size="medium" />
    <Icon type="chevron-circle" direction="left" size="medium" />
    <Icon type="chevron-circle" direction="right" size="medium" />
    <br />
    <Icon type="chevron-circle" direction="up" size="large" />
    <Icon type="chevron-circle" direction="down" size="large" />
    <Icon type="chevron-circle" direction="left" size="large" />
    <Icon type="chevron-circle" direction="right" size="large" />
  </>
)
