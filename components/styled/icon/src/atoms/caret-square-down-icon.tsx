import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons'

const CaretSquareDownIcon: FC<CaretSquareDownIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__caret-square-down`.trimStart()}
    icon={faCaretSquareDown}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface CaretSquareDownIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default CaretSquareDownIcon
