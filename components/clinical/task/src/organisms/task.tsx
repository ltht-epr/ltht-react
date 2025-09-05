import { FC } from 'react'
import styled from '@emotion/styled'
import { Task as ITask, TaskStatusCode } from '@ltht-react/types'
import ActionMenu, { ActionMenuOption } from '@ltht-react/menu'
import Icon from '@ltht-react/icon'
import { BTN_COLOURS } from '@ltht-react/styles'
import { getStringExtension } from '@ltht-react/utils'
import Description from '../atoms/task-description'
import Status from '../atoms/task-status'
import Redacted from '../molecules/task-redacted'
import Users from '../atoms/task-users'

const StyledTask = styled.div<IStyledTask>`
  display: flex;
  flex-direction: row;
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

const LeftSection = styled.div`
  flex-grow: 1;
  text-align: left;
  margin-right: 0.4rem;
`

const DisplayDueTime = styled.div``

const RightSection = styled.div`
  text-align: right;
  margin-left: 0.1rem;
  min-width: 100px;
`

const ActionMenuSection = styled.div`
  text-align: right;
  margin-left: 0.6rem;
  min-width: 28px;
`

const Task: FC<IProps> = ({
  task: {
    id,
    status,
    description,
    metadata: { isRedacted },
    extension,
  },
  users,
  user,
  actions,
  hoverText,
}) => {
  if (isRedacted) return <Redacted />

  return (
    <StyledTask status={status}>
      <LeftSection>
        <Description cancelled={status === TaskStatusCode.Cancelled} hoverText={hoverText} description={description} />
        <Users user={user} users={users} />
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
            id={`${id}_action_menu`}
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
  users?: string
  user?: string
  actions?: ActionMenuOption[]
  hoverText?: string
}

interface IStyledTask {
  status: TaskStatusCode
}

export default Task
