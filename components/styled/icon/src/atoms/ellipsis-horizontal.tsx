import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const EllipsisHorizontalIcon: FC<EllipsisHorizontalIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__ellipsis__horizontal" icon={faEllipsisH} size={calculateIconSize(size)} />
)

interface EllipsisHorizontalIconProps {
  size: IconSizes
}

export default EllipsisHorizontalIcon
