import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const CheckboxIcon: FC<CheckIconProps> = ({ size, ...rest }) => (
  <FontAwesomeIcon className="icon__check" icon={faCheckSquare} size={calculateIconSize(size)} {...rest} />
)

interface CheckIconProps {
  size: IconSizes
}

export default CheckboxIcon
