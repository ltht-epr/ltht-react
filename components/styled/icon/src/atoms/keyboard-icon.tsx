import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'

const KeyboardIcon: FC<KeyboardIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__keyboard`.trimStart()}
    icon={faKeyboard}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface KeyboardIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default KeyboardIcon
