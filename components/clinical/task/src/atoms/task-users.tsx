import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import Icon from '@ltht-react/icon'

const StyledDescription = styled.small`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  flex: 1;
  margin-right: 0.5rem;
`

const StyledTextRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: left;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.3rem;
`

const Users: FC<IProps> = ({ user, users }) => (
  <StyledTextRow>
    {user && (
      <span>
        <StyledIcon type="user" size="small" color="grey" />
        <StyledDescription>{user}</StyledDescription>
      </span>
    )}
    {users && (
      <span>
        <StyledIcon type="users" size="small" color="grey" />
        <StyledDescription>{users}</StyledDescription>
      </span>
    )}
  </StyledTextRow>
)

interface IProps {
  users?: string
  user?: string
}

export default Users
