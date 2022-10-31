import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSize } from '@ltht-react/styles'

const StopIcon: FC<StopIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__stop`.trimStart()}
    icon={faStop}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface StopIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default StopIcon
