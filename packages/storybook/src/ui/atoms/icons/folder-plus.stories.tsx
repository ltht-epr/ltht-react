import { Story } from '@storybook/react'
import { FolderPlusIcon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const FolderPlus: Story = () => (
  <>
    <FolderPlusIcon size="small" />
    <br />
    <FolderPlusIcon size="medium" />
    <br />
    <FolderPlusIcon size="large" title="Test title" />
  </>
)
