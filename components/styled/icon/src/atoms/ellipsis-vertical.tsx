import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const EllipsisVerticalIcon: FC<EllipsisVerticalIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__ellipsis__vertical`.trimStart()}
    icon={faEllipsisV}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface EllipsisVerticalIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default EllipsisVerticalIcon
