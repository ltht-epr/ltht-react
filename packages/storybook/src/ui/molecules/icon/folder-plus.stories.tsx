import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'
// eslint-disable-next-line import/prefer-default-export
export const FolderPlus: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const clickHandler = (): void => {}
  return (
    <>
      <Icon type="folder-plus" size="small" />
      <br />
      <Icon type="folder-plus" size="medium" />
      <br />
      <Icon type="folder-plus" size="large" title="Test title" />
      <br />
      <Icon type="folder-plus" size="small" onClick={clickHandler} />
      <br />
      <Icon type="folder-plus" size="medium" onClick={clickHandler} />
      <br />
      <Icon type="folder-plus" size="large" title="Test title" onClick={clickHandler} />
    </>
  )
}
