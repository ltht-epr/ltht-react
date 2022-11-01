import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSize } from '@ltht-react/styles'

const SquareIcon: FC<CheckIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__square`.trimStart()}
    icon={faSquareFull}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface CheckIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default SquareIcon
