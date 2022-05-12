import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'

const ToggleOnIcon: FC<ToggleOnIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__toggle--on" icon={faToggleOn} size={calculateIconSize(size)} />
)

interface ToggleOnIconProps {
  size: IconSizes
}

export default ToggleOnIcon
