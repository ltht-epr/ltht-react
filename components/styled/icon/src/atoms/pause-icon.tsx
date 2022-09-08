import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const PauseIcon: FC<PauseIconProps> = ({ size, ...rest }) => (
  <FontAwesomeIcon className="icon__pause" icon={faPause} size={calculateIconSize(size)} {...rest} />
)

interface PauseIconProps {
  size: IconSizes
}

export default PauseIcon
