import { Story } from '@storybook/react'
import { StarIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Star: Story = () => (
  <>
    <StarIcon size="small" />
    <br />
    <StarIcon size="medium" />
    <br />
    <StarIcon size="large" />
  </>
)
