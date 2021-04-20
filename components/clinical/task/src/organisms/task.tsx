import { FC } from 'react'
import styled from '@emotion/styled'
import { Task as ITask } from '@ltht-react/types'

import Description from '../atoms/task-description'
import DueDate from '../atoms/task-due-date'
import Status from '../atoms/task-status'
import Redacted from '../molecules/task-redacted'

const StyledTask = styled.div<IStyledTask>`
  display: flex;
  align-items: center;

  ${({ status }) =>
    status === 'OVERDUE' &&
    `
    * {
      color: red;
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
  if (isRedacted) return <Redacted />

  return (
    <StyledTask status={status}>
      <Description description={description} />
      <RightSection>
        <DueDate executionPeriod={executionPeriod} status={status} />
        <Status status={status} />
      </RightSection>
    </StyledTask>
  )
}

interface IProps {
  task: ITask
}

interface IStyledTask {
  status: StatusCodes
}

export type StatusCodes = 'NOT_YET_DUE' | 'DUE' | 'OVERDUE' | 'COMPLETE' | 'SUSPENDED' | 'CANCELLED' | 'SKIPPED'

export default Task
