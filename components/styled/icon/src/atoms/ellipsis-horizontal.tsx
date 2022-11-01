import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const EllipsisHorizontalIcon: FC<EllipsisHorizontalIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__ellipsis__horizontal`.trimStart()}
    icon={faEllipsisH}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface EllipsisHorizontalIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default EllipsisHorizontalIcon
