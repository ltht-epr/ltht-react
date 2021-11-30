import { FC } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, IconSizes, ICON_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.DEFAULT.VALUE};
`

const CommentIcon: FC<ExternalLinkIconProps> = ({ size }) => (
  <StyledFontAwesomeIcon className="icon__comment" icon={faCommentDots} size={calculateIconSize(size)} />
)

interface ExternalLinkIconProps {
  size: IconSizes
}

export default CommentIcon
