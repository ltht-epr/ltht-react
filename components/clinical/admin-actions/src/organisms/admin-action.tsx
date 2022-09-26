import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe, Task } from '@ltht-react/types'
import { SpinnerIcon, CheckIcon, CrossIcon } from '@ltht-react/icon'
import { Button } from '@ltht-react/button'
import { BTN_COLOURS } from '@ltht-react/styles'
import Description from '../atoms/admin-action-description'

const StyledAdminAction = styled.div`
  display: flex;
  align-items: center;
`

const RightSection = styled.div`
  text-align: right;
`

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

const AdminAction: FC<IProps> = ({ adminAction, actionClickHandler }) => (
  <StyledAdminAction>
    <Description description={adminAction.task.description} />
    <RightSection>
      {adminAction.isSuccess == null && (
        <Button
          type="button"
          title="Perform Action"
          value={!adminAction.isLoading ? 'Perform Action' : 'Loading'}
          icon={adminAction.isLoading && <SpinnerIcon size="medium" />}
          onClick={() => actionClickHandler(adminAction)}
        />
      )}
      {adminAction.isSuccess === true && (
        <SuccessButton type="button" value="Done" icon={<CheckIcon size="medium" />} />
      )}
      {adminAction.isSuccess === false && (
        <FailButton type="button" value="Failed - Please report to tech services" icon={<CrossIcon size="medium" />} />
      )}
    </RightSection>
  </StyledAdminAction>
)

interface IProps {
  adminAction: IAdminAction
  actionClickHandler(adminAction: IAdminAction): void
}

export interface IAdminAction {
  task: Task
  isLoading: boolean
  isSuccess: Maybe<boolean>
}

export default AdminAction
