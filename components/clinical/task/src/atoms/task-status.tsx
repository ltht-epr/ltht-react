import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { titleCase } from '@ltht-react/utils'
import { Statuses } from '../organisms/task'

const StyledTaskStatus = styled.small<IProps>`
  color: ${({ status }) => (status === 'overdue' ? 'red' : `${TEXT_COLOURS.SECONDARY.VALUE}`)};
`

const TaskStatus: FC<IProps> = ({ status }) => {
  if (status) return <StyledTaskStatus status={status}>{status && titleCase(status)}</StyledTaskStatus>

  return null
}

interface IProps {
  status: Statuses | null
}

export default TaskStatus
