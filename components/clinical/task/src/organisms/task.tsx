import { FC } from 'react'
import styled from '@emotion/styled'
import { Task as ITask, TaskStatusCode } from '@ltht-react/types'
import ActionMenu, { ActionMenuOption } from '@ltht-react/menu'
import Icon from '@ltht-react/icon'
import { BTN_COLOURS } from '@ltht-react/styles'
import Description from '../atoms/task-description'
import Date from '../atoms/task-date'
import Status from '../atoms/task-status'
import Redacted from '../molecules/task-redacted'

const StyledTask = styled.div<IStyledTask>`
  display: flex;
  align-items: center;

  ${({ status }) =>
    status === TaskStatusCode.Overdue &&
    `
    color: red;
  `}
  ${({ status }) =>
    status === TaskStatusCode.Due &&
    `
    color: #ffa500;
  `}
`
const StyledActionMenu = styled(ActionMenu)`
  margin-left: auto;
  margin-right: 0.3rem;
`

const RightSection = styled.div`
  text-align: right;
  margin-left: 0.4rem;
`

const Task: FC<IProps> = ({
  task: {
    status,
    description,
    metadata: { isRedacted },
    executionPeriod,
  },
  actions,
}) => {
  if (isRedacted) return <Redacted executionPeriod={executionPeriod} status={status} />

  return (
    <StyledTask status={status}>
      <Description cancelled={status === TaskStatusCode.Cancelled} description={description} />
      {actions && (
        <StyledActionMenu
          id="look-at-me"
          actions={actions}
          menuButtonOptions={{
            type: 'button',
            text: '',
            buttonProps: {
              styling: {
                buttonStyle: 'standard',
                padding: '0.4rem',
              },
              icon: <Icon {...{ type: 'ellipsis-vertical', size: 'medium' }} />,
              iconPlacement: 'center',
              color: `${BTN_COLOURS.DANGER.VALUE}`,
            },
          }}
        />
      )}
      <RightSection>
        {![TaskStatusCode.Complete, TaskStatusCode.Cancelled].includes(status) && (
          <Date executionPeriod={executionPeriod} status={status} />
        )}
        <Status status={status} />
      </RightSection>
    </StyledTask>
  )
}

interface IProps {
  task: ITask
  actions?: ActionMenuOption[]
}

interface IStyledTask {
  status: TaskStatusCode
}

export default Task
