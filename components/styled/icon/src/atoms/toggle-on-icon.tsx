import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'

const ToggleOnIcon: FC<ToggleOnIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__toggle--on`.trimStart()}
    icon={faToggleOn}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface ToggleOnIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default ToggleOnIcon
