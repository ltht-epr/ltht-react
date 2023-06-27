import styled from '@emotion/styled'
import { Button } from '@ltht-react/button'
import { CheckIcon, CrossIcon, SpinnerIcon } from '@ltht-react/icon'
import { BTN_COLOURS } from '@ltht-react/styles'
import { Maybe, Task } from '@ltht-react/types'
import { FC } from 'react'

const SuccessButton = styled(Button)`
  background-color: ${BTN_COLOURS.WORKFLOW.VALUE};
  cursor: auto;
  :hover {
    background-color: ${BTN_COLOURS.WORKFLOW.VALUE};
    cursor: auto !important;
  }
`

const FailButton = styled(Button)`
  background-color: ${BTN_COLOURS.DANGER.VALUE};
  cursor: auto;
  :hover {
    background-color: ${BTN_COLOURS.DANGER.VALUE};
    cursor: auto !important;
  }
`

const ActionButton: FC<IProps> = ({ adminAction, actionClickHandler }) => {
  if (adminAction.isSuccess === true) {
    return <SuccessButton type="button" value="Done" icon={<CheckIcon size="medium" />} />
  }
  if (adminAction.isSuccess === false) {
    return <FailButton type="button" value={adminAction.failText} icon={<CrossIcon size="medium" status="default" />} />
  }

  return (
    <Button
      type="button"
      title="Perform Action"
      value={!adminAction.isLoading ? 'Perform Action' : 'Loading'}
      icon={adminAction.isLoading && <SpinnerIcon size="medium" />}
      onClick={adminAction.isLoading ? () => undefined : () => actionClickHandler(adminAction)}
    />
  )
}

interface IProps {
  adminAction: IAdminAction
  actionClickHandler(adminAction: IAdminAction): void
}

export interface IAdminAction {
  task: Task
  isLoading: boolean
  isSuccess: Maybe<boolean>
  failText: string
}

export default ActionButton
