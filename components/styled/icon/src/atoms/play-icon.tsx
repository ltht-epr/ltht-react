import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const PlayIcon: FC<PlayIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__play`.trimStart()}
    icon={faPlay}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface PlayIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default PlayIcon
