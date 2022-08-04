/* eslint-disable jsx-a11y/label-has-associated-control */
import { Story } from '@storybook/react'
import { Toggle } from '@ltht-react/input'
import { useState } from 'react'

// eslint-disable-next-line import/prefer-default-export
export const ToggleInput: Story = () => {
  const [isToggledOn, setIsToggledOn] = useState(false)

  return (
    <>
      <Toggle
        onChange={(e) => setIsToggledOn((e.target as HTMLInputElement).checked)}
        checked={isToggledOn}
        id="toggle-1"
      />
      <label htmlFor="toggle-1"> Click me</label>
    </>
  )
}
