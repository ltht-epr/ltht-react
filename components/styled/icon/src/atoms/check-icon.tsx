import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const CheckIcon: FC<CheckIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__check`.trimStart()}
    icon={faCheck}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface CheckIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default CheckIcon
