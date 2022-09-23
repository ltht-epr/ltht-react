import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const CheckIcon: FC<CheckIconProps> = ({ size, ...rest }) => (
  <FontAwesomeIcon className="icon__check" icon={faCheck} size={calculateIconSize(size)} {...rest} />
)

interface CheckIconProps {
  size: IconSizes
}

export default CheckIcon
