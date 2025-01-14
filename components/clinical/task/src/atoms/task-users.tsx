import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import Icon from '@ltht-react/icon'

const StyledDescription = styled.small`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  margin-right: 0.5rem;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.3rem;
`

const Users: FC<IProps> = ({ user, users }) => (
  <>
    {user && (
      <div>
        <StyledIcon type="user" size="small" color="grey" />
        <StyledDescription>{user}</StyledDescription>
      </div>
    )}
    {users && (
      <div>
        <StyledIcon type="users" size="small" color="grey" />
        <StyledDescription>{users}</StyledDescription>
      </div>
    )}
  </>
)

interface IProps {
  users?: string
  user?: string
}

export default Users
