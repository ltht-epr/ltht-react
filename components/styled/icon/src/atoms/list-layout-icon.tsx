import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

const ListLayoutIcon: FC<ListLayoutIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__grid-layout`.trimStart()}
    icon={faListUl}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface ListLayoutIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default ListLayoutIcon
