import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'

const StyledDescription = styled.small`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  flex: 1;
`

const Assignee: FC<IProps> = ({ assignedUser, assignedTeam }) => (
  <StyledDescription>{calculateAssigneeText(assignedUser, assignedTeam)}</StyledDescription>
)

const calculateAssigneeText = (assignedUser: string | undefined, assignedTeam: string | undefined) => {
  if (!assignedUser && !assignedTeam) return null
  if (assignedUser && assignedTeam) return `${assignedUser} | ${assignedTeam}`
  return assignedUser ?? assignedTeam
}

interface IProps {
  assignedUser?: string
  assignedTeam?: string
}

export default Assignee
