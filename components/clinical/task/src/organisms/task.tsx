import { FC } from 'react'
import styled from '@emotion/styled'
import { Task as ITask } from '@ltht-react/types'

import Redacted from '../molecules/task-redacted'

const StyledTask = styled.div`
  display: flex;
`

const Description = styled.div`
  flex: 1;
`

const DueDate = styled.div`
  font-style: italic;
`

const Task: FC<Props> = ({
  task: {
    description,
    metadata: { isRedacted },
  },
}) => {
  if (isRedacted) return <Redacted />

  return (
    <StyledTask>
      <Description>{description}</Description>
      <DueDate>---Date---</DueDate>
    </StyledTask>
  )
}

interface Props {
  task: ITask
}

export default Task
