import { PageHeader, SubHeader } from '@ltht-react/header'
import { Story } from '@storybook/react'

export const PageHeaderStory: Story = () => <PageHeader>Header</PageHeader>
PageHeaderStory.storyName = 'Page Header'

export const SubHeaderStory: Story = () => <SubHeader>Sub Header</SubHeader>
SubHeaderStory.storyName = 'Sub Header'

export default { title: 'UI/Atoms/Headers' }
