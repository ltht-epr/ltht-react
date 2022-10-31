import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSize } from '@ltht-react/styles'

const PauseIcon: FC<PauseIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__pause`.trimStart()}
    icon={faPause}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface PauseIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default PauseIcon
