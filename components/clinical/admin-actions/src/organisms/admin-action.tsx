import { FC, useState } from 'react'
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

const AdminAction: FC<IProps> = ({ task, actionClickHandler }) => {
  const [actionLoading, setActionLoading] = useState(false)
  const [actionResult, setActionResult] = useState<Maybe<boolean>>(null)

  const clickHandler = () => {
    setActionLoading(true)
    actionClickHandler().then((result) => {
      setActionLoading(false)
      setActionResult(result)
    })
  }

  return (
    <StyledAdminAction>
      <Description description={task.description} />
      <RightSection>
        {actionResult == null && (
          <Button
            type="button"
            title="Perform Action"
            value={!actionLoading ? 'Perform Action' : 'Loading'}
            icon={actionLoading && <SpinnerIcon size="medium" />}
            onClick={clickHandler}
          />
        )}
        {actionResult === true && <SuccessButton type="button" value="Done" icon={<CheckIcon size="medium" />} />}
        {actionResult === false && (
          <FailButton
            type="button"
            value="Failed - Please report to tech services"
            icon={<CrossIcon size="medium" />}
          />
        )}
      </RightSection>
    </StyledAdminAction>
  )
}

interface IProps {
  task: Task
  actionClickHandler(): Promise<boolean>
}

export default AdminAction
