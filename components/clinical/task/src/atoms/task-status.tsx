import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { titleCase } from '@ltht-react/utils'
import { TaskStatusCode } from '@ltht-react/types'

const generateStatusColour = (status: TaskStatusCode) => {
  switch (status) {
    case TaskStatusCode.Overdue:
      return `red`
    case TaskStatusCode.Due:
      return `#ffa500`
    default:
      return `${TEXT_COLOURS.SECONDARY.VALUE}`
  }
}

const StyledTaskStatus = styled.small<IProps>`
  color: ${({ status }) => generateStatusColour(status)};
`

const TaskStatus: FC<IProps> = ({ status }) => {
  if (status) return <StyledTaskStatus status={status}>{status && titleCase(status)}</StyledTaskStatus>

  return null
}

interface IProps {
  status: TaskStatusCode
}

export default TaskStatus
