import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { titleCase } from '@ltht-react/utils'
import { TaskStatusCode } from '@ltht-react/types'

const StyledTaskStatus = styled.small<IProps>`
  color: ${({ status }) => (status === TaskStatusCode.Overdue ? 'red' : `${TEXT_COLOURS.SECONDARY.VALUE}`)};
`

const TaskStatus: FC<IProps> = ({ status }) => {
  if (status) return <StyledTaskStatus status={status}>{status && titleCase(status)}</StyledTaskStatus>

  return null
}

interface IProps {
  status: TaskStatusCode
}

export default TaskStatus
