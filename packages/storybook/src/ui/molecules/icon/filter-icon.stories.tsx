import { Story } from '@storybook/react'
import Icon from '@ltht-react/icon'
// eslint-disable-next-line import/prefer-default-export
export const Filter: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const clickHandler = (): void => {}
  return (
    <>
      <Icon type="filter" size="small" />
      <br />
      <Icon type="filter" size="medium" />
      <br />
      <Icon type="filter" size="large" title="Test title" />
      <br />
      <Icon type="filter" size="small" onClick={clickHandler} />
      <br />
      <Icon type="filter" size="medium" onClick={clickHandler} />
      <br />
      <Icon type="filter" size="large" title="Test title" onClick={clickHandler} />
    </>
  )
}
