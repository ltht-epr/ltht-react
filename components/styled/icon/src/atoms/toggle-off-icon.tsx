import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'

const ToggleOffIcon: FC<ToggleOffIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__toggle--off" icon={faToggleOff} size={calculateIconSize(size)} />
)

interface ToggleOffIconProps {
  size: IconSizes
}

export default ToggleOffIcon
