import { Story } from '@storybook/react'
import { UnorderedList, ListItem } from '@ltht-react/list'

export const UnorderedListStory: Story = () => (
  <UnorderedList>
    <ListItem>Term</ListItem>
  </UnorderedList>
)
UnorderedListStory.storyName = 'Unordered List'

export default { title: 'UI/Atoms/Lists' }
