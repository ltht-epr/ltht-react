import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const EllipsisVerticalIcon: FC<EllipsisVerticalIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__ellipsis__vertical" icon={faEllipsisV} size={calculateIconSize(size)} />
)

interface EllipsisVerticalIconProps {
  size: IconSizes
}

export default EllipsisVerticalIcon
