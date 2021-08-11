import { Story } from '@storybook/react'
import Badge from '@ltht-react/badge'

export const PrimaryBadge: Story = () => <Badge type="primary">Primary Badge</Badge>
export const StandardBadge: Story = () => <Badge type="standard">Primary Badge</Badge>
export const WorkflowBadge: Story = () => <Badge type="workflow">Primary Badge</Badge>
export const DangerBadge: Story = () => <Badge type="danger">Primary Badge</Badge>

export default { title: 'UI/Atoms/Badges' }
