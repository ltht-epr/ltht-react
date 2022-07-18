import { Story } from '@storybook/react'
import { FilterIcon } from '@ltht-react/icon'
// eslint-disable-next-line import/prefer-default-export
export const Filter: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const clickHandler = (): void => {}
  return (
    <>
      <FilterIcon size="small" />
      <br />
      <FilterIcon size="medium" />
      <br />
      <FilterIcon size="large" title="Test title" />
      <br />
      <FilterIcon size="small" onClick={clickHandler} />
      <br />
      <FilterIcon size="medium" onClick={clickHandler} />
      <br />
      <FilterIcon size="large" title="Test title" onClick={clickHandler} />
    </>
  )
}
