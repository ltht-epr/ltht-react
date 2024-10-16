import { FC } from 'react'
import styled from '@emotion/styled'
import { Task as ITask, TaskStatusCode } from '@ltht-react/types'
import ActionMenu, { ActionMenuOption } from '@ltht-react/menu'
import Icon from '@ltht-react/icon'
import { BTN_COLOURS } from '@ltht-react/styles'
import Description from '../atoms/task-description'
import Status from '../atoms/task-status'
import Redacted from '../molecules/task-redacted'
import Assignee from '../atoms/task-assignee'
import { getStringExtension } from '@ltht-react/utils'

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
  flex-basis: fit-content;
  flex-grow: 1;
  text-align: left;
  margin-right: 0.4rem;
`

const DisplayDueTime = styled.div``

const RightSection = styled.div`
  flex-basis: fit-content;
  text-align: right;
  margin-left: 0.1rem;
  min-width: 100px;
`

const ActionMenuSection = styled.div`
  flex-basis: fit-content;
  text-align: right;
  margin-left: 0.6rem;
  min-width: 28px;
`

const Task: FC<IProps> = ({
  task: {
    status,
    description,
    metadata: { isRedacted },
    extension,
  },
  assignedTeam,
  assignedUser,
  actions,
}) => {
  if (isRedacted) return <Redacted />

  return (
    <StyledTask status={status}>
      <LeftSection>
        <Description cancelled={status === TaskStatusCode.Cancelled} description={description} />
        <Assignee assignedUser={assignedUser} assignedTeam={assignedTeam} />
      </LeftSection>

      <RightSection>
        {![TaskStatusCode.Complete, TaskStatusCode.Cancelled].includes(status) && (
          <DisplayDueTime>
            {getStringExtension(extension, 'https://leedsth.nhs.uk/task/display-due-time')}
          </DisplayDueTime>
        )}
        <Status status={status} />
      </RightSection>

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
