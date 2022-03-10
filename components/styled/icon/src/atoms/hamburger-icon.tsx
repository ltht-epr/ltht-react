import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerIcon: FC<ExternalLinkIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__hamburger" icon={faBars} size={calculateIconSize(size)} />
)

interface ExternalLinkIconProps {
  size: IconSizes
}

export default HamburgerIcon
