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

export const ClearButton: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" buttonStyle="clear" value="Clear Button" />
    </div>
    <div>
      <Button type="button" buttonStyle="clear" value="Clear Button" disabled />
    </div>
  </>
)

export const ButtonWithLeftIcon: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" value="Button With Icon" icon={<PlusIcon size="medium" />} iconPlacement="left" />
    </div>
    <div>
      <Button type="button" value="Button With Icon" icon={<PlusIcon size="medium" />} iconPlacement="left" disabled />
    </div>
  </>
)

export const ButtonWithRightIcon: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" value="Button With Icon" icon={<PlusIcon size="medium" />} iconPlacement="right" />
    </div>
    <div>
      <Button type="button" value="Button With Icon" icon={<PlusIcon size="medium" />} iconPlacement="right" disabled />
    </div>
  </>
)

export const ButtonWithCenterIcon: Story = () => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button type="button" icon={<PlusIcon size="medium" />} iconPlacement="center" />
    </div>
    <div>
      <Button type="button" icon={<PlusIcon size="medium" />} iconPlacement="center" disabled />
    </div>
  </>
)

export default { title: 'UI/Atoms/Buttons' }
