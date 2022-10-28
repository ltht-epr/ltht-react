import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'

const ToggleOffIcon: FC<ToggleOffIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__toggle--off`.trimStart()}
    icon={faToggleOff}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface ToggleOffIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default ToggleOffIcon
