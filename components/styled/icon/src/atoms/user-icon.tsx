import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, IconSizes, ICON_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.DEFAULT};
`

const UserIcon: FC<UserIconProps> = ({ size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__user`.trimStart()}
    icon={faUser}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface UserIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default UserIcon
