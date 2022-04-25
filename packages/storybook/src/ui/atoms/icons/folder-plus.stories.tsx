import { Story } from '@storybook/react'
import { FolderPlusIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const FolderPlus: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const clickHandler = (): void => {}

  return (
    <>
      <FolderPlusIcon size="small" />
      <br />
      <FolderPlusIcon size="medium" />
      <br />
      <FolderPlusIcon size="large" title="Test title" />
      <br />
      <FolderPlusIcon size="small" clickHandler={clickHandler} />
      <br />
      <FolderPlusIcon size="medium" clickHandler={clickHandler} />
      <br />
      <FolderPlusIcon size="large" title="Test title" clickHandler={clickHandler} />
    </>
  )
}
