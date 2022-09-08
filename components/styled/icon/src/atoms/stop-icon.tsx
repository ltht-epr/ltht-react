import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const StopIcon: FC<StopIconProps> = ({ size, ...rest }) => (
  <FontAwesomeIcon className="icon__Stop" icon={faStop} size={calculateIconSize(size)} {...rest} />
)

interface StopIconProps {
  size: IconSizes
}

export default StopIcon
