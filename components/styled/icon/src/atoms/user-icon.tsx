import { FC } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, IconSizes, ICON_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.DEFAULT};
`

const UserIcon: FC<UserIconProps> = ({ size }) => (
  <StyledFontAwesomeIcon className="icon__user" icon={faUser} size={calculateIconSize(size)} />
)

interface UserIconProps {
  size: IconSizes
}

export default UserIcon
