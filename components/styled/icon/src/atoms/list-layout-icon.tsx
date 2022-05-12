import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

const ListLayoutIcon: FC<ListLayoutIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__grid-layout" icon={faListUl} size={calculateIconSize(size)} />
)

interface ListLayoutIconProps {
  size: IconSizes
}

export default ListLayoutIcon
