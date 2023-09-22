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
import Assignee from '../atoms/task-assignee'

const StyledTask = styled.div<IStyledTask>`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 35px;

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

const LeftSection = styled.div`
  text-align: left;
  margin-right: 0.4rem;
  flex-grow: 1;
  flex-basis: fit-content;
`

const ActionMenuSection = styled.div`
  margin-left: auto;
  margin-left: 0.3rem;
  flex-grow: 0;
  flex-basis: fit-content;
`

const RightSection = styled.div`
  text-align: right;
  margin-left: 0.4rem;
  flex-grow: 0;
  flex-basis: fit-content;
  flex-shrink: 1;
  min-width: 100px;
`

const Task: FC<IProps> = ({
  task: {
    status,
    description,
    metadata: { isRedacted },
    executionPeriod,
  },
  assignedTeam,
  assignedUser,
  actions,
}) => {
  if (isRedacted) return <Redacted executionPeriod={executionPeriod} status={status} />

  return (
    <StyledTask status={status}>
      <LeftSection>
        <Description cancelled={status === TaskStatusCode.Cancelled} description={description} />
        <Assignee assignedUser={assignedUser} assignedTeam={assignedTeam} />
      </LeftSection>

      <ActionMenuSection>
        {actions && (
          <ActionMenu
            actions={actions}
            menuButtonOptions={{
              type: 'button',
              text: '',
              buttonProps: {
                styling: {
                  buttonStyle: 'standard',
                  padding: '0.4rem',
                },
                icon: <Icon {...{ type: 'ellipsis-horizontal', size: 'medium' }} />,
                iconPlacement: 'center',
                color: `${BTN_COLOURS.DANGER.VALUE}`,
              },
            }}
          />
        )}
      </ActionMenuSection>

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
  assignedTeam?: string
  assignedUser?: string
  actions?: ActionMenuOption[]
}

interface IStyledTask {
  status: TaskStatusCode
}

export default Task
