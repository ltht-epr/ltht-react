import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerIcon: FC<ExternalLinkIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__hamburger`.trimStart()}
    icon={faBars}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface ExternalLinkIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default HamburgerIcon
