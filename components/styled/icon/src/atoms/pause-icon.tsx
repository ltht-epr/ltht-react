import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const PauseIcon: FC<PauseIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__pause`.trimStart()}
    icon={faPause}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface PauseIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default PauseIcon
