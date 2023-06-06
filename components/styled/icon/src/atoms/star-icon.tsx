import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSize } from '@ltht-react/styles'

const StarIcon: FC<StarIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__play`.trimStart()}
    icon={faStar}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface StarIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default StarIcon
