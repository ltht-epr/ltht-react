import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const CheckIcon: FC<CheckIconProps> = ({ size, ...rest }) => (
  <div {...rest}>
    <FontAwesomeIcon className="icon__check" icon={faCheck} size={calculateIconSize(size)} />
  </div>
)

interface CheckIconProps extends HTMLAttributes<HTMLDivElement> {
  size: IconSizes
}

export default CheckIcon
