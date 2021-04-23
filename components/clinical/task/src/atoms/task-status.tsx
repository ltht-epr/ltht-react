import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { titleCase } from '@ltht-react/utils'
import { StatusCodes } from '../organisms/task'

const StyledTaskStatus = styled.small<IProps>`
  color: ${({ status }) => (status === 'OVERDUE' ? 'red' : `${TEXT_COLOURS.SECONDARY.VALUE}`)};
`

const TaskStatus: FC<IProps> = ({ status }) => {
  if (status) return <StyledTaskStatus status={status}>{status && titleCase(status)}</StyledTaskStatus>

  return null
}

interface IProps {
  status: StatusCodes
}

export default TaskStatus
