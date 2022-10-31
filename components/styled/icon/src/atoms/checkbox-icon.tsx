import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const CheckboxIcon: FC<CheckIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__checkbox`.trimStart()}
    icon={faCheckSquare}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface CheckIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default CheckboxIcon
