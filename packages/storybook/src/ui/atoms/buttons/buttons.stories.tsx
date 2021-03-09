import { Button } from '@ltht-react/button'
import { PlusIcon } from '@ltht-react/icon'
import { Story } from '@storybook/react'

export const PrimaryButton: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" buttonStyle="primary" value="Primary Button" />
    </div>
    <div>
      <Button type="button" buttonStyle="primary" value="Primary Button" disabled />
    </div>
  </>
)

export const StandardButton: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" buttonStyle="standard" value="Standard Button" />
    </div>
    <div>
      <Button type="button" buttonStyle="standard" value="Standard Button" disabled />
    </div>
  </>
)

export const WorkflowButton: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" buttonStyle="workflow" value="Workflow Button" />
    </div>
    <div>
      <Button type="button" buttonStyle="workflow" value="Workflow Button" disabled />
    </div>
  </>
)

export const DangerButton: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" buttonStyle="danger" value="Danger Button" />
    </div>
    <div>
      <Button type="button" buttonStyle="danger" value="Danger Button" disabled />
    </div>
  </>
)

export const ButtonWithIcon: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" value="Button With Icon" icon={<PlusIcon size="medium" />} />
    </div>
    <div>
      <Button type="button" value="Button With Icon" icon={<PlusIcon size="medium" />} disabled />
    </div>
  </>
)

export default { title: 'UI/Atoms/Buttons' }
