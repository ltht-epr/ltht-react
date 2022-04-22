import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const CommentIcon: FC<ExternalLinkIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__comment" icon={faCommentDots} size={calculateIconSize(size)} />
)

interface ExternalLinkIconProps {
  size: IconSizes
}

export default CommentIcon
