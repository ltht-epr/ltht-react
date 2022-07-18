import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const FilterIcon: FC<FilterIconProps> = ({ size, ...rest }) => (
  <FontAwesomeIcon className="icon__filter" icon={faFilter} size={calculateIconSize(size)} {...rest} />
)

interface FilterIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}
export default FilterIcon
