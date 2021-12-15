import { FC } from 'react'
import styled from '@emotion/styled'
import { Task as ITask, TaskStatusCode } from '@ltht-react/types'

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
    * {
      color: red;
    }
  `}
  ${({ status }) =>
    status === TaskStatusCode.Due &&
    `
    * {
      color: #ffa500;
    }
  `}
`

const RightSection = styled.div`
  text-align: right;
`

const Task: FC<IProps> = ({
  task: {
    status,
    description,
    metadata: { isRedacted },
    executionPeriod,
  },
}) => {
  if (isRedacted) return <Redacted executionPeriod={executionPeriod} status={status} />

  return (
    <StyledTask status={status}>
      <Description cancelled={status === TaskStatusCode.Cancelled} description={description} />
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
}

interface IStyledTask {
  status: TaskStatusCode
}

export default Task
