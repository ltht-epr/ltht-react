import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'

const GridLayoutIcon: FC<GridLayoutIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__grid-layout" icon={faGripHorizontal} size={calculateIconSize(size)} />
)

interface GridLayoutIconProps {
  size: IconSizes
}

export default GridLayoutIcon
