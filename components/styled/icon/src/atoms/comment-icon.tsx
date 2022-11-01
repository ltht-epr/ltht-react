import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const CommentIcon: FC<ExternalLinkIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__comment`.trimStart()}
    icon={faCommentDots}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface ExternalLinkIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default CommentIcon
