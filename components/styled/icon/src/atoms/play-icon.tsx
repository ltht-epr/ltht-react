import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const PlayIcon: FC<PlayIconProps> = ({ size, ...rest }) => (
  <FontAwesomeIcon className="icon__play" icon={faPlay} size={calculateIconSize(size)} {...rest} />
)

interface PlayIconProps {
  size: IconSizes
}

export default PlayIcon
