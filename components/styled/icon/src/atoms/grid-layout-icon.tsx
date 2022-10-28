import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'

const GridLayoutIcon: FC<GridLayoutIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__grid-layout`.trimStart()}
    icon={faGripHorizontal}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface GridLayoutIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default GridLayoutIcon
