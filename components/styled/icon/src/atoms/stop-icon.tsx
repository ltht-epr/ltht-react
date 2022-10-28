import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const StopIcon: FC<StopIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__Stop`.trimStart()}
    icon={faStop}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface StopIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default StopIcon
