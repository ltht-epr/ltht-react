import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const FilterIcon: FC<FilterIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__filter`.trimStart()}
    icon={faFilter}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface FilterIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}
export default FilterIcon
