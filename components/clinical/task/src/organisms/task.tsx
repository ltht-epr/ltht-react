import { FC, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Task as ITask } from '@ltht-react/types'
import moment from 'moment'

import Description from '../atoms/task-description'
import DueDate from '../atoms/task-due-date'
import Status from '../atoms/task-status'
import Redacted from '../molecules/task-redacted'

const StyledTask = styled.div<IStyledTask>`
  display: flex;
  align-items: center;

  ${({ status }) =>
    status === 'overdue' &&
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
    description,
    metadata: { isRedacted },
    executionPeriod,
  },
}) => {
  const [status, setStatus] = useState<Statuses | null>(null)

  useEffect(() => {
    const isDue = moment().diff(executionPeriod?.start?.value) > 0 && moment().diff(executionPeriod?.end?.value) < 0
    const isOverdue = moment().diff(executionPeriod?.end?.value) > 0

    if (isDue) setStatus('due')
    if (isOverdue) setStatus('overdue')
  }, [])

  if (isRedacted) return <Redacted />

  return (
    <StyledTask status={status}>
      <Description description={description} />
      <RightSection>
        <DueDate>
          {status === 'overdue'
            ? moment(executionPeriod?.end?.value).fromNow()
            : moment(executionPeriod?.start?.value).fromNow()}
        </DueDate>
        <Status status={status} />
      </RightSection>
    </StyledTask>
  )
}

interface IProps {
  task: ITask
}

interface IStyledTask {
  status: Statuses | null
}

export type Statuses = 'due' | 'overdue'

export default Task
